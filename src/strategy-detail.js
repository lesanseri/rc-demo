const strategyReferencePreview = "__AIGC_REFERENCE_PREVIEW__";
const strategyDetailCopy = [
  {
    description: "Refresh your existing footage with new text, stickers and calls to action.",
    freshness: "Medium", freshnessLevel: 2, risk: "Low", riskLevel: 1,
    bestFor: "Existing creatives that need a fresh message",
    rows: [
      ["Opening hook & first 3s", true, "New text hooks and visual overlays"],
      ["Scene order & pacing", false],
      ["Original footage", false],
      ["Voiceover / dialogue", false],
      ["Product framing & color", false],
      ["Brand logo & CTA", true, "Approved overlays and calls to action"],
    ],
  },
  {
    description: "Refresh the sound of your creative while keeping your original visuals.",
    freshness: "Medium", freshnessLevel: 2, risk: "Medium", riskLevel: 2,
    bestFor: "Strong visuals that need a fresh soundtrack",
    rows: [
      ["Background music", true, "Replaced with a selected soundtrack"],
      ["Voiceover / dialogue", true, "Refreshed when voiceover is enabled"],
      ["Opening hook & first 3s", false],
      ["Original footage", false],
      ["Product framing & color", false],
      ["Brand logo & CTA", false],
    ],
  },
  {
    description: "Take creatives that are already winning and produces new cuts to prevent ad fatigue.",
    freshness: "High", freshnessLevel: 3, risk: "Medium", riskLevel: 2,
    bestFor: "Winning creatives that are starting to fatigue",
    rows: [
      ["Opening hook & first 3s", true, "Re-selected and swapped"],
      ["Scene order & pacing", true, "Reordered, low-retention cut"],
      ["Original footage", false],
      ["Voiceover / dialogue", false],
      ["Product framing & color", false],
      ["Brand logo & CTA", false],
    ],
  },
  {
    description: "Create fresh video variations from your product images and existing creative assets.",
    freshness: "High", freshnessLevel: 3, risk: "High", riskLevel: 3,
    bestFor: "Product assets that need new scenes and visual treatments",
    rows: [
      ["Scenes & visual treatment", true, "New scenes generated from your references"],
      ["Opening hook & first 3s", true, "New opening variations"],
      ["Original source assets", false],
      ["Product information", false],
      ["Script & voiceover", true, "Created from your approved product details"],
      ["Brand logo & CTA", false],
    ],
  },
];

