# RC demo

Standalone TikTok Ads Manager creative-assets prototype. Open `index.html` directly, or serve this directory with `python3 -m http.server 4173`.

## Creation-flow AIGC layout

- Auto-generated is a dedicated section in the main Creative assets form, below manually selected assets. It is independent of Selected recommendations.
- The main section emphasizes campaign generation and displays each strategy's own handling mode.
- Its edit action opens the Auto-generated tab, focused on During campaign. Available now and individual creative selection controls are removed from this tab.
- Four strategies (Visual overlay, Audio refresh, Remix generation, Seedance) independently support Auto-add / Notify for approval / Don't add in place of toggles.
- Each strategy expands to show its generated creative previews. Viewing or previewing a creative does not change campaign preferences.
- Save updates the main summary and local storage. Cancel discards draft strategy changes. Brand Kit controls and strategy descriptions remain available.
- Previously saved global modes and disabled strategies migrate to per-strategy preferences. Existing asset selections remain unchanged.
- Existing demo strategies, including Seedance and Remix, are retained. This prototype does not represent current production availability.

## Editing

The original repository contains a bundled HTML export, without its original application source. The edited components are now maintained in `src/` and embedded into that existing runtime:

- `src/editor.js`: original editor shell with the new top-level section position.
- `src/app.js`: original application state, navigation, and dialogs.
- `src/aigc-layout.js`: readable AIGC summary and selection/settings components.
- `src/aigc-layout.css`: scoped layout styles.

After editing, run `node scripts/build.mjs`. Commit the sources and regenerated `index.html` together. The build needs Node.js and no additional dependencies; it preserves the original embedded assets and runtime.

Preferences are stored locally on the current browser/device. No changes affect live ads, and illustrative assets and metrics are not production evidence.
