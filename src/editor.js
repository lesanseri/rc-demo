function xi({ onOpen: e, selected: t, addMode: n, aigcOverview }) {
  let [r, i] = (0, C.useState)(`Ad name2026-09-07 03:55:41`),
    [a, o] = (0, C.useState)([`Unleash Your Empire: No Ads, Just Success`]),
    [s, c] = (0, C.useState)(!0),
    [l, u] = (0, C.useState)(!0),
    [d, f] = (0, C.useState)(!0),
    [p, m] = (0, C.useState)(0),
    [h, g] = (0, C.useState)(!1),
    [_, v] = (0, C.useState)(!0),
    [y, b] = (0, C.useState)(!1),
    [x, S] = (0, C.useState)(!1),
    [w, T] = (0, C.useState)(!1),
    [E, D] = (0, C.useState)(!1),
    [O, k] = (0, C.useState)([]),
    [j, te] = (0, C.useState)(``),
    [L, ne] = (0, C.useState)([]);
  return (0, U.jsxs)(`div`, {
    className: `ad-editor`,
    children: [
      (0, U.jsx)(ke, {}),
      (0, U.jsxs)(`header`, {
        className: `editor-top`,
        children: [
          (0, U.jsx)(`h1`, { children: `Edit ad` }),
          (0, U.jsx)(`span`, { children: `Ad ID: 1875639994950290` }),
        ],
      }),
      (0, U.jsx)(`div`, {
        className: `editor-scroll`,
        children: (0, U.jsxs)(`div`, {
          className: `editor-layout`,
          children: [
            (0, U.jsxs)(`div`, {
              className: `editor-main`,
              children: [
                (0, U.jsx)(`div`, {
                  className: `editor-name`,
                  children: (0, U.jsx)(bi, {
                    title: `Ad name`,
                    children: (0, U.jsx)(`input`, {
                      "aria-label": `Ad name`,
                      value: r,
                      onChange: (e) => i(e.target.value),
                    }),
                  }),
                }),
                (0, U.jsxs)(`div`, {
                  className: `editor-form`,
                  children: [
                    (0, U.jsxs)(bi, {
                      title: `Creative assets`,
                      description: `Creative assets will be combined with your text and add-ons to create high-performing, tailored ad variations.`,
                      children: [
                        s &&
                          (0, U.jsxs)(`div`, {
                            className: `editor-notice`,
                            children: [
                              (0, U.jsx)(ie, { size: 17 }),
                              (0, U.jsxs)(`div`, {
                                children: [
                                  (0, U.jsx)(`p`, {
                                    children: `We've identified recommendations that are highly relevant and likely to perform well based on your destination.`,
                                  }),
                                  (0, U.jsx)(`button`, {
                                    className: `editor-link`,
                                    onClick: e,
                                    children: `Review recommendations`,
                                  }),
                                  (0, U.jsx)(`hr`, {}),
                                  (0, U.jsx)(`p`, {
                                    children: `34 additional assets were auto-added after your campaign went live.`,
                                  }),
                                  (0, U.jsx)(`hr`, {}),
                                  (0, U.jsx)(`p`, {
                                    children: `If a post in your recommendation includes copyrighted music, we'll swap it out for a track from the Commercial Music Library to make it eligible to use.`,
                                  }),
                                  (0, U.jsxs)(`p`, {
                                    children: [
                                      `To opt out, `,
                                      (0, U.jsx)(`button`, {
                                        className: `editor-link`,
                                        onClick: e,
                                        children: `edit exclusion rules.`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, U.jsx)(`button`, {
                                "aria-label": `Dismiss recommendations`,
                                onClick: () => c(!1),
                                children: (0, U.jsx)(H, { size: 19 }),
                              }),
                            ],
                          }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-actions`,
                          children: [
                            (0, U.jsxs)(`button`, {
                              onClick: e,
                              children: [
                                (0, U.jsx)(le, { size: 18 }),
                                ` Edit selections`,
                              ],
                            }),
                            (0, U.jsxs)(`label`, {
                              className: `editor-upload`,
                              children: [
                                (0, U.jsx)(ye, { size: 18 }),
                                ` Upload`,
                                (0, U.jsx)(`input`, {
                                  type: `file`,
                                  accept: `image/*,video/*`,
                                  multiple: !0,
                                  onChange: (e) =>
                                    ne((t) => [
                                      ...t,
                                      ...Array.from(e.target.files || []).map(
                                        (e) => URL.createObjectURL(e),
                                      ),
                                    ]),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-selected`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [
                                `Selected recommendations `,
                                (0, U.jsx)(`em`, { children: `New` }),
                                (0, U.jsx)(`button`, {
                                  "aria-label": `Edit selected recommendations`,
                                  onClick: e,
                                  children: (0, U.jsx)(le, { size: 17 }),
                                }),
                              ],
                            }),
                            (0, U.jsx)(`p`, {
                              children: `We automatically selected these creatives based on their relevance and potential. Edit to exclude any you don’t want to select.`,
                            }),
                            [
                              {
                                title: `Your own content`,
                                count: 14,
                                mode: `Off`,
                                img: 3,
                              },
                            ].map((t, n) =>
                              (0, U.jsxs)(
                                `button`,
                                {
                                  className: `editor-summary`,
                                  onClick: e,
                                  children: [
                                    (0, U.jsxs)(`div`, {
                                      className: `editor-summary-image`,
                                      children: [
                                        (0, U.jsx)(`img`, {
                                          src: vi[t.img],
                                          alt: ``,
                                        }),
                                        (0, U.jsx)(`b`, { children: t.count }),
                                      ],
                                    }),
                                    (0, U.jsxs)(`span`, {
                                      children: [
                                        (0, U.jsxs)(`strong`, {
                                          children: [
                                            n === 1 &&
                                              (0, U.jsx)(ge, { size: 16 }),
                                            ` `,
                                            t.title,
                                            ` `,
                                            (0, U.jsx)(yi, {}),
                                          ],
                                        }),
                                        (0, U.jsxs)(`small`, {
                                          children: [`Selected: `, t.count],
                                        }),
                                        (0, U.jsxs)(`small`, {
                                          children: [
                                            `New recommendations: `,
                                            t.mode,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t.title,
                              ),
                            ),
                          ],
                        }),
                        (0, U.jsxs)(`section`, {
                          className: `editor-manual`,
                          "aria-label": `Manually selected assets`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [
                                `Manually selected (`,
                                11 + L.length,
                                `)`,
                                (0, U.jsx)(`button`, {
                                  "aria-label": `Edit manually selected assets`,
                                  onClick: e,
                                  children: (0, U.jsx)(le, { size: 17 }),
                                }),
                              ],
                            }),
                            (0, U.jsx)(`p`, {
                              children: `You manually selected these and can edit to remove them if needed.`,
                            }),
                            (0, U.jsxs)(`div`, {
                              className: `editor-thumbnails`,
                              children: [
                                Array.from({ length: 11 }, (e, t) =>
                                  (0, U.jsx)(
                                    `button`,
                                    {
                                      onClick: () => m(t % 4),
                                      "aria-label":
                                        `Preview selected asset ` + (t + 1),
                                      children: (0, U.jsx)(`img`, {
                                        src: vi[t % 4],
                                        alt: `Selected creative ` + (t + 1),
                                      }),
                                    },
                                    t,
                                  ),
                                ),
                                L.map((e, t) =>
                                  (0, U.jsx)(
                                    `img`,
                                    {
                                      src: e,
                                      alt: `Uploaded asset ` + (t + 1),
                                    },
                                    t,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                        aigcOverview,
                      ],
                    }),
                    (0, U.jsxs)(bi, {
                      title: `Text and add-ons`,
                      description: `Add text and other add-ons to help audiences take action on your ad.`,
                      children: [
                        (0, U.jsxs)(`div`, {
                          className: `editor-field`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [
                                `Identity (TikTok account) `,
                                (0, U.jsx)(yi, {}),
                              ],
                            }),
                            (0, U.jsx)(`p`, {
                              children: `Select the account where you want to receive direct messages.`,
                            }),
                            (0, U.jsx)(`select`, {
                              "aria-label": `Identity`,
                              children: (0, U.jsx)(`option`, {
                                children: `Pop Epoch`,
                              }),
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`label`, {
                          className: `editor-check`,
                          children: [
                            (0, U.jsx)(`input`, {
                              type: `checkbox`,
                              defaultChecked: !0,
                            }),
                            (0, U.jsxs)(`span`, {
                              children: [
                                `Only show as ads`,
                                (0, U.jsx)(`small`, {
                                  children: `Publish your posts as ads only and not on your TikTok profile. Otherwise, they'll appear on your profile for anyone to see and engage with.`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-field`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [
                                `Text (`,
                                a.length,
                                `/5) `,
                                (0, U.jsx)(yi, {}),
                              ],
                            }),
                            (0, U.jsx)(`p`, {
                              children: `Add up to 5. We'll test them with different audiences and only use the ones with the most engagement.`,
                            }),
                            l &&
                              (0, U.jsxs)(`div`, {
                                className: `editor-notice teal`,
                                children: [
                                  (0, U.jsx)(V, { size: 17 }),
                                  (0, U.jsx)(`p`, {
                                    children: `If you edit the text, it will be updated on TikTok. All engagement data (comments, likes, shares) from the original video will remain.`,
                                  }),
                                  (0, U.jsx)(`button`, {
                                    "aria-label": `Dismiss text notice`,
                                    onClick: () => u(!1),
                                    children: (0, U.jsx)(H, { size: 18 }),
                                  }),
                                ],
                              }),
                            a.map((e, t) =>
                              (0, U.jsxs)(
                                `div`,
                                {
                                  className: `editor-textarea`,
                                  children: [
                                    (0, U.jsx)(`textarea`, {
                                      maxLength: 100,
                                      "aria-label": `Ad text ` + (t + 1),
                                      value: e,
                                      onChange: (e) =>
                                        o((n) =>
                                          n.map((n, r) =>
                                            t === r ? e.target.value : n,
                                          ),
                                        ),
                                    }),
                                    (0, U.jsxs)(`small`, {
                                      children: [e.length, `/100`],
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                            a.length < 5 &&
                              (0, U.jsxs)(`button`, {
                                className: `editor-link`,
                                onClick: () => o([...a, ``]),
                                children: [
                                  (0, U.jsx)(de, { size: 17 }),
                                  ` Add alternative text`,
                                ],
                              }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-field`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [
                                `Call to action text `,
                                (0, U.jsx)(yi, {}),
                              ],
                            }),
                            (0, U.jsxs)(`p`, {
                              children: [
                                `Go to App Store, Install now, + 9 more `,
                                (0, U.jsx)(`button`, {
                                  "aria-label": `Edit call to action`,
                                  onClick: () => T(!w),
                                  children: (0, U.jsx)(le, { size: 16 }),
                                }),
                              ],
                            }),
                            w &&
                              (0, U.jsxs)(`select`, {
                                "aria-label": `Call to action`,
                                children: [
                                  (0, U.jsx)(`option`, {
                                    children: `Go to App Store`,
                                  }),
                                  (0, U.jsx)(`option`, {
                                    children: `Install now`,
                                  }),
                                  (0, U.jsx)(`option`, {
                                    children: `Learn more`,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-field`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [`Selling points `, (0, U.jsx)(yi, {})],
                            }),
                            (0, U.jsx)(`p`, {
                              children: `Add up to 15 to highlight what you’re promoting. Press enter to add each entry.`,
                            }),
                            (0, U.jsx)(`div`, {
                              className: `editor-point-tags`,
                              children: O.map((e) =>
                                (0, U.jsxs)(
                                  `span`,
                                  {
                                    children: [
                                      e,
                                      (0, U.jsx)(`button`, {
                                        "aria-label": `Remove ` + e,
                                        onClick: () =>
                                          k(O.filter((t) => t !== e)),
                                        children: `×`,
                                      }),
                                    ],
                                  },
                                  e,
                                ),
                              ),
                            }),
                            (0, U.jsx)(`input`, {
                              placeholder: `Enter or select text`,
                              value: j,
                              onChange: (e) => te(e.target.value),
                              onKeyDown: (e) => {
                                e.key === `Enter` &&
                                  j.trim() &&
                                  O.length < 15 &&
                                  (k([...O, j.trim()]), te(``));
                              },
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-field`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [
                                `Add promo code or offer `,
                                (0, U.jsx)(`span`, { children: `· Optional` }),
                                ` `,
                                (0, U.jsx)(yi, {}),
                              ],
                            }),
                            (0, U.jsx)(`p`, {
                              children: `Your offer details for promo codes, offers, or events will be highlighted to boost engagement and ad performance`,
                            }),
                            (0, U.jsxs)(`button`, {
                              className: `editor-outline`,
                              onClick: () => S(!x),
                              children: [(0, U.jsx)(de, { size: 20 }), ` Add`],
                            }),
                            x &&
                              (0, U.jsx)(`input`, {
                                placeholder: `Enter promo code or offer`,
                                "aria-label": `Promo code`,
                              }),
                          ],
                        }),
                        (0, U.jsx)(`p`, {
                          children: `Eligible codes from other campaigns will be used.`,
                        }),
                        (0, U.jsxs)(`label`, {
                          className: `editor-check`,
                          children: [
                            (0, U.jsx)(`input`, { type: `checkbox` }),
                            (0, U.jsxs)(`span`, {
                              children: [
                                `This ad contains AI-generated content`,
                                (0, U.jsx)(`small`, {
                                  children: `Our advertising policies require the labeling of AI-generated content. By clicking this checkbox you confirm that your content conforms to our guidelines for AI-generated content. This can't be changed once you submit the ad.`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`button`, {
                          className: `editor-link`,
                          onClick: () => b(!y),
                          children: [
                            `Advanced settings `,
                            (0, U.jsx)(P, { size: 18 }),
                          ],
                        }),
                        y &&
                          (0, U.jsxs)(`label`, {
                            className: `editor-check`,
                            children: [
                              (0, U.jsx)(`input`, {
                                type: `checkbox`,
                                defaultChecked: !0,
                              }),
                              `Allow comments`,
                            ],
                          }),
                      ],
                    }),
                    (0, U.jsxs)(bi, {
                      title: `Automatic enhancements`,
                      description: `Improve the overall quality of your ads without any extra work.`,
                      children: [
                        (0, U.jsxs)(`h3`, {
                          children: [
                            `Your selections `,
                            (0, U.jsx)(`button`, {
                              "aria-label": `Edit automatic enhancements`,
                              onClick: e,
                              children: (0, U.jsx)(le, { size: 17 }),
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`p`, {
                          children: [
                            `Turned on: `,
                            (0, U.jsx)(`span`, {
                              children: `CTA enhancement, Translate and dub, Video quality, Music refresh`,
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`p`, {
                          children: [
                            `Turned off: `,
                            (0, U.jsx)(`span`, {
                              children: `Generate ad card`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, U.jsxs)(bi, {
                      title: `Destination`,
                      description: `Based on your selected optimization location, this is where we'll send people when they tap or click on your ad.`,
                      children: [
                        (0, U.jsxs)(`div`, {
                          className: `editor-field`,
                          children: [
                            (0, U.jsxs)(`h3`, {
                              children: [`App store `, (0, U.jsx)(yi, {})],
                            }),
                            (0, U.jsx)(`p`, { children: `Apple App Store` }),
                          ],
                        }),
                        (0, U.jsxs)(`h3`, {
                          children: [
                            `Add specific custom product page as destination `,
                            (0, U.jsx)(_i, {
                              className: `strategy-toggle`,
                              checked: _,
                              onCheckedChange: v,
                              "aria-label": `Custom product page`,
                            }),
                          ],
                        }),
                        _ &&
                          (0, U.jsx)(`input`, {
                            "aria-label": `Destination URL`,
                            defaultValue: `https://apps.apple.com/us/app/pop-epoch-civilization`,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, U.jsxs)(`aside`, {
                  className: `editor-preview`,
                  children: [
                    (0, U.jsxs)(`div`, {
                      className: `editor-preview-heading`,
                      children: [
                        (0, U.jsxs)(`span`, { children: [`Video `, p + 1] }),
                        (0, U.jsx)(`span`, { children: `Text 1` }),
                        (0, U.jsx)(`button`, {
                          "aria-label": `Previous preview`,
                          onClick: () => m((p + 3) % 4),
                          children: (0, U.jsx)(ee, { size: 18 }),
                        }),
                        (0, U.jsxs)(`b`, { children: [p + 1, ` / 27`] }),
                        (0, U.jsx)(`button`, {
                          "aria-label": `Next preview`,
                          onClick: () => m((p + 1) % 4),
                          children: (0, U.jsx)(F, { size: 18 }),
                        }),
                      ],
                    }),
                    (0, U.jsxs)(`div`, {
                      className: `editor-preview-tools`,
                      children: [
                        (0, U.jsxs)(`select`, {
                          "aria-label": `Placement`,
                          children: [
                            (0, U.jsx)(`option`, { children: `In feed` }),
                            (0, U.jsx)(`option`, { children: `Search feed` }),
                          ],
                        }),
                        (0, U.jsxs)(`button`, {
                          onClick: () => m((p + 1) % 4),
                          children: [
                            (0, U.jsx)(ge, { size: 14 }),
                            ` Ad variations`,
                          ],
                        }),
                      ],
                    }),
                    (0, U.jsxs)(`div`, {
                      className: `editor-phone` + (h ? ` safe` : ``),
                      children: [
                        (0, U.jsx)(`img`, {
                          className: `editor-phone-photo`,
                          src: vi[p],
                          alt: `Ad preview`,
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-phone-status`,
                          children: [
                            (0, U.jsx)(`b`, { children: `9:41` }),
                            (0, U.jsxs)(`span`, {
                              children: [
                                (0, U.jsx)(he, { size: 16 }),
                                (0, U.jsx)(xe, { size: 16 }),
                                (0, U.jsx)(A, { size: 20 }),
                              ],
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-feed-tabs`,
                          children: [
                            `Following `,
                            (0, U.jsx)(`b`, { children: `For You` }),
                            (0, U.jsx)(pe, { size: 20 }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-social`,
                          children: [
                            (0, U.jsx)(`div`, {
                              className: `editor-avatar`,
                              children: `P`,
                            }),
                            (0, U.jsx)(B, { fill: `white` }),
                            (0, U.jsx)(`small`, { children: `991K` }),
                            (0, U.jsx)(ae, { fill: `white` }),
                            (0, U.jsx)(`small`, { children: `3456` }),
                            (0, U.jsx)(M, { fill: `white` }),
                            (0, U.jsx)(`small`, { children: `810` }),
                            (0, U.jsx)(me, { fill: `white` }),
                            (0, U.jsx)(`small`, { children: `1256` }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-caption`,
                          children: [
                            (0, U.jsx)(`b`, { children: `Pop Epoch` }),
                            (0, U.jsx)(`p`, { children: a[0] }),
                            (0, U.jsx)(`small`, { children: `Ad` }),
                            (0, U.jsx)(`button`, {
                              onClick: () => D(!1),
                              children: `Go to App Store`,
                            }),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `editor-phone-nav`,
                          children: [
                            (0, U.jsx)(re, {}),
                            (0, U.jsx)(be, {}),
                            (0, U.jsx)(`b`, { children: `＋` }),
                            (0, U.jsx)(ae, {}),
                            (0, U.jsx)(`span`, { children: `♙` }),
                          ],
                        }),
                      ],
                    }),
                    (0, U.jsxs)(`div`, {
                      className: `editor-scrubber`,
                      children: [
                        (0, U.jsx)(`input`, {
                          type: `range`,
                          "aria-label": `Preview progress`,
                          defaultValue: 0,
                        }),
                        (0, U.jsx)(`span`, { children: `00:00 / 00:38` }),
                      ],
                    }),
                    (0, U.jsxs)(`label`, {
                      className: `editor-check`,
                      children: [
                        (0, U.jsx)(`input`, {
                          type: `checkbox`,
                          checked: h,
                          onChange: (e) => g(e.target.checked),
                        }),
                        `Display content safe zone `,
                        (0, U.jsx)(yi, {}),
                      ],
                    }),
                    (0, U.jsx)(`p`, {
                      children: `Since ad variations are automatically generated, your generated ad content may be slightly different than the preview.`,
                    }),
                  ],
                }),
                (0, U.jsx)(`div`, {
                  className: `editor-tracking`,
                  children: (0, U.jsx)(bi, {
                    title: `Tracking · Optional`,
                    description: `Connect your external website, app, and more to TikTok to track any sales or conversions from your ads.`,
                    children: (0, U.jsxs)(`details`, {
                      children: [
                        (0, U.jsx)(`summary`, {
                          children: `TikTok events tracking`,
                        }),
                        (0, U.jsx)(`p`, {
                          children: `No additional tracking configured.`,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, U.jsxs)(`aside`, {
              className: `editor-usage`,
              children: [
                (0, U.jsxs)(`h2`, {
                  children: [`Recommendation usage `, (0, U.jsx)(yi, {})],
                }),
                (d
                  ? [
                      `Optimization and bidding`,
                      `Budget and schedule`,
                      `Audience targeting`,
                      `Creative assets`,
                    ]
                  : [`Creative assets`]
                ).map((e) =>
                  (0, U.jsxs)(
                    `p`,
                    {
                      children: [
                        (0, U.jsx)(`span`, {
                          children: (0, U.jsx)(N, { size: 13 }),
                        }),
                        e,
                      ],
                    },
                    e,
                  ),
                ),
                (0, U.jsxs)(`button`, {
                  onClick: () => f(!d),
                  children: [
                    `View `,
                    d ? `less` : `more`,
                    ` `,
                    d
                      ? (0, U.jsx)(I, { size: 17 })
                      : (0, U.jsx)(P, { size: 17 }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, U.jsxs)(`footer`, {
        className: `editor-footer`,
        children: [
          E &&
            (0, U.jsxs)(`span`, {
              role: `status`,
              children: [
                (0, U.jsx)(N, { size: 16 }),
                ` Changes saved in this demo`,
              ],
            }),
          (0, U.jsx)(`button`, {
            className: `primary`,
            onClick: () => {
              (localStorage.setItem(
                `edit-ad-demo`,
                JSON.stringify({ name: r, texts: a, points: O }),
              ),
                D(!0));
            },
            children: `Submit`,
          }),
        ],
      }),
    ],
  });
}
var Si = {
    products: [
      {
        id: `phone`,
        name: `Everyday smartphone`,
        sources: [window.__creativeImages[0], window.__creativeImages[1]],
      },
      {
        id: `fragrance`,
        name: `Signature fragrance`,
        sources: [window.__creativeImages[2]],
      },
      {
        id: `beauty`,
        name: `Beauty essentials`,
        sources: [window.__creativeImages[3]],
      },
    ].map((e) => ({
      id: e.id,
      name: e.name,
      discount: ``,
      start: ``,
      end: ``,
      selected: !0,
      images: e.sources.map((e) => ({ src: e, selected: !0 })),
    })),
  },
  Ci = {
    seedance: Si,
    enabled: [!0, !0, !0, !0, !0],
    words: [`Guaranteed return`, `Risk free`],
    genre: `Funk`,
    brand: `Find Fun Town`,
    same: !1,
    translations: [
      { language: `Korean`, text: `프렌즈타운` },
      { language: `Japanese`, text: `ファンタウン` },
    ],
    logo: `data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22240%22%20viewBox%3D%220%200%20240%20240%22%3E%3Crect%20width%3D%22240%22%20height%3D%22240%22%20rx%3D%2248%22%20fill%3D%22%23008F91%22%2F%3E%3Ctext%20x%3D%22120%22%20y%3D%22137%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2CHelvetica%2Csans-serif%22%20font-size%3D%2276%22%20font-weight%3D%22800%22%20letter-spacing%3D%22-5%22%20fill%3D%22white%22%3EFFT%3C%2Ftext%3E%3Ctext%20x%3D%22120%22%20y%3D%22174%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2CHelvetica%2Csans-serif%22%20font-size%3D%2214%22%20font-weight%3D%22600%22%20letter-spacing%3D%222%22%20fill%3D%22%23C6F5EB%22%3EFIND%20FUN%20TOWN%3C%2Ftext%3E%3C%2Fsvg%3E`,
    position: `Top right`,
    size: 120,
    subtitlePosition: `Bottom`,
    font: `Arial`,
    fontSize: 18,
    style: `Box`,
    color: `#ffffff`,
    background: `#000000`,
    tracks: Array.from({ length: 12 }, (e, t) => ({
      name: `Music title${t ? ` ${t + 1}` : ``}.mp3`,
    })),
  };
