const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const images = [
  '/bg/blue_metal_roofing_modern_house_1775108806352.png',
  '/bg/boulder_cedar_shake_roof_restoration_1775109031784.png',
  '/bg/colorado_metal_roof_installation_denver_1775108996585.png',
  '/bg/colorado_springs_standing_seam_metal_roof_1775109048389.png',
  '/bg/concrete_tile_roof_mediterranean_villa_1775108822858.png',
  '/bg/denver_asphalt_shingle_roof_replacement_1775109013764.png',
  '/bg/luxury_shingle_roof_suburban_home_1775108861940.png',
  '/bg/media__1775108207301.png',
  '/bg/media__1775108211932.png',
  '/bg/media__1775108757153.png',
  '/bg/media__1775108951211.png',
  '/bg/standing_seam_gray_metal_roof_1775108844252.png'
];

let imgIndex = 0;

const files = walk(srcDir);
let modifiedCount = 0;

for (const file of files) {
  if (file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json')) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('placeholders/')) {
      // replace /placeholders/something/image.png
      content = content.replace(/\/placeholders\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+/g, (match) => {
        const img = images[imgIndex % images.length];
        imgIndex++;
        return img;
      });
      // replace /placeholders/image.png
      content = content.replace(/\/placeholders\/[a-zA-Z0-9_.-]+/g, (match) => {
        const img = images[imgIndex % images.length];
        imgIndex++;
        return img;
      });
      fs.writeFileSync(file, content, 'utf8');
      modifiedCount++;
      console.log(`Modified ${file}`);
    }
  }
}

console.log(`Done. Modified ${modifiedCount} files.`);
