# Figma Design Implementation Examples

These examples demonstrate how to apply the Figma Design Implementation skill in common scenarios.

## Example 1: Implementing a Button Component

**User Request**: "Implement this Figma button component: [https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15](https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15)"

### Step-by-Step Actions:

1. **Parse URL**: Extract `fileKey=kL9xQn2VwM8pYrTb4ZcHjF` and `nodeId=42-15`.
2. **Fetch Design Context**:
   ```bash
   get_design_context(fileKey="kL9xQn2VwM8pYrTb4ZcHjF", nodeId="42-15")
   ```
3. **Capture Visual Reference**:
   ```bash
   get_screenshot(fileKey="kL9xQn2VwM8pYrTb4ZcHjF", nodeId="42-15")
   ```
4. **Download Assets**: Check the Figma payload for specific button icons (e.g., arrows, plus signs) and download if necessary.
5. **Check Existing Components**: Verify if a `Button` component already exists in the project.
   - **If yes**: Extend the existing component by adding a new variant or updating styles.
   - **If no**: Create a new component using the project's preferred framework and conventions.
6. **Map Design Tokens**: Map Figma colors (e.g., `#3B82F6`) to the project's design tokens (e.g., `primary-500`).
7. **Implementation**: Build the component and match the visual specifications (padding, border radius, font-size, line-height).
8. **Validation**: Compare the final UI with the screenshot from Step 3.

---

## Example 2: Building a Dashboard Layout

**User Request**: "Build this dashboard: [https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Dashboard?node-id=10-5](https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Dashboard?node-id=10-5)"

### Step-by-Step Actions:

1. **Parse URL**: Extract `fileKey=pR8mNv5KqXzGwY2JtCfL4D` and `nodeId=10-5`.
2. **Fetch Metadata**:
   ```bash
   get_metadata(fileKey="pR8mNv5KqXzGwY2JtCfL4D", nodeId="10-5")
   ```
   *Objective: Understand the nested structure without a massive payload.*
3. **Identify Sections**: From the metadata, identify the `header`, `sidebar`, `main-content`, and any individual widgets or sections.
4. **Fetch Subsection Context**: For each major section, fetch its specific design context:
   ```bash
   get_design_context(fileKey="pR8mNv5KqXzGwY2JtCfL4D", nodeId=":childNodeId")
   ```
5. **Capture Visual Reference**: Get a screenshot of the entire page or specific sections.
6. **Download All Assets**: Collect all logos, icons, and static images.
7. **Assemble Layout**: Build the structural layout using the project's layout primitives (e.g., CSS Grid for the dashboard).
8. **Implement Sections**: Build each section using existing components wherever possible (e.g., using existing `Card` components for dashboard cards).
9. **Validate Responsive Behavior**: Test the layout against Figma constraints (e.g., how the sidebar collapses).
10. **Final Audit**: Ensure all elements are pixel-perfect and accessible.
