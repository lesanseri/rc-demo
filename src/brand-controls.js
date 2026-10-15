function Ti({ value: e, onCancel: t, onApply: n, strategyIndex = null }) {
  let [r, i] = (0, C.useState)(() =>
      structuredClone({ ...e, seedance: e.seedance || Si }),
    ),
    [a, o] = (0, C.useState)(``),
    [s, c] = (0, C.useState)(!0),
    [l, u] = (0, C.useState)(!1),
    [d, f] = (0, C.useState)(`Uploaded`),
    [p, m] = (0, C.useState)(0),
    [h, g] = (0, C.useState)(``),
    [_, v] = (0, C.useState)(null),
    [y, b] = (0, C.useState)(``),
    x = (e, t) => i((n) => ({ ...n, [e]: t })),
    S = (e, t, n) =>
      (0, U.jsxs)(`section`, {
        className: `control-card`,
        children: [
          (0, U.jsxs)(`h3`, {
            children: [
              e,
              (0, U.jsx)(_i, {
                className: `strategy-toggle`,
                "aria-label": `Enable ${e}`,
                checked: r.enabled[t],
                onCheckedChange: (e) =>
                  x(
                    `enabled`,
                    r.enabled.map((n, r) => (r === t ? e : n)),
                  ),
              }),
            ],
          }),
          (0, U.jsx)(`fieldset`, { disabled: !r.enabled[t], children: n }),
        ],
      }),
    w = r.tracks
      .map((e, t) => ({ ...e, id: t }))
      .filter((e) => e.name.toLowerCase().includes(h.toLowerCase())),
    T = Math.max(1, Math.ceil(w.length / 5)),
    E = Math.min(p, T - 1);
  return (0, U.jsxs)(`section`, {
    className: `aigc-controls-layer`,
    "aria-label": strategyIndex === null ? `AIGC controls` : `${aigcNames[strategyIndex]} brand controls`,
    children: [
      (0, U.jsxs)(`header`, {
        className: `controls-header`,
        children: [
          (0, U.jsx)(`button`, {
            className: `controls-close`,
            "aria-label": `Close AIGC controls`,
            onClick: t,
            children: (0, U.jsx)(H, { size: 20 }),
          }),
          (0, U.jsxs)(`h2`, {
            children: [
              strategyIndex === null ? `AIGC controls ` : `${aigcNames[strategyIndex]} · Brand controls `,
              (0, U.jsxs)(`span`, {
                children: [
                  `Controls `,
                  JSON.stringify(e) === JSON.stringify(Ci)
                    ? `not published`
                    : `applied`,
                ],
              }),
            ],
          }),
          (0, U.jsxs)(`p`, {
            children: [
              strategyIndex === null ? `Provide your brand system settings so our AI can create auto-generated creatives that are on brand. ` : `Customize brand settings for ${aigcNames[strategyIndex]}. These controls apply only to this strategy. `,
              (0, U.jsx)(`button`, {
                onClick: () => u(!l),
                children: `View version history`,
              }),
            ],
          }),
          l &&
            (0, U.jsx)(`p`, {
              className: `controls-history`,
              children: `Current saved controls · Changes apply when you select Apply.`,
            }),
        ],
      }),
      (0, U.jsxs)(`div`, {
        className: `controls-scroll`,
        children: [
          s &&
            (0, U.jsxs)(`div`, {
              className: `controls-how`,
              children: [
                (0, U.jsx)(V, { size: 15 }),
                (0, U.jsxs)(`div`, {
                  children: [
                    (0, U.jsx)(`b`, { children: `How it works` }),
                    (0, U.jsxs)(`ol`, {
                      children: [
                        (0, U.jsxs)(`li`, {
                          children: [
                            (0, U.jsx)(`strong`, {
                              children: `Controls take effect after publish`,
                            }),
                            ` and apply only to newly generated AI creatives.`,
                          ],
                        }),
                        (0, U.jsxs)(`li`, {
                          children: [
                            (0, U.jsx)(`strong`, {
                              children: strategyIndex === null ? `Supported generation types:` : `Applies to:`,
                            }),
                            strategyIndex === null ? ` Auto generation, Music Refresh, and Seedance.` : ` ${aigcNames[strategyIndex]} only.`,
                          ],
                        }),
                        (0, U.jsxs)(`li`, {
                          children: [
                            (0, U.jsx)(`strong`, {
                              children: `Controls do not affect`,
                            }),
                            ` existing assets, in-progress generations, or manually uploaded creatives.`,
                          ],
                        }),
                        (0, U.jsxs)(`li`, {
                          children: [
                            (0, U.jsx)(`strong`, {
                              children: `Only the latest published controls apply`,
                            }),
                            ` to future generations, and each new version replaces the previous one.`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, U.jsx)(`button`, {
                  "aria-label": `Dismiss how it works`,
                  onClick: () => c(!1),
                  children: (0, U.jsx)(H, { size: 16 }),
                }),
              ],
            }),
          (0, U.jsx)(`h2`, {
            className: `controls-section-title`,
            children: `General Settings`,
          }),
          S(
            `Scripts`,
            0,
            (0, U.jsxs)(`div`, {
              className: `control-narrow`,
              children: [
                (0, U.jsx)(`label`, { children: `Restricted words` }),
                (0, U.jsx)(`p`, {
                  children: `Add words or phrases that should not appear in generated content.`,
                }),
                (0, U.jsxs)(`div`, {
                  className: `controls-tags`,
                  children: [
                    r.words.map((e, t) =>
                      (0, U.jsxs)(
                        `span`,
                        {
                          children: [
                            e,
                            (0, U.jsx)(`button`, {
                              "aria-label": `Remove ${e}`,
                              onClick: () =>
                                x(
                                  `words`,
                                  r.words.filter((e, n) => n !== t),
                                ),
                              children: `×`,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                    (0, U.jsx)(`input`, {
                      "aria-label": `Add restricted word`,
                      value: a,
                      placeholder: `Add word…`,
                      onChange: (e) => o(e.target.value),
                      onKeyDown: (e) => {
                        e.key === `Enter` &&
                          a.trim() &&
                          (e.preventDefault(),
                          x(`words`, [...r.words, a.trim()]),
                          o(``));
                      },
                    }),
                  ],
                }),
              ],
            }),
          ),
          S(
            `Brand`,
            2,
            (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(`p`, {
                  children: `Lock the approved brand name and translation in each supported language.`,
                }),
                (0, U.jsxs)(`div`, {
                  className: `control-narrow`,
                  children: [
                    (0, U.jsx)(`label`, { children: `Brand name` }),
                    (0, U.jsx)(`input`, {
                      value: r.brand,
                      onChange: (e) => x(`brand`, e.target.value),
                    }),
                    (0, U.jsxs)(`label`, {
                      className: `controls-check`,
                      children: [
                        (0, U.jsx)(`input`, {
                          type: `checkbox`,
                          checked: r.same,
                          onChange: (e) => x(`same`, e.target.checked),
                        }),
                        `Use the same brand name across all languages`,
                      ],
                    }),
                    (0, U.jsx)(`p`, {
                      children: `When enabled, translations are not needed.`,
                    }),
                    !r.same &&
                      (0, U.jsxs)(U.Fragment, {
                        children: [
                          (0, U.jsx)(`label`, {
                            children: `Brand translation`,
                          }),
                          r.translations.map((e, t) =>
                            (0, U.jsxs)(
                              `div`,
                              {
                                className: `control-translation`,
                                children: [
                                  (0, U.jsx)(`select`, {
                                    "aria-label": `Translation language ${t + 1}`,
                                    value: e.language,
                                    onChange: (e) =>
                                      x(
                                        `translations`,
                                        r.translations.map((n, r) =>
                                          r === t
                                            ? { ...n, language: e.target.value }
                                            : n,
                                        ),
                                      ),
                                    children: [
                                      `Korean`,
                                      `Japanese`,
                                      `English`,
                                      `French`,
                                      `Spanish`,
                                      `German`,
                                    ].map((e) =>
                                      (0, U.jsx)(`option`, { children: e }, e),
                                    ),
                                  }),
                                  (0, U.jsx)(`input`, {
                                    "aria-label": `${e.language} brand name`,
                                    value: e.text,
                                    onChange: (e) =>
                                      x(
                                        `translations`,
                                        r.translations.map((n, r) =>
                                          r === t
                                            ? { ...n, text: e.target.value }
                                            : n,
                                        ),
                                      ),
                                  }),
                                  (0, U.jsx)(`button`, {
                                    "aria-label": `Remove ${e.language} translation`,
                                    onClick: () =>
                                      x(
                                        `translations`,
                                        r.translations.filter(
                                          (e, n) => n !== t,
                                        ),
                                      ),
                                    children: (0, U.jsx)(_e, { size: 14 }),
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                          (0, U.jsx)(`button`, {
                            className: `control-outlined`,
                            onClick: () =>
                              x(`translations`, [
                                ...r.translations,
                                { language: `English`, text: `` },
                              ]),
                            children: `Add controls`,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ),
          (0, U.jsxs)(`div`, {
            className: `controls-bottom-grid`,
            children: [
              (0, U.jsxs)(`div`, {
                children: [
                  S(
                    `Brand logo`,
                    3,
                    (0, U.jsxs)(U.Fragment, {
                      children: [
                        (0, U.jsx)(`label`, { children: `Upload logo` }),
                        (0, U.jsx)(`p`, {
                          children: `Image format: JPG/PNG; File size: Up to 5MB`,
                        }),
                        (0, U.jsxs)(`label`, {
                          className: `control-logo-upload`,
                          children: [
                            (0, U.jsx)(`img`, {
                              src: r.logo,
                              alt: `Brand logo`,
                            }),
                            (0, U.jsx)(`input`, {
                              type: `file`,
                              accept: `image/jpeg,image/png`,
                              onChange: (e) => {
                                let t = e.target.files?.[0];
                                if (!t) return;
                                if (t.size > 5 * 1024 * 1024) {
                                  b(`Logo must be smaller than 5MB.`);
                                  return;
                                }
                                let n = new FileReader();
                                ((n.onload = () => {
                                  (x(`logo`, String(n.result)), b(``));
                                }),
                                  n.readAsDataURL(t));
                              },
                            }),
                          ],
                        }),
                        (0, U.jsx)(`label`, { children: `Logo safe area` }),
                        (0, U.jsx)(wi, {
                          values: [`Top right`, `Top left`],
                          value: r.position,
                          onChange: (e) => x(`position`, e),
                        }),
                        (0, U.jsx)(`label`, { children: `Logo size` }),
                        (0, U.jsxs)(`div`, {
                          className: `control-range`,
                          children: [
                            (0, U.jsx)(`input`, {
                              type: `range`,
                              min: 40,
                              max: 240,
                              value: r.size,
                              onChange: (e) => x(`size`, +e.target.value),
                            }),
                            r.size,
                            `px`,
                          ],
                        }),
                      ],
                    }),
                  ),
                  S(
                    `Subtitle`,
                    4,
                    (0, U.jsxs)(U.Fragment, {
                      children: [
                        (0, U.jsx)(`label`, { children: `Subtitle position` }),
                        (0, U.jsx)(wi, {
                          values: [`Bottom`, `Top`, `Center`],
                          value: r.subtitlePosition,
                          onChange: (e) => x(`subtitlePosition`, e),
                        }),
                        (0, U.jsx)(`label`, { children: `Font` }),
                        (0, U.jsxs)(`select`, {
                          value: r.font,
                          onChange: (e) => x(`font`, e.target.value),
                          children: [
                            (0, U.jsx)(`option`, {
                              value: `Arial`,
                              children: `TikTok Sans Display`,
                            }),
                            (0, U.jsx)(`option`, { children: `Georgia` }),
                            (0, U.jsx)(`option`, { children: `Verdana` }),
                          ],
                        }),
                        (0, U.jsx)(`label`, { children: `Font size` }),
                        (0, U.jsx)(`select`, {
                          value: r.fontSize,
                          onChange: (e) => x(`fontSize`, +e.target.value),
                          children: [14, 16, 18, 20, 24, 28, 32].map((e) =>
                            (0, U.jsxs)(
                              `option`,
                              { value: e, children: [e, `px`] },
                              e,
                            ),
                          ),
                        }),
                        (0, U.jsx)(`label`, { children: `Font style` }),
                        (0, U.jsx)(wi, {
                          values: [`Box`, `Outline`, `Plain`],
                          value: r.style,
                          onChange: (e) => x(`style`, e),
                        }),
                        (0, U.jsx)(`div`, {
                          className: `control-colors`,
                          children: [`color`, `background`].map((e) =>
                            (0, U.jsxs)(
                              `div`,
                              {
                                children: [
                                  (0, U.jsx)(`label`, {
                                    children:
                                      e === `color`
                                        ? `Text color`
                                        : `Background color`,
                                  }),
                                  (0, U.jsxs)(`div`, {
                                    children: [
                                      (0, U.jsx)(`input`, {
                                        type: `color`,
                                        "aria-label": e,
                                        value: r[e],
                                        onChange: (t) => x(e, t.target.value),
                                      }),
                                      (0, U.jsx)(`input`, {
                                        "aria-label": `${e} hex value`,
                                        value: r[e],
                                        onChange: (t) => x(e, t.target.value),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ),
                ],
              }),
              (0, U.jsxs)(`aside`, {
                className: `control-card controls-preview`,
                children: [
                  (0, U.jsx)(`h3`, { children: `Preview` }),
                  (0, U.jsxs)(`div`, {
                    className: `controls-preview-media`,
                    children: [
                      (0, U.jsx)(`img`, {
                        src: window.__creativeImages[2],
                        alt: `Creative preview`,
                      }),
                      r.enabled[3] &&
                        (0, U.jsx)(`img`, {
                          className:
                            `controls-preview-logo ` +
                            (r.position === `Top left` ? `left` : `right`),
                          style: { width: `${r.size / 4}%` },
                          src: r.logo,
                          alt: `Logo preview`,
                        }),
                      r.enabled[4] &&
                        (0, U.jsx)(`span`, {
                          className:
                            `controls-subtitle ` +
                            r.subtitlePosition.toLowerCase(),
                          style: {
                            fontFamily: r.font,
                            fontSize: r.fontSize,
                            color: r.color,
                            background:
                              r.style === `Box` ? r.background : `transparent`,
                            textShadow:
                              r.style === `Outline`
                                ? `1px 1px 2px ${r.background}`
                                : `none`,
                          },
                          children: r.enabled[2]
                            ? r.brand
                            : `Your story starts here`,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (strategyIndex === null || strategyIndex === 1) && (0, U.jsxs)(U.Fragment, { children: [
          (0, U.jsx)(`h2`, {
            className: `controls-section-title`,
            children: `Music Refresh`,
          }),
          ` `,
          S(
            `Background music`,
            1,
            (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(`p`, {
                  children: `Only use the selected licensed music or genre for creative generation.`,
                }),
                (0, U.jsxs)(`div`, {
                  className: `control-narrow`,
                  children: [
                    (0, U.jsx)(`label`, { children: `Music genre` }),
                    (0, U.jsx)(wi, {
                      values: [
                        `Warm`,
                        `Blues`,
                        `Funk`,
                        `Rock`,
                        `Premium`,
                        `Energetic`,
                      ],
                      value: r.genre,
                      onChange: (e) => x(`genre`, e),
                    }),
                    (0, U.jsx)(`label`, { children: `Music selection` }),
                    (0, U.jsx)(`input`, {
                      placeholder: `Search a track, creator, or artist`,
                      value: h,
                      onChange: (e) => {
                        (g(e.target.value), m(0));
                      },
                    }),
                    (0, U.jsxs)(`label`, {
                      className: `controls-upload`,
                      children: [
                        (0, U.jsx)(ye, { size: 14 }),
                        ` Upload`,
                        (0, U.jsx)(`input`, {
                          type: `file`,
                          accept: `audio/*`,
                          multiple: !0,
                          onChange: async (e) => {
                            let t = Array.from(e.target.files || []),
                              n = await Promise.all(
                                t.map(
                                  (e) =>
                                    new Promise((t) => {
                                      let n = new FileReader();
                                      ((n.onload = () =>
                                        t({
                                          name: e.name,
                                          url: String(n.result),
                                        })),
                                        n.readAsDataURL(e));
                                    }),
                                ),
                              );
                            (x(`tracks`, [...r.tracks, ...n]),
                              f(`Uploaded`),
                              m(Math.floor(r.tracks.length / 5)));
                          },
                        }),
                      ],
                    }),
                    (0, U.jsx)(`div`, {
                      className: `controls-tabs`,
                      children: [
                        `Uploaded`,
                        `Selected music`,
                        `Selected creator`,
                      ].map((e) =>
                        (0, U.jsxs)(
                          `button`,
                          {
                            className: d === e ? `active` : ``,
                            onClick: () => f(e),
                            children: [
                              e,
                              ` (`,
                              e === `Uploaded` ? r.tracks.length : 0,
                              `)`,
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    d === `Uploaded`
                      ? (0, U.jsxs)(U.Fragment, {
                          children: [
                            w.slice(E * 5, E * 5 + 5).map((e) =>
                              (0, U.jsxs)(
                                `div`,
                                {
                                  className: `control-track`,
                                  children: [
                                    (0, U.jsx)(`button`, {
                                      "aria-label": `Preview ${e.name}`,
                                      onClick: () =>
                                        v(_ === e.id ? null : e.id),
                                      children: (0, U.jsx)(ue, {
                                        size: 17,
                                        fill: `currentColor`,
                                      }),
                                    }),
                                    (0, U.jsxs)(`div`, {
                                      children: [
                                        e.name,
                                        (0, U.jsx)(`small`, {
                                          children: e.url
                                            ? `Uploaded audio`
                                            : `00:30 · Demo track`,
                                        }),
                                        _ === e.id &&
                                          (e.url
                                            ? (0, U.jsx)(`audio`, {
                                                controls: !0,
                                                autoPlay: !0,
                                                src: e.url,
                                              })
                                            : (0, U.jsx)(`small`, {
                                                children: `No audio attached to this demo track.`,
                                              })),
                                      ],
                                    }),
                                    (0, U.jsx)(`button`, {
                                      "aria-label": `Remove ${e.name}`,
                                      onClick: () =>
                                        x(
                                          `tracks`,
                                          r.tracks.filter((t, n) => n !== e.id),
                                        ),
                                      children: (0, U.jsx)(_e, { size: 14 }),
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                            (0, U.jsxs)(`div`, {
                              className: `controls-pagination`,
                              children: [
                                (0, U.jsxs)(`span`, {
                                  children: [
                                    w.length ? E * 5 + 1 : 0,
                                    ` – `,
                                    Math.min(E * 5 + 5, w.length),
                                    ` of `,
                                    w.length,
                                  ],
                                }),
                                (0, U.jsx)(`button`, {
                                  disabled: !E,
                                  onClick: () => m(E - 1),
                                  "aria-label": `Previous music page`,
                                  children: (0, U.jsx)(ee, { size: 16 }),
                                }),
                                E + 1,
                                ` / `,
                                T,
                                (0, U.jsx)(`button`, {
                                  disabled: E === T - 1,
                                  onClick: () => m(E + 1),
                                  "aria-label": `Next music page`,
                                  children: (0, U.jsx)(F, { size: 16 }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, U.jsxs)(`p`, {
                          className: `controls-empty`,
                          children: [`No `, d.toLowerCase(), ` yet.`],
                        }),
                  ],
                }),
              ],
            }),
          ),
          ]}),
          (strategyIndex === null || strategyIndex === 3) && (0, U.jsxs)(U.Fragment, { children: [
          (0, U.jsx)(`h2`, {
            className: `controls-section-title`,
            children: `Seedance`,
          }),
          (0, U.jsxs)(`section`, {
            className: `control-card seedance-settings`,
            children: [
              (0, U.jsx)(`h3`, { children: `Products and images` }),
              (0, U.jsx)(`p`, {
                children: `Edit the products, offers, and images Seedance can use in your ads. Sample product data is shown below.`,
              }),
              (0, U.jsxs)(`p`, {
                children: [
                  `Time zone: `,
                  Intl.DateTimeFormat().resolvedOptions().timeZone,
                ],
              }),
              (0, U.jsx)(`div`, {
                className: `seedance-table-wrap`,
                children: (0, U.jsxs)(`table`, {
                  className: `seedance-table`,
                  children: [
                    (0, U.jsx)(`thead`, {
                      children: (0, U.jsxs)(`tr`, {
                        children: [
                          (0, U.jsx)(`th`, { children: `Product name` }),
                          (0, U.jsx)(`th`, { children: `Product information` }),
                          (0, U.jsx)(`th`, { children: `Product images` }),
                        ],
                      }),
                    }),
                    (0, U.jsx)(`tbody`, {
                      children: r.seedance.products.map((e) => {
                        let t = (t) =>
                            x(`seedance`, {
                              products: r.seedance.products.map((n) =>
                                n.id === e.id ? { ...n, ...t } : n,
                              ),
                            }),
                          n = async (t, n) => {
                            if (!t?.length) return;
                            let r = Array.from(t);
                            if (
                              r.some(
                                (e) =>
                                  ![
                                    `image/jpeg`,
                                    `image/png`,
                                    `image/webp`,
                                  ].includes(e.type) ||
                                  e.size > 5 * 1024 * 1024,
                              )
                            ) {
                              b(
                                `Use JPG, PNG, or WebP images smaller than 5MB.`,
                              );
                              return;
                            }
                            let a = await Promise.all(
                              r.map(
                                (e) =>
                                  new Promise((t, n) => {
                                    let r = new FileReader();
                                    ((r.onload = () =>
                                      t({
                                        src: String(r.result),
                                        selected: !0,
                                      })),
                                      (r.onerror = n),
                                      r.readAsDataURL(e));
                                  }),
                              ),
                            );
                            (i((t) => ({
                              ...t,
                              seedance: {
                                products: t.seedance.products.map((t) =>
                                  t.id === e.id
                                    ? {
                                        ...t,
                                        images:
                                          n === void 0
                                            ? [...t.images, ...a]
                                            : t.images.map((e, t) =>
                                                t === n ? a[0] : e,
                                              ),
                                      }
                                    : t,
                                ),
                              },
                            })),
                              b(``));
                          };
                        return (0, U.jsxs)(
                          `tr`,
                          {
                            children: [
                              (0, U.jsxs)(`td`, {
                                children: [
                                  (0, U.jsx)(`div`, {
                                    className: `seedance-name-field`,
                                    children: (0, U.jsx)(`input`, {
                                      "aria-label": `Product name`,
                                      placeholder: `Enter product name`,
                                      value: e.name,
                                      onChange: (e) =>
                                        t({ name: e.target.value }),
                                    }),
                                  }),
                                  (0, U.jsx)(`button`, {
                                    className: `seedance-remove-product`,
                                    onClick: () =>
                                      x(`seedance`, {
                                        products: r.seedance.products.filter(
                                          (t) => t.id !== e.id,
                                        ),
                                      }),
                                    children: `Remove product`,
                                  }),
                                ],
                              }),
                              (0, U.jsxs)(`td`, {
                                children: [
                                  (0, U.jsx)(`input`, {
                                    "aria-label": e.name + ` offer`,
                                    placeholder: `Offer / discount (optional)`,
                                    maxLength: 200,
                                    value: e.discount,
                                    onChange: (e) =>
                                      t({ discount: e.target.value }),
                                  }),
                                  (0, U.jsxs)(`div`, {
                                    className: `seedance-row-dates`,
                                    children: [
                                      (0, U.jsxs)(`label`, {
                                        children: [
                                          (0, U.jsx)(`span`, {
                                            children: `Starts`,
                                          }),
                                          (0, U.jsx)(`input`, {
                                            "aria-label": e.name + ` starts`,
                                            type: `text`,
                                            placeholder: `YYYY-MM-DD HH:mm`,
                                            value: e.start.replace(`T`, ` `),
                                            onChange: (e) =>
                                              t({ start: e.target.value }),
                                          }),
                                        ],
                                      }),
                                      (0, U.jsxs)(`label`, {
                                        children: [
                                          (0, U.jsx)(`span`, {
                                            children: `Ends`,
                                          }),
                                          (0, U.jsx)(`input`, {
                                            "aria-label": e.name + ` ends`,
                                            type: `text`,
                                            placeholder: `YYYY-MM-DD HH:mm`,
                                            value: e.end.replace(`T`, ` `),
                                            onChange: (e) =>
                                              t({ end: e.target.value }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, U.jsx)(`td`, {
                                children: (0, U.jsxs)(`div`, {
                                  className: `seedance-row-images`,
                                  children: [
                                    e.images.map((n, r) =>
                                      (0, U.jsx)(
                                        `div`,
                                        {
                                          className: `seedance-image-item`,
                                          children: (0, U.jsxs)(`div`, {
                                            className: `seedance-image-thumb`,
                                            children: [
                                              (0, U.jsx)(`img`, {
                                                src: n.src,
                                                alt:
                                                  e.name + ` image ` + (r + 1),
                                              }),
                                              (0, U.jsx)(`button`, {
                                                className: `seedance-image-remove`,
                                                "aria-label":
                                                  `Remove image ` +
                                                  (r + 1) +
                                                  ` for ` +
                                                  e.name,
                                                onClick: () =>
                                                  t({
                                                    images: e.images.filter(
                                                      (e, t) => t !== r,
                                                    ),
                                                  }),
                                                children: (0, U.jsx)(H, {
                                                  size: 12,
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        r,
                                      ),
                                    ),
                                    (0, U.jsxs)(`label`, {
                                      className: `seedance-add-image`,
                                      "aria-label": `Add image`,
                                      title: `Add image`,
                                      children: [
                                        (0, U.jsx)(`span`, {
                                          "aria-hidden": `true`,
                                          children: `+`,
                                        }),
                                        (0, U.jsx)(`input`, {
                                          type: `file`,
                                          multiple: !0,
                                          accept: `image/jpeg,image/png,image/webp`,
                                          onChange: (e) => {
                                            (n(e.target.files),
                                              (e.target.value = ``));
                                          },
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
              (0, U.jsx)(`button`, {
                className: `control-outlined seedance-add-product`,
                onClick: () =>
                  x(`seedance`, {
                    products: [
                      ...r.seedance.products,
                      {
                        id: crypto.randomUUID(),
                        name: ``,
                        discount: ``,
                        start: ``,
                        end: ``,
                        selected: !0,
                        images: [],
                      },
                    ],
                  }),
                children: `+ Add product`,
              }),
            ],
          }),
          ]}),
        ],
      }),
      (0, U.jsxs)(`footer`, {
        className: `controls-footer`,
        children: [
          (0, U.jsxs)(`p`, {
            children: [
              (0, U.jsx)(V, { size: 13 }),
              ` AIGC controls will only be applied in new generations in the future. Previous AI-generated assets will not be affected.`,
            ],
          }),
          y && (0, U.jsx)(`span`, { role: `alert`, children: y }),
          (0, U.jsx)(`button`, {
            className: `secondary`,
            onClick: t,
            children: `Cancel`,
          }),
          (0, U.jsx)(`button`, {
            className: `primary`,
            onClick: () => {
              if (
                !/^#[0-9a-f]{6}$/i.test(r.color) ||
                !/^#[0-9a-f]{6}$/i.test(r.background)
              ) {
                b(`Use a six-digit hex color.`);
                return;
              }
              let e = strategyIndex === null || strategyIndex === 3 ? r.seedance.products : [];
              if ((strategyIndex === null || strategyIndex === 3) && !e.length) {
                b(`Select at least one product.`);
                return;
              }
              for (let t of e) {
                if (!t.name.trim() || !t.images.length) {
                  b(`Each product needs a name and at least one image.`);
                  return;
                }
                if (t.discount.trim() && (!t.start || !t.end)) {
                  b(`Add a start and end time for ` + t.name + `’s offer.`);
                  return;
                }
                if (
                  [t.start, t.end].some(
                    (e) =>
                      e &&
                      (!/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}$/.test(e) ||
                        Number.isNaN(Date.parse(e.replace(` `, `T`)))),
                  )
                ) {
                  b(`Use YYYY-MM-DD HH:mm for ` + t.name + ` dates.`);
                  return;
                }
                if (
                  (t.start || t.end) &&
                  (!t.start || !t.end || t.end <= t.start)
                ) {
                  b(
                    `The end time must be after the start time for ` +
                      t.name +
                      `.`,
                  );
                  return;
                }
              }
              try { n(r); }
              catch { b(`Could not save controls on this device. Try fewer or smaller uploaded files.`); }
            },
            children: `Apply`,
          }),
        ],
      }),
    ],
  });
}
