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

function readAigcBrandControls() {
  let saved = [];
  try {
    const parsed = JSON.parse(localStorage.getItem("aigc-brand-controls-v1") || "null", (_, value) => {
      const index = value?.__aigcDemoImage;
      return value && typeof value === "object" && Object.keys(value).length === 1 &&
        Number.isInteger(index) && index >= 0 && index < window.__creativeImages.length
        ? window.__creativeImages[index] : value;
    });
    if (Array.isArray(parsed)) saved = parsed;
  } catch {}
  return aigcNames.map((_, index) => {
    const base = structuredClone({ ...Ci, seedance: Ci.seedance || Si });
    const value = saved[index];
    return value && Array.isArray(value.enabled) && Array.isArray(value.words) && Array.isArray(value.tracks)
      ? { ...base, ...value, seedance: Array.isArray(value.seedance?.products) ? value.seedance : base.seedance }
      : base;
  });
}

function saveAigcBrandControls(controls) {
  // Reuse bundled images by reference so the same demo photos aren't copied
  // into browser storage four times. Uploaded images retain their own data.
  const encoded = JSON.stringify(controls, (_, value) => {
    const index = typeof value === "string" ? window.__creativeImages.indexOf(value) : -1;
    return index >= 0 ? { __aigcDemoImage: index } : value;
  });
  localStorage.setItem("aigc-brand-controls-v1", encoded);
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

function AigcPerformanceBanner({ compact = false }) {
  return aigcNode("div", { className: `aigc-performance-banner${compact ? " editor-aigc-performance" : ""}`,
    role: "note", "aria-label": "Creative performance uplift" },
    aigcNode(ve, { size: 16, "aria-hidden": true }),
    aigcNode("p", {}, "Campaigns using auto-generated creatives saw ",
      aigcNode("strong", {}, "+28% CTR"), " and ",
      aigcNode("strong", {}, "+19% CVR"), " on average."));
}

function AigcEditorSummary({ config, onEdit }) {
  const active = config.enabled.filter(Boolean).length;
  const adopted = config.adopted.flat().filter(Boolean).length;
  return aigcNode("section", { className: "editor-aigc", "aria-label": "Auto-generated creative assets" },
    aigcNode("h3", {},
      aigcNode(ge, { size: 17 }), "Auto-generated",
      aigcNode("button", { onClick: onEdit, "aria-label": "Edit auto-generated assets and settings" },
        aigcNode(le, { size: 17 }))),
    aigcNode(AigcPerformanceBanner, { compact: true }),
    aigcNode("strong", { className: "editor-aigc-strategy-title" },
      `Generation strategy during campaign (${active}/${aigcNames.length})`),
    aigcNode("div", { className: "editor-aigc-strategies" },
      ...aigcNames.map((name, index) => aigcNode("button", {
        key: name, onClick: onEdit,
        className: !config.enabled[index] ? "is-disabled" : "is-enabled",
        "aria-label": `${name}: ${aigcModeLabel(config.strategyModes[index])}. Edit settings`,
      }, aigcNode("span", {}, name),
      aigcNode("span", { className: "editor-aigc-strategy-mode" },
        aigcModeLabel(config.strategyModes[index]),
        aigcNode("span", { "aria-hidden": true }, "›"))))),
    adopted > 0 && aigcNode("button", { className: "editor-aigc-adopted-summary", onClick: onEdit },
      aigcNode(N, { size: 12 }), `${adopted} ${adopted === 1 ? "video" : "videos"} adopted individually`),
  );
}

// Generation eligibility and future-video handling are independent preferences.
function withAigcAutomation(config, addMode, enabled) {
  return { ...config, automationLayoutVersion: 1, addMode, enabled: [...enabled],
    strategyModes: enabled.map((active) => active ? addMode : "manual") };
}

const aigcAvailableVideos = Array.from({ length: 10 }, (_, video) => ({
  strategy: [0, 1, 2, 3][video % 4], video: Math.floor(video / 4),
  id: `AI-071125-${String(video + 1).padStart(2, "0")}`,
}));
const aigcCampaignDescriptions = [
  "Add branded logo, subtitles and an end card onto existing footage, without touching the core video.",
  "Swap in approved, on-brand music while keeping the original voiceover and dialogue.",
  "Remix your best videos into fresh variations with new hooks and pacing, so the ad never goes stale.",
  "Create new video variations from your product images and creative assets.",
];

function AigcSelectionPanel({ config, onChange, onDetails }) {
  const [page, setPage] = (0, C.useState)(0);
  const videos = aigcAvailableVideos.slice(page * 5, page * 5 + 5);
  const selected = (item) => config.adopted[item.strategy][item.video];
  const allSelected = aigcAvailableVideos.every(selected);
  const someSelected = aigcAvailableVideos.some(selected);
  const setAdopted = (items, checked) => onChange((current) => ({ ...current,
    adopted: current.adopted.map((row, strategy) => row.map((value, video) =>
      items.some((item) => item.strategy === strategy && item.video === video) ? checked : value)),
  }));
  const modeHelp = {
    auto: "The new creatives will be added without manual approval during ad delivery.",
    review: "You’ll be notified to review and approve new creatives before they are added during ad delivery.",
    manual: "New creatives won’t be added automatically during ad delivery.",
  };
  return aigcNode("div", { className: "aigc-selection-panel aigc-reference-first-layer" },
    aigcNode("section", { className: "aigc-available", "aria-labelledby": "aigc-available-title" },
      aigcNode("h2", { id: "aigc-available-title" }, "Available now"),
      aigcNode("p", { className: "aigc-section-description" },
        "AI creatives already generated for this ad. Review and add them before you publish."),
      aigcNode("div", { className: "aigc-available-toolbar" },
        aigcNode("label", { className: "aigc-select-all" },
          aigcNode("input", { type: "checkbox", checked: allSelected,
            ref: (element) => { if (element) element.indeterminate = someSelected && !allSelected; },
            onChange: (event) => setAdopted(aigcAvailableVideos, event.target.checked),
          }), "Select all"),
        aigcNode("div", { className: "aigc-available-pagination", "aria-label": "Available creatives pages" },
          aigcNode("button", { type: "button", "aria-label": "Previous available creatives page",
            disabled: page === 0, onClick: () => setPage(page - 1) }, "‹"),
          aigcNode("span", {}, `${page + 1} / 2`),
          aigcNode("button", { type: "button", "aria-label": "Next available creatives page",
            disabled: page === 1, onClick: () => setPage(page + 1) }, "›"))),
      aigcNode("div", { className: "aigc-available-grid" }, ...videos.map((item) =>
        aigcNode("article", { className: `aigc-available-card${selected(item) ? " is-selected" : ""}`, key: item.id },
          aigcNode("label", { className: "aigc-available-media" },
            aigcNode("img", { src: Rd[(config.assets[item.strategy] + item.video) % Rd.length], alt: `${aigcNames[item.strategy]} creative ${item.id}` }),
            aigcNode("input", { type: "checkbox", "aria-label": `Select ${item.id}`,
              checked: selected(item), onChange: (event) => setAdopted([item], event.target.checked) }),
            aigcNode("span", { className: "aigc-duration" }, "00:15")),
          aigcNode("p", { className: "aigc-available-id" }, item.id),
          aigcNode("span", { className: "aigc-available-tag" }, aigcNode(ge, { size: 12 }), aigcNames[item.strategy]))))),
    aigcNode("section", { className: "aigc-during", "aria-labelledby": "aigc-during-title" },
      aigcNode("h2", { id: "aigc-during-title" }, "During campaign"),
      aigcNode("p", { className: "aigc-section-description" },
        "Set once and ad fresh automatically. We’ll generate new creatives from your assets using the strategies you turn on."),
      aigcNode("div", { className: "aigc-new-generations" },
        aigcNode("h3", {}, "New generations"),
        aigcNode(AigcModeSelector, { value: config.addMode, strategy: "During campaign",
          onChange: (mode) => onChange((current) => withAigcAutomation(current, mode, current.enabled)) }),
        aigcNode("p", { className: "aigc-generation-help" }, modeHelp[config.addMode])),
      aigcNode("div", { className: "aigc-generation-strategy-heading" },
        aigcNode("h3", {}, "Generation strategy"),
        aigcNode("p", { className: "aigc-section-description" },
          "Each strategy remixes your existing assets differently. Open one to preview.")),
      aigcNode("div", { className: "aigc-strategy-list" }, ...[2, 0, 1, 3].map((index) => {
        const name = aigcNames[index];
        return aigcNode("article", { className: "aigc-strategy-reference-card", key: name },
          aigcNode("button", { className: "aigc-strategy-image-link", type: "button",
            "aria-label": `Preview ${name} strategy`, onClick: () => onDetails(index) },
            aigcNode("img", { className: "aigc-strategy-cover", src: Rd[config.assets[index]], alt: "" })),
          aigcNode("div", { className: "aigc-strategy-copy" },
            aigcNode("button", { className: "aigc-strategy-name", type: "button",
              "aria-label": `About ${name}`, onClick: () => onDetails(index) }, name),
            aigcNode("span", { className: "aigc-strategy-description" }, aigcCampaignDescriptions[index]),
            aigcNode("button", { className: "aigc-text-link aigc-brand-controls-link", type: "button",
              "aria-label": `See details and previews for ${name}`, onClick: () => onDetails(index) },
              "See details and previews", aigcNode("span", { "aria-hidden": true }, "›"))),
          aigcNode(_i, { className: "strategy-toggle aigc-campaign-toggle", "aria-label": `Enable ${name}`,
            checked: config.enabled[index], onCheckedChange: (checked) => onChange((current) =>
              withAigcAutomation(current, current.addMode, current.enabled.map((value, strategy) => strategy === index ? checked : value))) }));
      }))),
  );
}
