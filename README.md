# RC demo

Standalone TikTok Ads Manager creative-assets prototype. Open `index.html` directly, or serve this directory with `python3 -m http.server 4173`.

## Creation-flow AIGC layout

- Auto-generated is a dedicated section in the main Creative assets form, below manually selected assets. It is independent of Selected recommendations.
- The main section shows selected creative count, new-generation handling, and strategy status.
- Its edit action opens the dedicated Auto-generated drawer tab, with Available now selections and During campaign settings.
- Existing creative selections are independent of future-generation strategy toggles and Auto-add / Notify for approval / Don't add.
- Save updates the main summary and local storage. Cancel discards selection and strategy changes. Strategy previews, the creative browser, and Brand Kit controls remain available.
- Existing demo strategies, including Seedance and Remix, are retained. This prototype does not represent current production availability.

## Editing

The original repository contains a bundled HTML export, without its original application source. The edited components are now maintained in `src/` and embedded into that existing runtime:

- `src/editor.js`: original editor shell with the new top-level section position.
- `src/app.js`: original application state, navigation, and dialogs.
- `src/aigc-layout.js`: readable AIGC summary and selection/settings components.
- `src/aigc-layout.css`: scoped layout styles.

After editing, run `node scripts/build.mjs`. Commit the sources and regenerated `index.html` together. The build needs Node.js and no additional dependencies; it preserves the original embedded assets and runtime.

Preferences are stored locally on the current browser/device. No changes affect live ads, and illustrative assets and metrics are not production evidence.
