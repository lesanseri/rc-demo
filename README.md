# RC demo

Standalone TikTok Ads Manager creative-assets prototype. Open `index.html` directly, or serve this directory with `python3 -m http.server 4173`.

## Creation-flow AIGC layout

- Auto-generated is a dedicated section in the main Creative assets form, below manually selected assets. It is independent of Selected recommendations.
- The main section emphasizes campaign generation and displays each strategy's own handling mode.
- The Auto-generated drawer follows the reference layout: Available now contains ten selectable creatives across two pages; During campaign contains one shared Auto-add / Notify for approval / Don't add preference and four independent strategy switches.
- Available now supports selecting individual creatives, an indeterminate Select all state across both pages, and persistent selections. Saving applies selections; cancelling discards drafts.
- Strategies appear as Remix generation, Visual overlay, Audio refresh and Seedance. Titles, images and See details and previews open the existing reference-style strategy explanation panel.
- Strategy eligibility is independent of handling mode. Selecting Don't add preserves switch states; changing handling mode does not select or clear existing creatives. Detail Save updates the corresponding switch; Cancel discards it.
- The main editor retains its green performance banner and strategy summary. The strategy detail footer opens Brand controls with the original per-strategy settings and persistence.
- Save updates the main summary and local storage. Cancel discards draft strategy changes. Brand Kit controls and strategy descriptions remain available.
- Previously saved global modes and disabled strategies migrate to per-strategy preferences. Existing asset selections remain unchanged.
- Existing demo strategies, including Seedance and Remix, are retained. This prototype does not represent current production availability.

## Editing

The original repository contains a bundled HTML export, without its original application source. The edited components are now maintained in `src/` and embedded into that existing runtime:

- `src/editor.js`: original editor shell with the new top-level section position.
- `src/app.js`: original application state, navigation, and dialogs.
- `src/aigc-layout.js`: readable AIGC summary, strategy controls, and per-strategy brand preferences.
- `src/strategy-detail.js`: strategy explanation side panel and per-strategy content.
- `assets/remix-reference-preview.jpg`: sample frame from the supplied UI reference, embedded by the build.
- `src/brand-controls.js`: original Brand Kit control form, scoped to the selected strategy.
- `src/aigc-layout.css`: scoped layout styles.

After editing, run `node scripts/build.mjs`. Commit the sources and regenerated `index.html` together. The build needs Node.js and no additional dependencies; it preserves the original embedded assets and runtime.

Preferences are stored locally on the current browser/device. No changes affect live ads, and illustrative assets and metrics are not production evidence.
