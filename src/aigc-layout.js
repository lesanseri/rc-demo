// These components share the original demo's React runtime and creative assets.
const aigcNames = ["Visual overlay", "Audio refresh", "Remix generation", "Seedance"];
const aigcDescriptions = [
  "Add text, stickers and calls to action to your existing video.",
  "Refresh music and voiceover while keeping your original visuals.",
  "Combine selected clips and refresh their order and pacing.",
  "Create new video variations from your product images and creative assets.",
];
const aigcModes = [
  { value: "auto", label: "Auto-add" },
  { value: "review", label: "Notify for approval" },
  { value: "manual", label: "Don't add" },
];
const aigcModeLabel = (value) => aigcModes.find((mode) => mode.value === value)?.label;
const aigcNode = (type, props = {}, ...children) =>
  (0, U.jsx)(type, { ...props, ...(children.length ? { children } : {}) });

function AigcEditorSummary({ config, onEdit }) {
  const count = config.selected.flat().filter(Boolean).length;
  const enabled = config.enabled.filter(Boolean).length;
  const active = config.addMode !== "manual";
  return aigcNode("section", { className: "editor-aigc", "aria-label": "Auto-generated creative assets" },
    aigcNode("h3", {},
      aigcNode(ge, { size: 17 }), "Auto-generated",
      aigcNode("button", { onClick: onEdit, "aria-label": "Edit auto-generated assets and settings" },
        aigcNode(le, { size: 17 }))),
    aigcNode("p", { className: "editor-aigc-description" },
      "Create fresh variations from your assets. Choose what to use now and how to add new creatives during your campaign."),
    aigcNode("button", { className: "editor-aigc-selection", onClick: onEdit },
      aigcNode("span", { className: "editor-aigc-covers", "aria-hidden": true },
        ...config.selected.flatMap((items, strategy) => items.some(Boolean)
          ? [aigcNode("img", { key: strategy, src: Rd[config.assets[strategy]], alt: "" })] : [])),
      aigcNode("span", {},
        aigcNode("strong", {}, `${count} creatives selected`),
        aigcNode("small", {}, "Review auto-generated selections")),
      aigcNode("span", { className: "aigc-chevron", "aria-hidden": true }, "›")),
    aigcNode("strong", { className: "editor-aigc-strategy-title" },
      `Generation strategy during campaign (${active ? enabled : 0}/${aigcNames.length})`),
    aigcNode("div", { className: "editor-aigc-strategies" },
      aigcNode("span", { className: "editor-aigc-mode" }, aigcModeLabel(config.addMode)),
      ...aigcNames.map((name, index) => aigcNode("button", {
        key: name, onClick: onEdit,
        className: active && config.enabled[index] ? "is-enabled" : "is-disabled",
        "aria-label": `${name}: ${active && config.enabled[index] ? "enabled" : "not adding"}. Edit settings`,
      }, name))),
  );
}

