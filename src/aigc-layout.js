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
const aigcModeHelp = (value) => ({
  auto: "New videos are added to your campaign automatically.",
  review: "Approve new videos before they're added to your campaign.",
  manual: "New videos won't be added automatically.",
})[value];
const aigcNode = (type, props = {}, ...children) =>
  (0, U.jsx)(type, { ...props, ...(children.length ? { children } : {}) });

// Keep the original runtime's enabled flags in sync for legacy dialogs and data.
function withAigcStrategyModes(config, modes) {
  return { ...config, strategyModes: [...modes], enabled: modes.map((mode) => mode !== "manual") };
}

function AigcModeSelector({ value, onChange, strategy, compact = false }) {
  return aigcNode("div", {
    className: `aigc-strategy-modes${compact ? " is-compact" : ""}`,
    role: "radiogroup", "aria-label": `${strategy} new generation handling`,
  }, ...aigcModes.map((mode) => aigcNode("button", {
    key: mode.value, type: "button", role: "radio",
    className: value === mode.value ? "selected" : "",
    "aria-checked": value === mode.value,
    onClick: () => onChange(mode.value),
  }, mode.label)));
}

function AigcEditorSummary({ config, onEdit }) {
  const active = config.strategyModes.filter((mode) => mode !== "manual").length;
  const adopted = config.adopted.flat().filter(Boolean).length;
  return aigcNode("section", { className: "editor-aigc", "aria-label": "Auto-generated creative assets" },
    aigcNode("h3", {},
      aigcNode(ge, { size: 17 }), "Auto-generated",
      aigcNode("button", { onClick: onEdit, "aria-label": "Edit auto-generated assets and settings" },
        aigcNode(le, { size: 17 }))),
    aigcNode("p", { className: "editor-aigc-description" },
      "Keep your campaign fresh with new AI creatives. Choose how each strategy adds new videos during your campaign."),
    aigcNode("strong", { className: "editor-aigc-strategy-title" },
      `Generation strategy during campaign (${active}/${aigcNames.length})`),
    aigcNode("div", { className: "editor-aigc-strategies" },
      ...aigcNames.map((name, index) => aigcNode("button", {
        key: name, onClick: onEdit,
        className: config.strategyModes[index] === "manual" ? "is-disabled" : "is-enabled",
        "aria-label": `${name}: ${aigcModeLabel(config.strategyModes[index])}. Edit settings`,
      }, aigcNode("span", {}, name),
      aigcNode("span", { className: "editor-aigc-strategy-mode" },
        aigcModeLabel(config.strategyModes[index]),
        aigcNode("span", { "aria-hidden": true }, "›"))))),
    adopted > 0 && aigcNode("button", { className: "editor-aigc-adopted-summary", onClick: onEdit },
      aigcNode(N, { size: 12 }), `${adopted} ${adopted === 1 ? "video" : "videos"} adopted individually`),
  );
}

