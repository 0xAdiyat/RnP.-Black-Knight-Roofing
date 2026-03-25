---
name: Figma Design Implementation
description: A structured workflow for translating Figma designs into production-ready code with pixel-perfect accuracy using the Figma MCP server.
---

# Figma Design Implementation

This skill provides a structured workflow for translating Figma designs into production-ready code with pixel-perfect accuracy. It ensures consistent integration with the Figma MCP server, proper use of design tokens, and 1:1 visual parity with designs.

## Prerequisites

- **Figma MCP Server Connected**: Verify the Figma MCP server is connected by checking if tools like `get_design_context` are available. If not, guide the user to enable it.
- **Figma URL**: A URL in the format `https://figma.com/design/:fileKey/:fileName?node-id=1-2`.
- **Design System**: Ideally, the project should have an established design system or component library.

## Workflow

### 1. Get Node ID
Extract the `fileKey` and `nodeId` from the Figma URL.
- **URL**: `https://figma.com/design/:fileKey/:fileName?node-id=1-2`
- **File Key**: The segment after `/design/`.
- **Node ID**: The value of the `node-id` query parameter.

### 2. Fetch Design Context
Run `get_design_context(fileKey=":fileKey", nodeId="nodeId")`. This provides:
- Layout properties (Auto Layout, constraints, sizing)
- Typography specifications
- Color values and design tokens
- Component structure and variants
- Spacing and padding values

> [!TIP]
> If the response is too large or truncated, use `get_metadata` to identify child nodes and fetch them individually.

### 3. Capture Visual Reference
Run `get_screenshot(fileKey=":fileKey", nodeId="nodeId")`. This screenshot is your source of truth for visual validation.

### 4. Download Required Assets
Download images, icons, and SVGs returned by the Figma MCP server.
- Use localhost sources directly.
- **Do not** add new icon packages; use assets from the Figma payload.
- **Do not** use placeholders if a source is provided.

### 5. Translate to Project Conventions
Adapt the Figma output (often standard React/Tailwind) to the project's specific framework and conventions.
- Replace utility classes with project tokens.
- Reuse existing components instead of duplicating functionality.
- Consistently use the project's color, typography, and spacing systems.

### 6. Achieve 1:1 Visual Parity
- Prioritize fidelity to match designs exactly.
- Use design tokens from Figma where available.
- If conflicts exist between design system tokens and Figma specs, prefer the design system but minimize deviations.
- Follow WCAG requirements for accessibility.

### 7. Validate Against Figma
Check the final UI against the Figma screenshot:
- [ ] Layout matches (spacing, alignment, sizing)
- [ ] Typography matches (font, size, weight, line height)
- [ ] Colors match exactly
- [ ] Interactive states work as designed
- [ ] Responsive behavior follows Figma constraints
- [ ] Assets render correctly
- [ ] Accessibility standards met

## Implementation Rules

### Component Organization
- Place UI components in the project's designated directory.
- Follow existing naming conventions.
- Avoid inline styles where possible.

### Design System Integration
- **Always** use existing components first.
- Map Figma tokens to project tokens.
- Document any new components added.

### Code Quality
- Extract hardcoded values to constants or tokens.
- Keep components composable and reusable.
- Add TypeScript types and JSDoc comments.

## Best Practices

- **Context First**: Always fetch `get_design_context` and `get_screenshot` before starting.
- **Incremental Validation**: Validate frequently during implementation.
- **Document Deviations**: If you must deviate for technical or accessibility reasons, document it in comments.
- **Reuse Over Recreation**: Consistency across the codebase is critical.

## Common Issues

- **Truncated Output**: Use `get_metadata` then fetch individual nodes.
- **Visual Mismatch**: Compare side-by-side with the screenshot.
- **Assets Not Loading**: Ensure the local assets endpoint is accessible and use URLs directly.
- **Token Discrepancies**: Prefer project tokens but adjust spacing/sizing for visual fidelity.