function AigcSelectionPanel({ config, onChange, onStrategyToggle, onModeChange, onDetails, onControls, onViewAssets }) {
  const total = config.selected.flat().length;
  const selected = config.selected.flat().filter(Boolean).length;
  const allSelected = total === selected;
  const automatic = config.addMode === "auto";
  const active = config.addMode !== "manual";
  const setAsset = (strategy, asset, checked) => onChange((current) => ({
    ...current,
    selected: current.selected.map((items, index) => index === strategy
      ? items.map((value, item) => item === asset ? checked : value) : items),
  }));

  return aigcNode("div", { className: "aigc-selection-panel" },
    aigcNode("section", { className: "aigc-available", "aria-labelledby": "aigc-available-title" },
      aigcNode("div", { className: "aigc-panel-heading" },
        aigcNode("div", {},
          aigcNode("h2", { id: "aigc-available-title" }, "Available now"),
          aigcNode("p", {}, "Review ready-to-use variations based on your creative assets.",
            aigcNode("button", { className: "aigc-text-link", onClick: () => onDetails(0) }, "Learn more"))),
        aigcNode(Kd, {
          state: allSelected ? "all" : selected ? "partial" : "none",
          label: "Select all available AI creatives",
          onToggle: () => onChange((current) => ({ ...current,
            selected: current.selected.map((items) => items.map(() => !allSelected)),
          })),
        }),
        aigcNode("span", { className: "aigc-select-label" }, "Select all")),
      aigcNode("div", { className: "aigc-available-grid" }, ...aigcNames.map((name, index) =>
        aigcNode("article", { className: "aigc-available-card", key: name },
          aigcNode("div", { className: "aigc-available-preview" },
            aigcNode("button", { className: "aigc-preview-button", onClick: () => onViewAssets(index), "aria-label": `View ${name} creatives` },
              aigcNode("img", { src: Rd[config.assets[index]], alt: `${name} creative example` }),
              aigcNode("span", { className: "aigc-duration" }, "00:15")),
            aigcNode("input", { type: "checkbox", checked: config.selected[index][0],
              onChange: (event) => setAsset(index, 0, event.target.checked),
              "aria-label": `Select ${name} example` })),
          aigcNode("p", {}, `AI-071125-0${index + 1}`),
          aigcNode("div", { className: "aigc-available-card-footer" },
            aigcNode("span", { className: "aigc-strategy-tag" }, aigcNode(ge, { size: 12 }), name),
            aigcNode("button", { className: "aigc-text-link", onClick: () => onViewAssets(index) },
              `View all (${config.selected[index].filter(Boolean).length})`))),
      )),
      aigcNode("p", { className: "aigc-selection-note" }, `${selected} of ${total} creatives selected. These selections are independent of future generation settings.`)),
    aigcNode("section", { className: "aigc-during", "aria-labelledby": "aigc-during-title" },
      aigcNode("h2", { id: "aigc-during-title" }, "During campaign"),
      aigcNode("p", { className: "aigc-section-description" },
        "Set once and ad fresh automatically. We'll generate new creatives from your assets using the strategies you turn on."),
      aigcNode("h3", { className: "aigc-mode-title" }, "New generations during campaign"),
      aigcNode("div", { className: "add-mode-options", role: "radiogroup", "aria-label": "New AI generations during campaign" },
        ...aigcModes.map((mode) => aigcNode("button", { key: mode.value, role: "radio",
          className: config.addMode === mode.value ? "selected" : "",
          "aria-checked": config.addMode === mode.value,
          onClick: () => onModeChange(mode.value),
        }, mode.label))),
      aigcNode("p", { className: "aigc-mode-help", role: "status" },
        automatic ? "New creatives from enabled strategies will be added automatically."
          : active ? "New creatives require your approval before they can be added."
            : "New creatives won't be added. Your existing selections stay selected."),
      aigcNode("div", { className: "aigc-strategy-heading" },
        aigcNode("h3", {}, "Generation strategy"),
        aigcNode("button", { className: "aigc-text-link", onClick: onControls }, "Brand Kit & controls")),
      aigcNode("p", { className: "aigc-section-description" }, "Each strategy transforms your assets differently. Open one to see details and previews."),
      aigcNode("div", { className: "aigc-strategy-list" }, ...aigcNames.map((name, index) =>
        aigcNode("article", { className: "aigc-strategy-row", key: name },
          aigcNode("button", { className: "aigc-strategy-image", onClick: () => onDetails(index), "aria-label": `Preview ${name} strategy` },
            aigcNode("img", { src: Rd[config.assets[index]], alt: "" }),
            aigcNode("span", {}, aigcNode(ge, { size: 13 }))),
          aigcNode("div", { className: "aigc-strategy-copy" },
            aigcNode("h4", {}, name),
            aigcNode("p", {}, aigcDescriptions[index]),
            aigcNode("button", { className: "aigc-text-link", onClick: () => onDetails(index), "aria-label": `See details and previews for ${name}` }, "See details and previews", aigcNode("span", { "aria-hidden": true }, "›"))),
          aigcNode(_i, { className: "strategy-toggle", checked: config.enabled[index],
            "aria-label": `Enable ${Hd[index].name}`, onCheckedChange: (checked) => onStrategyToggle(index, checked) }))),
      ),
      aigcNode("p", { className: "aigc-controls-note" }, "Generation settings apply to future creatives. Changing these settings doesn't remove creatives already selected.")),
  );
}