function AigcSelectionPanel({ config, onChange, onDetails, onControls }) {
  const [expanded, setExpanded] = (0, C.useState)([]);
  const [preview, setPreview] = (0, C.useState)(null);
  const [adoptionMessage, setAdoptionMessage] = (0, C.useState)("");
  const [freshAdoption, setFreshAdoption] = (0, C.useState)(null);
  const active = config.strategyModes.filter((mode) => mode !== "manual").length;
  const toggleExpanded = (index) => setExpanded((current) => current.includes(index)
    ? current.filter((item) => item !== index) : [...current, index]);
  const setMode = (index, mode) => onChange((current) => withAigcStrategyModes(current,
    current.strategyModes.map((value, strategy) => strategy === index ? mode : value)));
  const videoName = (strategy, video) => `AI-071125-${strategy + 1}${String(video + 1).padStart(2, "0")}`;
  const toggleAdoption = (strategy, video) => {
    const next = !config.adopted[strategy][video];
    onChange((current) => ({
      ...current,
      adopted: current.adopted.map((items, index) => index === strategy
        ? items.map((value, item) => item === video ? next : value) : items),
    }));
    setAdoptionMessage(`${videoName(strategy, video)} ${next ? "adopted" : "adoption undone"}. Save changes to apply.`);
    setFreshAdoption(next ? `${strategy}:${video}` : null);
  };

  return aigcNode("div", { className: "aigc-selection-panel" },
    aigcNode("section", { className: "aigc-during", "aria-labelledby": "aigc-during-title" },
      aigcNode("div", { className: "aigc-during-heading" },
        aigcNode("div", {},
          aigcNode("h2", { id: "aigc-during-title" }, "During campaign"),
          aigcNode("p", { className: "aigc-section-description" },
            "Keep your ads fresh automatically. Set how each strategy adds new creatives throughout your campaign.")),
        aigcNode("button", { className: "aigc-text-link aigc-brand-link", onClick: onControls }, "Brand Kit & controls")),
      aigcNode("div", { className: "aigc-strategy-heading" },
        aigcNode("h3", {}, "Generation strategies"),
        aigcNode("span", { className: "aigc-active-count" }, `${active} of 4 active`)),
      aigcNode("div", { className: "aigc-strategy-list" }, ...aigcNames.map((name, index) => {
        const isOpen = expanded.includes(index);
        const mode = config.strategyModes[index];
        const adoptedCount = config.adopted[index].filter(Boolean).length;
        return aigcNode("article", {
          className: `aigc-strategy-accordion${isOpen ? " is-expanded" : ""}`,
          key: name,
        },
          aigcNode("div", { className: "aigc-strategy-row" },
            aigcNode("button", {
              className: "aigc-strategy-disclosure", type: "button",
              "aria-expanded": isOpen, "aria-controls": `aigc-strategy-videos-${index}`,
              "aria-label": `${isOpen ? "Collapse" : "Expand"} ${name} generated videos`,
              onClick: () => toggleExpanded(index),
            },
              aigcNode("img", { className: "aigc-strategy-cover", src: Rd[config.assets[index]], alt: "" }),
              aigcNode("span", { className: "aigc-strategy-copy" },
                aigcNode("span", { className: "aigc-strategy-name" }, name),
                aigcNode("span", { className: "aigc-strategy-description" }, aigcDescriptions[index]),
                aigcNode("span", { className: "aigc-generated-count" }, `${zd.length} generated videos`,
                  aigcNode("span", { className: "aigc-disclosure-chevron", "aria-hidden": true }, "⌄")))),
            aigcNode("div", { className: "aigc-strategy-settings" },
              aigcNode(AigcModeSelector, { value: mode, strategy: name,
                onChange: (value) => setMode(index, value) }),
              aigcNode("p", { className: "aigc-mode-help", role: "status" }, aigcModeHelp(mode)))),
          aigcNode("div", { id: `aigc-strategy-videos-${index}`, className: "aigc-strategy-expanded", hidden: !isOpen },
            aigcNode("div", { className: "aigc-generated-heading" },
              aigcNode("h4", {}, "Generated videos", aigcNode("span", {}, `${zd.length}`),
                adoptedCount > 0 && aigcNode("span", { className: "aigc-adopted-count" }, `${adoptedCount} adopted`)),
              aigcNode("button", { className: "aigc-text-link", onClick: () => onDetails(index) }, "About this strategy")),
            aigcNode("div", { className: "aigc-generated-grid" }, ...zd.map((asset, video) => {
              const adopted = config.adopted[index][video];
              const adoptionKey = `${index}:${video}`;
              const clearFreshAdoption = () => setFreshAdoption((current) => current === adoptionKey ? null : current);
              return aigcNode("article", { className: `aigc-video-card${adopted ? " is-adopted" : ""}`, key: asset,
                onPointerLeave: clearFreshAdoption,
              },
                aigcNode("div", { className: "aigc-video-media-wrap" },
                aigcNode("button", {
                  className: "aigc-video-preview", type: "button",
                  "aria-label": `Preview ${name} video ${video + 1}`,
                  onClick: () => setPreview({ strategy: index, video, playing: false }),
                },
                  aigcNode("img", { src: Rd[(config.assets[index] + video) % Rd.length], alt: `${name} generated creative ${video + 1}` }),
                  aigcNode("span", { className: "aigc-video-play", "aria-hidden": true }, aigcNode(ue, { size: 17, fill: "currentColor" })),
                  aigcNode("span", { className: "aigc-duration" }, "00:15")),
                aigcNode("button", {
                  className: `aigc-adopt-action${adopted ? " is-adopted" : ""}${freshAdoption === adoptionKey ? " just-adopted" : ""}`, type: "button",
                  "aria-label": `${adopted ? "Undo adoption of" : "Adopt"} ${name} video ${video + 1}`,
                  "aria-pressed": adopted,
                  onClick: () => toggleAdoption(index, video),
                  onBlur: clearFreshAdoption,
                },
                  aigcNode("span", { className: "aigc-adopt-label", "aria-hidden": true },
                    aigcNode(adopted ? N : de, { size: 11 }), adopted ? "Adopted" : "Adopt"),
                  adopted && aigcNode("span", { className: "aigc-cancel-label", "aria-hidden": true },
                    aigcNode(H, { size: 11 }), "Cancel"))),
                aigcNode("p", {}, videoName(index, video)),
              );
            })),
            aigcNode("p", { className: "aigc-single-adopt-note" },
              "You can adopt individual videos in any mode. Save changes to apply your selections."),
          ));
      })),
      aigcNode("p", { className: "aigc-controls-note" },
        "These preferences apply to new creatives during your campaign. Existing creatives stay unchanged.")),
    aigcNode("p", { className: "sr-only", role: "status", "aria-live": "polite" }, adoptionMessage),
    aigcNode(Mu, { open: preview !== null, onOpenChange: (open) => { if (!open) setPreview(null); } },
      aigcNode(Fu, { className: "aigc-video-dialog" }, preview && aigcNode(U.Fragment, {},
        aigcNode(Iu, { className: "aigc-preview-title" }, `${aigcNames[preview.strategy]} · ${videoName(preview.strategy, preview.video)}`),
        aigcNode(Lu, { className: "aigc-preview-description" }, "Demo creative preview. Generation preferences are managed at the strategy level."),
        aigcNode("div", { className: `strategy-info-media aigc-video-media${preview.playing ? " is-playing" : ""}` },
          aigcNode("img", { src: Rd[(config.assets[preview.strategy] + preview.video) % Rd.length], alt: `${aigcNames[preview.strategy]} creative preview` }),
          aigcNode("button", { className: "strategy-preview-play", "aria-label": preview.playing ? "Pause preview" : "Play preview",
            onClick: () => setPreview((current) => ({ ...current, playing: !current.playing })),
          }, aigcNode(preview.playing ? ce : ue, { size: 28, fill: "currentColor" })),
          aigcNode("span", { className: "strategy-preview-note" }, "Animated image preview")),
        aigcNode("div", { className: "aigc-preview-adoption" },
          aigcNode("span", {}, config.adopted[preview.strategy][preview.video] ? "Adopted for this campaign" : "Adopt this video without changing your strategy settings."),
          aigcNode("button", {
            className: "aigc-preview-adopt-button", type: "button",
            "aria-label": `${config.adopted[preview.strategy][preview.video] ? "Undo adoption of" : "Adopt"} previewed video`,
            "aria-pressed": config.adopted[preview.strategy][preview.video],
            onClick: () => toggleAdoption(preview.strategy, preview.video),
          }, config.adopted[preview.strategy][preview.video] ? "Undo adoption" : "Adopt")),
      ))),
  );
}
