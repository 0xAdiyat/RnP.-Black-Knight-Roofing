<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
>

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap — Black Knight Roofing</title>
        <meta name="robots" content="noindex, follow"/>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          :root {
            --primary: #F2C744;
            --bg: #0f0f0f;
            --surface: #1a1a1a;
            --border: rgba(255,255,255,0.08);
            --text: rgba(255,255,255,0.85);
            --muted: rgba(255,255,255,0.45);
          }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            padding: 2rem 1rem 4rem;
          }
          header {
            max-width: 1100px;
            margin: 0 auto 2.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 1.5rem;
          }
          header a { text-decoration: none; }
          h1 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #fff;
          }
          h1 span { color: var(--primary); }
          .meta {
            margin-top: 0.5rem;
            font-size: 0.875rem;
            color: var(--muted);
          }
          .badge {
            display: inline-flex;
            align-items: center;
            background: rgba(242,199,68,0.12);
            color: var(--primary);
            border: 1px solid rgba(242,199,68,0.3);
            border-radius: 999px;
            padding: 0.15rem 0.65rem;
            font-size: 0.75rem;
            font-weight: 600;
            margin-left: 0.5rem;
          }
          table {
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            border-collapse: collapse;
            font-size: 0.875rem;
          }
          thead th {
            text-align: left;
            padding: 0.65rem 1rem;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--muted);
            background: var(--surface);
            border-bottom: 1px solid var(--border);
          }
          thead th:first-child { border-radius: 8px 0 0 0; }
          thead th:last-child  { border-radius: 0 8px 0 0; }
          tbody tr {
            border-bottom: 1px solid var(--border);
            transition: background 0.15s;
          }
          tbody tr:hover { background: rgba(255,255,255,0.03); }
          tbody td {
            padding: 0.7rem 1rem;
            vertical-align: middle;
          }
          tbody td a {
            color: var(--primary);
            text-decoration: none;
            word-break: break-all;
          }
          tbody td a:hover { text-decoration: underline; }
          .pill {
            display: inline-block;
            padding: 0.1rem 0.5rem;
            border-radius: 999px;
            font-size: 0.7rem;
            font-weight: 600;
            background: rgba(255,255,255,0.06);
            color: var(--muted);
          }
          .prio-high  { color: #4ade80; }
          .prio-mid   { color: var(--primary); }
          .prio-low   { color: var(--muted); }
          footer {
            max-width: 1100px;
            margin: 3rem auto 0;
            font-size: 0.78rem;
            color: var(--muted);
            text-align: center;
          }
        </style>
      </head>
      <body>
        <header>
          <a href="/">
            <h1>Black Knight <span>Roofing</span></h1>
          </a>
          <p class="meta">
            XML Sitemap
            <span class="badge">
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
            </span>
          </p>
        </header>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Freq</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
              <tr>
                <td style="color:#555;width:3rem;text-align:right;">
                  <xsl:value-of select="position()"/>
                </td>
                <td>
                  <a href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td style="white-space:nowrap;color:#999;">
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
                <td>
                  <span class="pill"><xsl:value-of select="sitemap:changefreq"/></span>
                </td>
                <td>
                  <xsl:variable name="p" select="number(sitemap:priority)"/>
                  <xsl:choose>
                    <xsl:when test="$p >= 0.9">
                      <strong class="prio-high"><xsl:value-of select="sitemap:priority"/></strong>
                    </xsl:when>
                    <xsl:when test="$p >= 0.6">
                      <strong class="prio-mid"><xsl:value-of select="sitemap:priority"/></strong>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="prio-low"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>

        <footer>
          Generated dynamically by Black Knight Roofing —
          <a href="https://www.blackknightroofing.com" style="color:#F2C744;">blackknightroofing.com</a>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