function AigcStrategyDetail({ index, config, mode, onModeChange, onClose, onSave, onControls }) {
  const [sample, setSample] = (0, C.useState)(0);
  const [version, setVersion] = (0, C.useState)("Generated");
  const [playing, setPlaying] = (0, C.useState)(false);
  const name = aigcNames[index];
  const copy = strategyDetailCopy[index];
  const reference = index === 2;
  const currentImage = reference ? strategyReferencePreview
    : Rd[(config.assets[index] + sample) % Rd.length];
  const originalImage = reference ? strategyReferencePreview : Rd[sample % Rd.length];
  const dots = (level, variant) => aigcNode("span", {
    className: `strategy-detail-rating ${variant}`, "aria-hidden": true,
  }, ...[0, 1, 2].map((dot) => aigcNode("i", {
    key: dot, className: dot < level ? "filled" : "",
  })));

  return aigcNode(U.Fragment, {},
    aigcNode("button", { className: "strategy-detail-close", type: "button",
      "aria-label": "Close strategy description", onClick: onClose,
    }, aigcNode(H, { size: 23 })),
    aigcNode("div", { className: "strategy-detail-shell" },
      aigcNode("header", { className: "strategy-detail-header" },
        aigcNode("div", {},
          aigcNode(Iu, { className: "strategy-detail-title" }, name),
          aigcNode(Lu, { className: "strategy-detail-description" }, copy.description)),
        aigcNode(_i, { className: "strategy-toggle strategy-detail-toggle",
          "aria-label": `Enable ${name}`, checked: mode !== "manual",
          onCheckedChange: (checked) => onModeChange(checked
            ? config.strategyModes[index] !== "manual" ? config.strategyModes[index] : "auto"
            : "manual"),
        })),
      aigcNode("div", { className: "strategy-detail-body" },
        aigcNode("section", { className: "strategy-detail-about", "aria-label": `About ${name}` },
          aigcNode("h2", {}, `About ${name.toLowerCase()}`),
          aigcNode("div", { className: "strategy-detail-facts" },
            aigcNode("div", { className: "strategy-detail-fact" },
              aigcNode("span", {}, "Freshness"),
              aigcNode("strong", {}, copy.freshness, dots(copy.freshnessLevel, "freshness"))),
            aigcNode("div", { className: "strategy-detail-fact" },
              aigcNode("span", {}, "Brand-safe risks"),
              aigcNode("strong", {}, copy.risk, dots(copy.riskLevel, "risk"))),
            aigcNode("div", { className: "strategy-detail-fact strategy-detail-best" },
              aigcNode("span", {}, "Best for"),
              aigcNode("strong", {}, copy.bestFor))),
          aigcNode("h3", {}, "What happens to your assets"),
          aigcNode("div", { className: "strategy-detail-table-wrap" },
            aigcNode("table", { className: "strategy-detail-table" },
              aigcNode("thead", {}, aigcNode("tr", {},
                aigcNode("th", { scope: "col" }, "Asset dimension"),
                aigcNode("th", { scope: "col" }, "How it’s handled"))),
              aigcNode("tbody", {}, ...copy.rows.map(([dimension, changed, description]) =>
                aigcNode("tr", { key: dimension },
                  aigcNode("td", {}, dimension),
                  aigcNode("td", {},
                    aigcNode("span", { className: `strategy-detail-status${changed ? " changed" : ""}` },
                      aigcNode("i", { "aria-hidden": true }), changed ? "Changed" : "Kept as-is"),
                    description && aigcNode("small", {}, description)))))))),
        aigcNode("aside", { className: "strategy-detail-samples", "aria-label": "Sample videos" },
          aigcNode("h3", {}, "Sample video (4)"),
          aigcNode("div", { className: "strategy-detail-thumbnails", role: "group", "aria-label": "Choose a sample video" },
            ...[0, 1, 2, 3].map((item) => aigcNode("button", {
              key: item, type: "button", "aria-label": `Sample video ${item + 1}`,
              "aria-pressed": sample === item, className: sample === item ? "selected" : "",
              onClick: () => { setSample(item); setPlaying(false); },
            }, aigcNode("img", { src: reference ? strategyReferencePreview : Rd[(config.assets[index] + item) % Rd.length], alt: "" })))),
          aigcNode("div", { className: "strategy-detail-versions", role: "tablist", "aria-label": "Video version" },
            ...["Generated", "Original"].map((label) => aigcNode("button", {
              key: label, type: "button", role: "tab", "aria-selected": version === label,
              "aria-controls": `strategy-detail-video-${index}`, id: `strategy-detail-tab-${label.toLowerCase()}`,
              className: version === label ? "selected" : "",
              onClick: () => { setVersion(label); setPlaying(false); },
            }, label))),
          aigcNode("div", { className: "strategy-detail-player-wrap", role: "tabpanel",
            id: `strategy-detail-video-${index}`, "aria-labelledby": `strategy-detail-tab-${version.toLowerCase()}`,
          }, aigcNode("button", { className: `strategy-detail-player${reference ? " reference" : ""}${playing ? " is-playing" : ""}`,
            type: "button", "aria-label": `${playing ? "Pause" : "Play"} ${version.toLowerCase()} sample video ${sample + 1}`,
            "aria-pressed": playing, onClick: () => setPlaying((value) => !value),
          },
            aigcNode("img", { src: version === "Generated" ? currentImage : originalImage,
              alt: `${version} ${name} sample ${sample + 1}` }),
            !reference && aigcNode("span", { className: "strategy-detail-phone-ui", "aria-hidden": true },
              aigcNode("span", { className: "strategy-detail-phone-tabs" }, "Following　 For You"),
              aigcNode("span", { className: "strategy-detail-phone-actions" }, "♡", aigcNode("small", {}, "991K"), "☏", aigcNode("small", {}, "3456"), "➤"),
              aigcNode("span", { className: "strategy-detail-phone-caption" },
                aigcNode("strong", {}, "Your brand"), "Fresh ideas. A new way to tell your story.",
                aigcNode("small", {}, "Sponsored"), aigcNode("b", {}, "Shop now"))),
            aigcNode("span", { className: "strategy-detail-play-icon", "aria-hidden": true },
              aigcNode(playing ? ce : ue, { size: 25, fill: "currentColor" }))))),
      ),
      aigcNode("footer", { className: "strategy-detail-footer" },
        aigcNode("button", { className: "strategy-detail-brand-controls", type: "button", onClick: onControls }, "Brand controls"),
        aigcNode("button", { className: "secondary", type: "button", onClick: onClose }, "Cancel"),
        aigcNode("button", { className: "primary", type: "button", onClick: onSave }, "Save")),
    ),
  );
}
