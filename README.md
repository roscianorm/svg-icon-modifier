# SVG Icon Modifier - Figma Plugin

A Figma plugin to modify the color and size of SVG icons. This plugin allows users to select frames or individual vector icons and apply changes to their properties.

---

### Features

- Change the **color** of selected vector icons.
- Resize **frames** to fit their contents.
- Works with both individual vectors and frames containing multiple vectors.

---

### Installation

1. Clone or download this repository.
2. Install dependencies using `npm`:
   ```bash
   npm install
    ```
3. Build the plugin:
   ```bash
   npm run build
   ```
4. Open Figma and go to `Plugins` > `Development` > `Import Plugin from Manifest...`.
5. Select the `manifest.json` file from the cloned repository.
6. The plugin should now be available in your Figma plugins list.

---

### Usage
1. Open a Figma file and select the vector icons or frames you want to modify.
2. Run the plugin from the `Plugins` > `Development` > `SVG Icon Modifier`.
3. Use the plugin UI to:
    - Change the color of the selected icons (e.g., `#FF0000` to red).
    - Resize frames.

---

### Project Structure
```
svg-icon-modifier/
├── src/
│   ├── code.ts          # Main plugin logic
│   ├── ui.html          # Plugin UI structure
│   ├── ui.css           # Plugin UI styles
│   └── ui.ts            # Plugin UI logic
├── dist/
│   ├── code.js          # Compiled plugin logic
│   ├── ui.html          # Copied UI structure
│   ├── ui.css           # Copied UI styles
│   └── ui.js            # Compiled UI logic
├── [package.json](http://_vscodecontentref_/0)         # Project dependencies and scripts
├── [tsconfig.json](http://_vscodecontentref_/1)        # TypeScript configuration
├── [webpack.config.js](http://_vscodecontentref_/2)    # Webpack configuration
└── [manifest.json](http://_vscodecontentref_/3)        # Figma plugin manifest
```
---
### Development
Watch for changes and rebuild the plugin:
```bash
npm run watch
```
#### Debugging
- Use `console.log` statements in the `code.ts` or `ui.ts` files to debug.
- Open the Console in Figma to view logs.

---

### Dependencies
- [Figma API](https://www.figma.com/plugin-docs/intro/) - For interacting with Figma documents.
- [TypeScript](https://www.typescriptlang.org/) - For type-safe JavaScript.
- [Webpack](https://webpack.js.org/) - For module bundling.
- [@figma/plugin-typings](https://www.npmjs.com/package/@figma/plugin-typings) - Type definitions for Figma plugins.