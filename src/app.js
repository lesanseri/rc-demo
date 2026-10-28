function readAigcConfig(e = `materials`) {
    let t = Wd(e === `empty`);
    try {
      let n = JSON.parse(
        localStorage.getItem(`aigc-config-v5-` + e) ||
          localStorage.getItem(`aigc-config-v4-` + e) ||
          localStorage.getItem(`aigc-config-v3-` + e) ||
          localStorage.getItem(`aigc-config-v2-` + e) ||
          `null`,
      );
      n &&
        Array.isArray(n.enabled) &&
        n.enabled.length >= 3 &&
        Array.isArray(n.assets) &&
        n.assets.length >= 3 &&
        Array.isArray(n.settings) &&
        n.settings.length >= 3 &&
        (t = {
          ...n,
          enabled: Hd.map((e, r) =>
            typeof n.enabled[r] == `boolean` ? n.enabled[r] : t.enabled[r],
          ),
          settings: Hd.map((e, t) =>
            e.choices.includes(n.settings[t]) ? n.settings[t] : e.choices[0],
          ),
          assets: Hd.map((e, t) =>
            typeof n.assets[t] == `number` &&
            n.assets[t] >= 0 &&
            n.assets[t] < Rd.length
              ? n.assets[t]
              : t % Rd.length,
          ),
          addMode:
            n.addMode === `manual` || n.addMode === `review`
              ? n.addMode
              : `auto`,
          selected:
            Array.isArray(n.selected) &&
            n.selected.length >= 3 &&
            n.selected.every((e) => Array.isArray(e) && e.length === zd.length)
              ? Hd.map((e, t) =>
                  n.selected[t] ? n.selected[t].map(Boolean) : zd.map(() => !0),
                )
              : Hd.map((e, r) => zd.map(() => n.enabled[r] ?? t.enabled[r])),
        });
    } catch {}
    const modes = aigcNames.map((_, index) => {
      const saved = t.strategyModes?.[index];
      return aigcModes.some((mode) => mode.value === saved)
        ? saved : t.enabled[index] ? t.addMode : "manual";
    });
    // Manual adoption is explicit; automatic generation does not count as a
    // user's adoption. Older automatic selections remain stored separately.
    const adopted = aigcNames.map((_, strategy) => zd.map((_, video) =>
      Array.isArray(t.adopted?.[strategy]) && t.adopted[strategy][video] === true));
    return withAigcAutomation({ ...t, adopted }, t.addMode, t.automationLayoutVersion === 1 ? t.enabled : modes.map((mode) => mode !== "manual"));
}
function Jd() {
  let [brandControls, setBrandControls] = (0, C.useState)(readAigcBrandControls),
    [n, r] = (0, C.useState)(`manual`),
    [i, a] = (0, C.useState)(!1),
    [o, s] = (0, C.useState)(
      Array.from({ length: 14 }, (e, t) => ({
        id: t,
        name: `AI Generated Video-${t + 1}`,
        image: Rd[t % Rd.length],
      })),
    ),
    [c, l] = (0, C.useState)(0),
    u = Math.max(1, Math.ceil(o.length / 5)),
    d = Math.min(c, u - 1),
    [f, p] = (0, C.useState)(!1),
    [m, h] = (0, C.useState)(`materials`),
    [g, _] = (0, C.useState)(`groups`),
    [v, y] = (0, C.useState)(``),
    [b, x] = (0, C.useState)(`newest`),
    [S, w] = (0, C.useState)(`all`),
    [T, E] = (0, C.useState)(null),
    [D, A] = (0, C.useState)({}),
    [j, M] = (0, C.useState)(() => readAigcConfig()),
    [savedConfig, setSavedConfig] = (0, C.useState)(() => readAigcConfig()),
    [P, ee] = (0, C.useState)(`auto`),
    [F, I] = (0, C.useState)(null),
    [ne, z] = (0, C.useState)(null),
    [B, re] = (0, C.useState)([]),
    [V, ie] = (0, C.useState)(null),
    [se, le] = (0, C.useState)(null),
    [de, fe] = (0, C.useState)([]),
    [me, he] = (0, C.useState)(``),
    [_e, ye] = (0, C.useState)(``);
  function be(e) {
    (fe(j.enabled.map((active) => active ? "auto" : "manual")), le(e));
  }
  function xe(e) {
    let t = e.source + `:` + e.strategyIndex;
    (E(t), z(e.strategyIndex), re(D[t] || Array(e.count).fill(!1)), I(null));
  }
  function Se(e, destination = `groups`) {
    const config = readAigcConfig(e);
    h(e); M(config); setSavedConfig(config); _(destination);
    I(null); z(null); ie(null); ye(``); p(true);
  }
  function Ee() {
    try {
      (localStorage.setItem(`aigc-config-v5-` + m, JSON.stringify(j)),
        setSavedConfig(structuredClone(j)),
        ye(`Changes saved on this device`),
        p(!1));
    } catch {
      ye(`Could not save. Please try again.`);
    }
  }
  const activeStrategies = j.enabled.filter(Boolean).length;
  return (0, U.jsxs)(`main`, {
    className: `home`,
    children: [
      (0, U.jsx)(xi, {
        onOpen: () => Se(`materials`),
        selected: savedConfig.selected.flat().filter(Boolean).length,
        addMode: savedConfig.addMode,
        aigcOverview: (0, U.jsx)(AigcEditorSummary, {
          config: savedConfig,
          onEdit: () => Se(`materials`, `aigc`),
        }),
      }),
      !f &&
        _e &&
        (0, U.jsxs)(`p`, {
          className: `home-status`,
          role: `status`,
          children: [(0, U.jsx)(N, { size: 16 }), _e],
        }),
      (0, U.jsx)(Eu, {
        open: f,
        onOpenChange: (e) => {
          (p(e), e || (I(null), ie(null), z(null)));
        },
        children: (0, U.jsxs)(ku, {
          className: `aigc-drawer`,
          showCloseButton: !1,
          children: [
            (0, U.jsxs)(`header`, {
              className: `drawer-heading`,
              children: [
                (0, U.jsxs)(`div`, {
                  children: [
                    (0, U.jsx)(`div`, {
                      className: `drawer-title-row`,
                      children: (0, U.jsx)(Au, {
                        className: `drawer-title`,
                        children: `Creative assets`,
                      }),
                    }),
                    (0, U.jsx)(ju, {
                      className: `sr-only`,
                      children: `Choose regular and auto-generated creative assets.`,
                    }),
                    (0, U.jsxs)(`nav`, {
                      className: `asset-tabs`,
                      "aria-label": `Creative asset sources`,
                      children: [
                        (0, U.jsx)(`button`, {
                          className: g === `groups` ? `active` : ``,
                          onClick: () => _(`groups`),
                          children: `Recommended`,
                        }),
                        (0, U.jsx)(`button`, {
                          className: g === `library` ? `active` : ``,
                          onClick: () => _(`library`),
                          children: `My library`,
                        }),
                        (0, U.jsx)(`button`, {
                          className: g === `tiktok` ? `active` : ``,
                          onClick: () => _(`tiktok`),
                          children: `TikTok posts`,
                        }),
                        (0, U.jsxs)(`button`, {
                          className: g === `aigc` ? `active` : ``,
                          onClick: () => _(`aigc`),
                          children: [(0, U.jsx)(ge, {size: 16}), `Auto-generated`],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, U.jsx)(`button`, {
                  className: `icon-button`,
                  onClick: () => p(!1),
                  "aria-label": `Close drawer`,
                  children: (0, U.jsx)(H, { size: 22 }),
                }),
              ],
            }),
            (0, U.jsxs)(`div`, {
              className: `drawer-scroll`,
              children: [
                g === `groups` &&
                  (0, U.jsxs)(U.Fragment, {
                    children: [
                      (0, U.jsxs)(`section`, {
                        className: `library-section own-content-section`,
                        "aria-label": `Regular creative assets`,
                        children: [
                          (0, U.jsxs)(`div`, {
                            className: `library-heading`,
                            children: [
                              (0, U.jsxs)(`div`, {
                                className: `own-group-cover`,
                                "aria-hidden": `true`,
                                children: [
                                  (0, U.jsx)(`img`, { src: Rd[0], alt: `` }),
                                  (0, U.jsx)(`b`, { children: o.length }),
                                ],
                              }),
                              (0, U.jsxs)(`h2`, {
                                children: [
                                  `Your own content `,
                                  (0, U.jsx)(te, { size: 16 }),
                                ],
                              }),
                              (0, U.jsxs)(`div`, {
                                className: `own-pagination`,
                                children: [
                                  (0, U.jsx)(`button`, {
                                    "aria-label": `Previous content page`,
                                    disabled: d === 0,
                                    onClick: () => l(d - 1),
                                    children: `‹`,
                                  }),
                                  (0, U.jsxs)(`span`, {
                                    children: [d + 1, ` / `, u],
                                  }),
                                  (0, U.jsx)(`button`, {
                                    "aria-label": `Next content page`,
                                    disabled: d === u - 1,
                                    onClick: () => l(d + 1),
                                    children: `›`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, U.jsx)(`div`, {
                            className: `library-grid`,
                            children: o
                              .slice(d * 5, d * 5 + 5)
                              .map(({ id: e, name: t, image: n }) =>
                                (0, U.jsxs)(
                                  `article`,
                                  {
                                    className: `library-asset`,
                                    children: [
                                      (0, U.jsxs)(`div`, {
                                        className: `own-preview-wrap`,
                                        onMouseEnter: () => I(10 + e),
                                        onMouseLeave: () => I(null),
                                        children: [
                                          (0, U.jsxs)(`button`, {
                                            className: `library-preview`,
                                            onFocus: () => I(10 + e),
                                            onBlur: () => I(null),
                                            onClick: () =>
                                              I(F === 10 + e ? null : 10 + e),
                                            "aria-label": `Preview ` + t,
                                            children: [
                                              (0, U.jsx)(`img`, {
                                                className:
                                                  F === 10 + e
                                                    ? `own-preview-active`
                                                    : ``,
                                                src: n,
                                                alt: t,
                                              }),
                                              (0, U.jsx)(`span`, {
                                                className: `own-play`,
                                                children: (0, U.jsx)(ue, {
                                                  size: 21,
                                                  fill: `currentColor`,
                                                }),
                                              }),
                                              (0, U.jsxs)(`span`, {
                                                className: `own-metadata`,
                                                children: [
                                                  (0, U.jsx)(`span`, {
                                                    children: `1080x1920`,
                                                  }),
                                                  (0, U.jsxs)(`span`, {
                                                    children: [
                                                      `00:`,
                                                      [46, 40, 40, 47, 46][
                                                        e % 5
                                                      ],
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, U.jsx)(`button`, {
                                            className: `own-remove`,
                                            "aria-label": `Remove ` + t,
                                            onClick: () => {
                                              (s((t) =>
                                                t.filter((t) => t.id !== e),
                                              ),
                                                I(null));
                                            },
                                            children: (0, U.jsx)(H, {
                                              size: 19,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, U.jsx)(`p`, {
                                        title: t,
                                        children: t,
                                      }),
                                    ],
                                  },
                                  e,
                                ),
                              ),
                          }),
                          o.length === 0 &&
                            (0, U.jsx)(`p`, {
                              className: `own-empty`,
                              children: `No creatives selected.`,
                            }),
                          (0, U.jsx)(qd, { value: P, onChange: ee }),
                        ],
                      }),
                      (0, U.jsxs)(`section`, {
                        className: `library-section own-content-section creator-content-section`,
                        "aria-label": `Creator content`,
                        children: [
                          (0, U.jsxs)(`div`, {
                            className: `library-heading`,
                            children: [
                              (0, U.jsx)(`div`, {
                                className: `creator-group-icon`,
                                "aria-hidden": `true`,
                                children: (0, U.jsx)(L, { size: 28 }),
                              }),
                              (0, U.jsxs)(`h2`, {
                                children: [
                                  `Creator content `,
                                  (0, U.jsx)(te, { size: 16 }),
                                ],
                              }),
                            ],
                          }),
                          (0, U.jsx)(`p`, {
                            className: `creator-empty-description`,
                            children: `No relevant assets to recommend based on your destination`,
                          }),
                          (0, U.jsxs)(`div`, {
                            className: `creator-callout`,
                            children: [
                              (0, U.jsxs)(`div`, {
                                className: `creator-callout-icon`,
                                "aria-hidden": `true`,
                                children: [
                                  (0, U.jsx)(L, { size: 28 }),
                                  (0, U.jsx)(k, { size: 22 }),
                                ],
                              }),
                              (0, U.jsxs)(`div`, {
                                children: [
                                  (0, U.jsx)(`p`, {
                                    children: `To connect with TikTok creators for your brand, explore`,
                                  }),
                                  (0, U.jsxs)(`button`, {
                                    className: `creator-suite-link`,
                                    onClick: () => a(!i),
                                    "aria-expanded": i,
                                    children: [
                                      `Content Suite project `,
                                      (0, U.jsx)(R, { size: 16 }),
                                    ],
                                  }),
                                  i &&
                                    (0, U.jsx)(`p`, {
                                      className: `creator-demo-note`,
                                      role: `status`,
                                      children: `Content Suite is not connected in this demo.`,
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, U.jsx)(qd, { value: n, onChange: r }),
                        ],
                      }),
                    ],
                  }),
                g === `aigc` && (0, U.jsx)(AigcSelectionPanel, {
                  config: j,
                  onChange: M,
                  onDetails: be,
                  onControls: (index) => ie(index),
                }),
                g === `library` &&
                  (0, U.jsxs)(`section`, {
                    className: `my-library-section`,
                    "aria-label": `My library`,
                    children: [
                      (0, U.jsxs)(`div`, {
                        className: `my-library-heading`,
                        children: [
                          (0, U.jsxs)(`div`, {
                            children: [
                              (0, U.jsx)(`h2`, { children: `My library` }),
                              (0, U.jsx)(`p`, {
                                children: `Generated creatives are grouped by source asset and strategy. Uplift figures are illustrative.`,
                              }),
                            ],
                          }),
                          (0, U.jsxs)(`span`, {
                            children: [Ud.length, ` creative groups`],
                          }),
                        ],
                      }),
                      (0, U.jsxs)(`div`, {
                        className: `library-toolbar`,
                        children: [
                          (0, U.jsxs)(`label`, {
                            className: `library-search`,
                            children: [
                              (0, U.jsx)(pe, { size: 17 }),
                              (0, U.jsx)(`input`, {
                                value: v,
                                onChange: (e) => y(e.target.value),
                                placeholder: `Search by name or strategy`,
                              }),
                            ],
                          }),
                          (0, U.jsxs)(`select`, {
                            "aria-label": `Sort library`,
                            value: b,
                            onChange: (e) => x(e.target.value),
                            children: [
                              (0, U.jsx)(`option`, {
                                value: `newest`,
                                children: `Creation time: newest`,
                              }),
                              (0, U.jsx)(`option`, {
                                value: `ctr`,
                                children: `CTR lift: highest`,
                              }),
                              (0, U.jsx)(`option`, {
                                value: `cvr`,
                                children: `CVR lift: highest`,
                              }),
                            ],
                          }),
                          (0, U.jsxs)(`select`, {
                            "aria-label": `Filter by strategy`,
                            value: S,
                            onChange: (e) => w(e.target.value),
                            children: [
                              (0, U.jsx)(`option`, {
                                value: `all`,
                                children: `Strategy: All`,
                              }),
                              Hd.map((e) =>
                                (0, U.jsx)(
                                  `option`,
                                  { children: e.name },
                                  e.name,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, U.jsx)(`div`, {
                        className: `library-group-grid`,
                        children: Ud.filter(
                          (e) => S === `all` || Hd[e.strategyIndex].name === S,
                        )
                          .sort((e, t) =>
                            b === `ctr`
                              ? parseFloat(t.ctr) - parseFloat(e.ctr)
                              : b === `cvr`
                                ? parseFloat(t.cvr) - parseFloat(e.cvr)
                                : 0,
                          )
                          .filter((e) => {
                            let t = v.toLowerCase().trim();
                            return (
                              !t ||
                              e.source.toLowerCase().includes(t) ||
                              Hd[e.strategyIndex].name.toLowerCase().includes(t)
                            );
                          })
                          .map((e) =>
                            (0, U.jsxs)(
                              `article`,
                              {
                                className: `library-group-card`,
                                children: [
                                  (0, U.jsxs)(`div`, {
                                    className: `library-group-card-heading`,
                                    children: [
                                      (0, U.jsxs)(`div`, {
                                        children: [
                                          (0, U.jsx)(`h3`, {
                                            children: Hd[e.strategyIndex].name,
                                          }),
                                          (0, U.jsx)(`p`, {
                                            title: e.source,
                                            children: e.source,
                                          }),
                                        ],
                                      }),
                                      (0, U.jsxs)(`div`, {
                                        className: `performance-badge`,
                                        title: `Illustrative uplift values for this prototype`,
                                        children: [
                                          (0, U.jsxs)(`span`, {
                                            children: [`CTR `, e.ctr],
                                          }),
                                          (0, U.jsxs)(`span`, {
                                            children: [`CVR `, e.cvr],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, U.jsxs)(`button`, {
                                    className: `group-preview`,
                                    type: `button`,
                                    "aria-label": `View ${e.count} creatives in ${Hd[e.strategyIndex].name}`,
                                    onClick: () => {
                                      xe(e);
                                    },
                                    children: [
                                      (0, U.jsx)(`img`, {
                                        src: Rd[e.image],
                                        alt: ``,
                                      }),
                                      (0, U.jsxs)(`span`, {
                                        className: `group-preview-side`,
                                        children: [
                                          (0, U.jsx)(`img`, {
                                            src: Rd[(e.image + 1) % Rd.length],
                                            alt: ``,
                                          }),
                                          (0, U.jsx)(`img`, {
                                            src: Rd[(e.image + 2) % Rd.length],
                                            alt: ``,
                                          }),
                                        ],
                                      }),
                                      (0, U.jsxs)(`span`, {
                                        className: `group-count`,
                                        children: [
                                          (0, U.jsx)(ge, { size: 14 }),
                                          ` `,
                                          e.count,
                                          ` videos`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, U.jsxs)(`div`, {
                                    className: `library-group-footer`,
                                    children: [
                                      (0, U.jsxs)(`span`, {
                                        children: [
                                          (
                                            D[
                                              e.source + `:` + e.strategyIndex
                                            ] || []
                                          ).filter(Boolean).length,
                                          ` `,
                                          `/ `,
                                          e.count,
                                          ` selected`,
                                        ],
                                      }),
                                      (0, U.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () => {
                                          xe(e);
                                        },
                                        children: `View creatives`,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              `${e.source}-${e.strategyIndex}`,
                            ),
                          ),
                      }),
                    ],
                  }),
                g === `tiktok` &&
                  (0, U.jsxs)(`section`, {
                    className: `library-section`,
                    "aria-label": `TikTok posts`,
                    children: [
                      (0, U.jsx)(`div`, {
                        className: `my-library-heading compact`,
                        children: (0, U.jsxs)(`div`, {
                          children: [
                            (0, U.jsx)(`h2`, { children: `TikTok posts` }),
                            (0, U.jsx)(`p`, {
                              children: `Choose existing posts to use as campaign creatives.`,
                            }),
                          ],
                        }),
                      }),
                      (0, U.jsx)(`div`, {
                        className: `library-grid`,
                        children: Bd.map((e, t) =>
                          (0, U.jsxs)(
                            `article`,
                            {
                              className: `library-asset`,
                              children: [
                                (0, U.jsxs)(`button`, {
                                  className: `library-preview`,
                                  children: [
                                    (0, U.jsx)(`img`, { src: Rd[t], alt: `` }),
                                    (0, U.jsx)(`span`, {
                                      className: `duration`,
                                      children: `00:15`,
                                    }),
                                  ],
                                }),
                                (0, U.jsx)(`p`, { children: e }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
            (0, U.jsxs)(`footer`, {
              className: `drawer-footer`,
              children: [
                (0, U.jsx)(`span`, {
                  children:
                    g === `library`
                      ? `${Object.values(D).flat().filter(Boolean).length} library creatives selected`
                      : g === `aigc`
                        ? `${activeStrategies} of ${Hd.length} strategies active during campaign`
                        : `${o.length} own creatives selected`,
                }),
                (0, U.jsxs)(`div`, {
                  children: [
                    (0, U.jsx)(`button`, {
                      className: `secondary`,
                      onClick: () => p(!1),
                      children: `Cancel`,
                    }),
                    (0, U.jsx)(`button`, {
                      className: `primary`,
                      onClick: Ee,
                      children: `Save changes`,
                    }),
                  ],
                }),
              ],
            }),
            f &&
              _e &&
              (0, U.jsx)(`div`, {
                role: `status`,
                className: `save-error`,
                children: _e,
              }),
            ne !== null &&
              (0, U.jsxs)(`section`, {
                className: `asset-browser-layer`,
                "aria-label": Hd[ne].name + ` creatives`,
                children: [
                  (0, U.jsxs)(`header`, {
                    className: `asset-browser-heading`,
                    children: [
                      (0, U.jsx)(`button`, {
                        className: `icon-button`,
                        "aria-label": `Back to strategies`,
                        onClick: () => z(null),
                        children: (0, U.jsx)(O, { size: 22 }),
                      }),
                      (0, U.jsxs)(`div`, {
                        children: [
                          (0, U.jsx)(`h2`, { children: Hd[ne].name }),
                          (0, U.jsxs)(`p`, {
                            children: [
                              B.filter(Boolean).length,
                              ` creatives selected · Remove any you don’t want to use`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, U.jsxs)(`div`, {
                    className: `asset-browser-body`,
                    children: [
                      (0, U.jsx)(`div`, {
                        className: `asset-browser-grid`,
                        children: zd
                          .slice(0, B.length)
                          .map(
                            (e, t) =>
                              B[t] &&
                              (0, U.jsxs)(
                                `article`,
                                {
                                  className: `browser-asset`,
                                  children: [
                                    (0, U.jsxs)(`div`, {
                                      className: `detail-preview-wrap`,
                                      children: [
                                        (0, U.jsxs)(`button`, {
                                          type: `button`,
                                          className: `detail-preview`,
                                          "aria-label": `Preview ${Hd[ne].name}-${e}`,
                                          onClick: () =>
                                            I(F === 100 + t ? null : 100 + t),
                                          children: [
                                            (0, U.jsx)(`img`, {
                                              src: Rd[(ne + t) % Rd.length],
                                              alt: `${Hd[ne].name}-${e}`,
                                            }),
                                            (0, U.jsx)(`span`, {
                                              className: `duration`,
                                              children: `00:15`,
                                            }),
                                            (0, U.jsx)(`span`, {
                                              className: `own-play`,
                                              children: (0, U.jsx)(ue, {
                                                size: 21,
                                                fill: `currentColor`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, U.jsx)(`button`, {
                                          className: `detail-remove`,
                                          "aria-label": `Remove ${Hd[ne].name}-${e}`,
                                          onClick: () =>
                                            re((e) =>
                                              e.map((e, n) =>
                                                n === t ? !1 : e,
                                              ),
                                            ),
                                          children: (0, U.jsx)(H, { size: 19 }),
                                        }),
                                      ],
                                    }),
                                    (0, U.jsx)(`p`, {
                                      children: `${Hd[ne].name}-${e}`,
                                    }),
                                  ],
                                },
                                e,
                              ),
                          ),
                      }),
                      !B.some(Boolean) &&
                        (0, U.jsx)(`p`, {
                          className: `own-empty`,
                          children: `No creatives selected. Cancel to keep your previous selection.`,
                        }),
                    ],
                  }),
                  (0, U.jsxs)(`footer`, {
                    className: `drawer-footer`,
                    children: [
                      (0, U.jsxs)(`span`, {
                        children: [
                          B.filter(Boolean).length,
                          ` creatives selected`,
                        ],
                      }),
                      (0, U.jsxs)(`div`, {
                        children: [
                          (0, U.jsx)(`button`, {
                            className: `secondary`,
                            onClick: () => z(null),
                            children: `Cancel`,
                          }),
                          (0, U.jsx)(`button`, {
                            className: `primary`,
                            onClick: () => {
                              if (T) {
                                (A((e) => ({ ...e, [T]: [...B] })), z(null));
                                return;
                              }
                              let e = ne;
                              (M((t) => ({
                                ...t,
                                selected: t.selected.map((t, n) =>
                                  n === e ? [...B] : t,
                                ),
                              })),
                                z(null));
                            },
                            children: `Apply changes`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            (0, U.jsx)(Mu, {
              open: se !== null,
              onOpenChange: (open) => { if (!open) le(null); },
              children: (0, U.jsx)(Fu, {
                className: `strategy-detail-dialog`,
                overlayClassName: `strategy-detail-backdrop`,
                showCloseButton: false,
                children: se !== null && (0, U.jsx)(AigcStrategyDetail, {
                  key: se,
                  index: se,
                  config: j,
                  mode: de[se],
                  onModeChange: (mode) => fe((current) => current.map((value, index) => index === se ? mode : value)),
                  onClose: () => le(null),
                  onControls: () => { le(null); ie(se); },
                  onSave: () => { M((current) => withAigcAutomation(current, current.addMode, de.map((mode) => mode !== "manual"))); le(null); },
                }),
              }),
            }),
            V !== null &&
              (0, U.jsx)(Ti, {
                key: V,
                strategyIndex: V,
                value: brandControls[V],
                onCancel: () => ie(null),
                onApply: (updated) => {
                  const next = brandControls.map((value, index) => index === V ? structuredClone(updated) : value);
                  saveAigcBrandControls(next);
                  setBrandControls(next);
                  ie(null);
                },
              }),
          ],
        }),
      }),
    ],
  });
}
