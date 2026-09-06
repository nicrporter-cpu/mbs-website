/* @ds-bundle: {"format":4,"namespace":"MBSDesignSystem_f206f7","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Progress","sourcePath":"components/core/Progress.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FormNote","sourcePath":"components/forms/FormNote.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"DataTable","sourcePath":"components/patterns/DataTable.jsx"},{"name":"EventCard","sourcePath":"components/patterns/EventCard.jsx"},{"name":"EventListItem","sourcePath":"components/patterns/EventListItem.jsx"},{"name":"FaqItem","sourcePath":"components/patterns/FaqItem.jsx"},{"name":"Hero","sourcePath":"components/patterns/Hero.jsx"},{"name":"MemberCard","sourcePath":"components/patterns/MemberCard.jsx"},{"name":"Modal","sourcePath":"components/patterns/Modal.jsx"},{"name":"PageHeader","sourcePath":"components/patterns/PageHeader.jsx"},{"name":"PrincipleCard","sourcePath":"components/patterns/PrincipleCard.jsx"},{"name":"ProfileCard","sourcePath":"components/patterns/ProfileCard.jsx"},{"name":"StepCard","sourcePath":"components/patterns/StepCard.jsx"},{"name":"Timeline","sourcePath":"components/patterns/Timeline.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"bb4938ba75c6","components/core/Badge.jsx":"0912272c10ea","components/core/Button.jsx":"1f04c48d6f0e","components/core/Card.jsx":"a6cfbec0da7b","components/core/Icon.jsx":"6cbb49bb9680","components/core/Progress.jsx":"11eed9542c00","components/core/SectionHeading.jsx":"bd3fcde311f1","components/core/StatTile.jsx":"be5c55ae33e9","components/forms/Checkbox.jsx":"baa17b225271","components/forms/Field.jsx":"35e0bbdd485d","components/forms/FormNote.jsx":"2c9adc82680a","components/forms/Input.jsx":"e57d4941a8e2","components/forms/Select.jsx":"31486b40386d","components/forms/Textarea.jsx":"5adbd06f25f3","components/navigation/SiteFooter.jsx":"b740bc42565a","components/navigation/SiteHeader.jsx":"96287f3c612b","components/patterns/DataTable.jsx":"33443e81fdf5","components/patterns/EventCard.jsx":"c65c41b5ca78","components/patterns/EventListItem.jsx":"f943fabe08f6","components/patterns/FaqItem.jsx":"51f81844a622","components/patterns/Hero.jsx":"41edb06cc6be","components/patterns/MemberCard.jsx":"075258fe3a51","components/patterns/Modal.jsx":"e12f3c800379","components/patterns/PageHeader.jsx":"9e6dbfc3e130","components/patterns/PrincipleCard.jsx":"76bfb3d33d4a","components/patterns/ProfileCard.jsx":"31a1ddfc56aa","components/patterns/StepCard.jsx":"4fd6e60ef389","components/patterns/Timeline.jsx":"59c221cc0a43","ui_kits/website/AboutScreen.jsx":"1ed80932c195","ui_kits/website/ApplyScreen.jsx":"26867ff2d1d1","ui_kits/website/ContactScreen.jsx":"fbe70b109198","ui_kits/website/EventsScreen.jsx":"818783bcb0af","ui_kits/website/HomeScreen.jsx":"744924aa636a","ui_kits/website/MembershipScreen.jsx":"9609ead3bbe2","ui_kits/website/PartnersScreen.jsx":"8ae54871b0cc","ui_kits/website/data.js":"0d6d41d88fd8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MBSDesignSystem_f206f7 = window.MBSDesignSystem_f206f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  initials,
  size = 44,
  src,
  alt = '',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--mbs-navy)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'var(--mbs-font-serif)',
      fontWeight: 'var(--mbs-fw-bold)',
      fontSize: Math.round(size * 0.36),
      color: 'var(--mbs-gold)',
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const VARIANTS = {
  tag: {
    background: 'var(--mbs-navy)',
    color: 'var(--mbs-gold)'
  },
  gold: {
    background: 'var(--mbs-gold)',
    color: 'var(--mbs-navy)'
  },
  goldSoft: {
    background: 'var(--mbs-gold-soft)',
    color: 'var(--mbs-gold-dark)',
    border: '1px solid var(--mbs-gold-border)'
  },
  navy: {
    background: 'var(--mbs-navy)',
    color: 'var(--mbs-white)'
  },
  neutral: {
    background: 'var(--mbs-off)',
    color: 'var(--mbs-gray)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--mbs-gray)',
    border: '1px solid var(--mbs-border)'
  },
  ok: {
    background: 'var(--mbs-ok-bg)',
    color: 'var(--mbs-ok)'
  },
  warn: {
    background: 'var(--mbs-warn-bg)',
    color: 'var(--mbs-warn)'
  },
  info: {
    background: 'var(--mbs-info-bg)',
    color: 'var(--mbs-info)'
  },
  danger: {
    background: 'var(--mbs-danger-bg)',
    color: 'var(--mbs-danger)'
  }
};
function Badge({
  children,
  variant = 'gold',
  dot,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--mbs-font-sans)',
      fontWeight: 'var(--mbs-fw-semibold)',
      fontSize: 'var(--mbs-fs-badge)',
      letterSpacing: 'var(--mbs-tr-btn)',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '4px 11px',
      borderRadius: 'var(--mbs-r-pill)',
      ...VARIANTS[variant],
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '.5em',
      height: '.5em',
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '9px 18px',
    fontSize: '11.5px'
  },
  md: {
    padding: '13px 28px',
    fontSize: '13px'
  },
  lg: {
    padding: '15px 34px',
    fontSize: '14px'
  }
};
const VARIANTS = {
  gold: {
    background: 'var(--mbs-gold)',
    color: 'var(--mbs-navy)',
    borderColor: 'transparent'
  },
  navy: {
    background: 'var(--mbs-navy)',
    color: 'var(--mbs-white)',
    borderColor: 'transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--mbs-navy)',
    borderColor: 'var(--mbs-border)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--mbs-gray)',
    borderColor: 'transparent'
  },
  onNavy: {
    background: 'var(--mbs-on-navy-fill-hi)',
    color: 'var(--mbs-on-navy-70)',
    borderColor: 'var(--mbs-on-navy-border)'
  }
};
const HOVER = {
  gold: {
    background: 'var(--mbs-gold-light)'
  },
  navy: {
    background: 'var(--mbs-navy-mid)'
  },
  outline: {
    borderColor: 'var(--mbs-gold)',
    color: 'var(--mbs-gold)'
  },
  ghost: {
    color: 'var(--mbs-navy)'
  },
  onNavy: {
    borderColor: 'var(--mbs-gold-border)',
    color: 'var(--mbs-white)'
  }
};
function Button({
  children,
  variant = 'gold',
  size = 'md',
  href,
  block,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: block ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: block ? '100%' : undefined,
    fontFamily: 'var(--mbs-font-sans)',
    fontWeight: 'var(--mbs-fw-semibold)',
    letterSpacing: 'var(--mbs-tr-btn)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    borderRadius: 'var(--mbs-r-sm)',
    border: '1.5px solid transparent',
    textDecoration: 'none',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'all var(--mbs-dur) var(--mbs-ease)',
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    transform: hover && !disabled ? 'translateY(var(--mbs-lift))' : 'none',
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    style: base,
    disabled: !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'light',
  hover = true,
  accent,
  padding = '28px',
  style,
  onClick,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  const dark = tone === 'navy';
  const base = {
    position: 'relative',
    overflow: accent ? 'hidden' : undefined,
    background: dark ? 'var(--mbs-navy)' : 'var(--mbs-surface-card)',
    border: dark ? '1px solid transparent' : '1px solid var(--mbs-border)',
    borderRadius: 'var(--mbs-r)',
    padding,
    boxShadow: dark ? 'var(--mbs-sh-sm)' : 'var(--mbs-sh-xs)',
    color: dark ? 'var(--mbs-on-navy-50)' : undefined,
    transition: 'all var(--mbs-dur-slow) var(--mbs-ease)',
    cursor: onClick ? 'pointer' : undefined,
    ...(hover && over ? dark ? {
      background: 'var(--mbs-navy-mid)'
    } : {
      borderColor: 'var(--mbs-gold-border)',
      boxShadow: 'var(--mbs-sh-md)',
      transform: accent ? 'none' : 'translateY(var(--mbs-lift-card))'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onClick: onClick,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false)
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '3px',
      height: over ? '100%' : 0,
      background: 'var(--mbs-gold)',
      borderRadius: '0 0 2px 2px',
      transition: 'height var(--mbs-dur-slow) var(--mbs-ease)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 1.75px line glyphs, rounded joins — the set used across the MBS kit. */
const ICON_PATHS = {
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  check: 'M20 6 9 17l-5-5',
  calendar: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 2v4M8 2v4M3 10h18',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  mail: 'M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM22 7l-10 6L2 7',
  pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6',
  briefcase: 'M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  globe: 'M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
  trending: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  building: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
  clock: 'M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M12 7v5l3 2'
};
function Icon({
  name,
  size = '1.15em',
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      verticalAlign: '-.15em',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
Object.assign(__ds_scope, { ICON_PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '6px',
      borderRadius: 'var(--mbs-r-pill)',
      background: 'var(--mbs-off)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: Math.max(0, Math.min(100, value)) + '%',
      background: 'var(--mbs-gold)',
      borderRadius: 'inherit'
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Progress.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  label,
  title,
  desc,
  divider = true,
  tone = 'light',
  align = 'left',
  style
}) {
  const light = tone === 'light';
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--mbs-fs-label)',
      fontWeight: 'var(--mbs-fw-bold)',
      letterSpacing: 'var(--mbs-tr-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--mbs-gold)' : 'rgba(181,157,84,.8)',
      marginBottom: '10px'
    }
  }, label), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: 'var(--mbs-fs-h2)',
      fontWeight: 'var(--mbs-fw-bold)',
      lineHeight: 'var(--mbs-lh-title)',
      letterSpacing: 'var(--mbs-tr-title)',
      margin: 0,
      color: light ? 'var(--mbs-navy)' : 'var(--mbs-white)'
    }
  }, title), divider && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--mbs-divider-w)',
      height: '2px',
      background: 'var(--mbs-gold)',
      borderRadius: '2px',
      margin: center ? '18px auto 28px' : '18px 0 28px'
    }
  }), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-body)',
      lineHeight: 'var(--mbs-lh-prose)',
      maxWidth: '560px',
      margin: center ? '0 auto' : 0,
      color: light ? 'var(--mbs-gray)' : 'var(--mbs-on-navy-50)'
    }
  }, desc));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function StatTile({
  value,
  label,
  tone = 'navy',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontWeight: 'var(--mbs-fw-bold)',
      fontSize: '40px',
      lineHeight: 1,
      color: tone === 'gold' ? 'var(--mbs-gold)' : 'var(--mbs-navy)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--mbs-fs-label)',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      fontWeight: 'var(--mbs-fw-bold)',
      color: 'var(--mbs-gray)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      fontSize: 'var(--mbs-fs-ui)',
      color: 'var(--mbs-gray)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    style: {
      accentColor: 'var(--mbs-gold)',
      width: '16px',
      height: '16px',
      margin: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  children,
  help,
  error,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      marginBottom: '20px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--mbs-fs-form-label)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-navy)',
      letterSpacing: '.5px',
      textTransform: 'uppercase'
    }
  }, label), children, (error || help) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: error ? 'var(--mbs-danger)' : 'var(--mbs-gray)'
    }
  }, error || help));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormNote.jsx
try { (() => {
function FormNote({
  children,
  tone = 'light',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--mbs-fs-meta)',
      lineHeight: 'var(--mbs-lh-body)',
      color: 'var(--mbs-gray)',
      padding: '16px 18px',
      background: tone === 'alt' ? 'var(--mbs-off)' : 'var(--mbs-white)',
      borderRadius: 'var(--mbs-r-sm)',
      borderLeft: '3px solid var(--mbs-gold)',
      boxShadow: tone === 'alt' ? 'none' : 'var(--mbs-sh-xs)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { FormNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormNote.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        fontFamily: 'var(--mbs-font-sans)',
        fontSize: 'var(--mbs-fs-body-sm)',
        color: 'var(--mbs-navy)',
        background: 'var(--mbs-white)',
        border: '1px solid ' + (invalid ? 'var(--mbs-danger)' : focus ? 'var(--mbs-gold)' : 'var(--mbs-border)'),
        borderRadius: 'var(--mbs-r-sm)',
        padding: '12px 14px',
        outline: 'none',
        boxShadow: focus ? 'var(--mbs-focus-ring)' : 'none',
        transition: 'border-color var(--mbs-dur) var(--mbs-ease), box-shadow var(--mbs-dur) var(--mbs-ease)'
      },
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  invalid,
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        fontFamily: 'var(--mbs-font-sans)',
        fontSize: 'var(--mbs-fs-body-sm)',
        color: 'var(--mbs-navy)',
        background: 'var(--mbs-white)',
        border: '1px solid ' + (invalid ? 'var(--mbs-danger)' : focus ? 'var(--mbs-gold)' : 'var(--mbs-border)'),
        borderRadius: 'var(--mbs-r-sm)',
        padding: '12px 14px',
        outline: 'none',
        boxShadow: focus ? 'var(--mbs-focus-ring)' : 'none',
        transition: 'border-color var(--mbs-dur) var(--mbs-ease), box-shadow var(--mbs-dur) var(--mbs-ease)'
      },
      appearance: 'none',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--mbs-gray) 50%),linear-gradient(135deg,var(--mbs-gray) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 18px) 52%,calc(100% - 13px) 52%',
      backgroundSize: '5px 5px,5px 5px',
      backgroundRepeat: 'no-repeat',
      paddingRight: '36px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        fontFamily: 'var(--mbs-font-sans)',
        fontSize: 'var(--mbs-fs-body-sm)',
        color: 'var(--mbs-navy)',
        background: 'var(--mbs-white)',
        border: '1px solid ' + (invalid ? 'var(--mbs-danger)' : focus ? 'var(--mbs-gold)' : 'var(--mbs-border)'),
        borderRadius: 'var(--mbs-r-sm)',
        padding: '12px 14px',
        outline: 'none',
        boxShadow: focus ? 'var(--mbs-focus-ring)' : 'none',
        transition: 'border-color var(--mbs-dur) var(--mbs-ease), box-shadow var(--mbs-dur) var(--mbs-ease)'
      },
      minHeight: '120px',
      resize: 'vertical',
      lineHeight: 'var(--mbs-lh-body)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  tagline = 'Der erste studentische Business-Club an der Hochschule Fresenius München. Gegründet 2026.',
  legal = [],
  social = [],
  copyright = '© 2026 Munich Business Society',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--mbs-navy)',
      borderTop: '1px solid var(--mbs-on-navy-border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--mbs-content-max)',
      margin: '0 auto',
      padding: '48px var(--mbs-gutter) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '40px',
      flexWrap: 'wrap',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '14px',
      fontWeight: 'var(--mbs-fw-bold)',
      color: 'var(--mbs-white)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '8px'
    }
  }, "Munich Business ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mbs-gold)'
    }
  }, "Society")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12px',
      color: 'var(--mbs-on-navy-35)',
      lineHeight: 1.6,
      maxWidth: '280px',
      margin: 0
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px'
    }
  }, social.map(s => /*#__PURE__*/React.createElement(SocialTile, {
    key: s.label,
    item: s
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: 'var(--mbs-on-navy-border)',
      marginBottom: '24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--mbs-on-navy-25)'
    }
  }, copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: l.onClick,
    style: {
      fontSize: '11px',
      color: 'rgba(255,255,255,.3)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l.label))))));
}
function SocialTile({
  item
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    title: item.label,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      width: '36px',
      height: '36px',
      borderRadius: 'var(--mbs-r-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: over ? 'var(--mbs-gold-tile)' : 'var(--mbs-on-navy-fill-hi)',
      border: '1px solid ' + (over ? 'var(--mbs-gold-tile-border)' : 'var(--mbs-on-navy-border)'),
      color: over ? 'var(--mbs-gold)' : 'var(--mbs-on-navy-50)',
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: 'var(--mbs-fw-bold)',
      transition: 'all var(--mbs-dur) var(--mbs-ease)'
    }
  }, item.glyph || item.label.slice(0, 2));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  links = [],
  active,
  onNavigate,
  logoSrc,
  applyLabel = 'Mitglied Werden',
  onApply,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--mbs-gutter)',
      height: 'var(--mbs-nav-h)',
      background: 'var(--mbs-white)',
      borderBottom: '1px solid var(--mbs-border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate(links[0] && links[0].id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Munich Business Society",
    style: {
      height: '34px',
      width: 'auto',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '12px',
      fontWeight: 'var(--mbs-fw-bold)',
      color: 'var(--mbs-navy)',
      letterSpacing: 'var(--mbs-tr-brand)',
      textTransform: 'uppercase',
      lineHeight: 1.15
    }
  }, "Munich Business", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 'var(--mbs-fw-regular)',
      color: 'var(--mbs-gray)',
      fontSize: '9px',
      letterSpacing: 'var(--mbs-tr-brand-sub)',
      marginTop: '1px'
    }
  }, "Society"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      height: '100%',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.id,
    link: l,
    active: active === l.id,
    onNavigate: onNavigate
  })), /*#__PURE__*/React.createElement("a", {
    onClick: onApply,
    style: {
      marginLeft: '8px',
      padding: '0 22px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--mbs-gold)',
      color: 'var(--mbs-navy)',
      borderRadius: 'var(--mbs-r-sm)',
      fontSize: 'var(--mbs-fs-nav)',
      fontWeight: 'var(--mbs-fw-semibold)',
      letterSpacing: '.8px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, applyLabel)));
}
function NavLink({
  link,
  active,
  onNavigate
}) {
  const [over, setOver] = React.useState(false);
  const on = active || over;
  return /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate(link.id),
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      color: on ? 'var(--mbs-navy)' : 'var(--mbs-gray)',
      fontSize: 'var(--mbs-fs-nav)',
      fontWeight: 'var(--mbs-fw-medium)',
      letterSpacing: 'var(--mbs-tr-nav)',
      textTransform: 'uppercase',
      padding: '0 15px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: '2px solid ' + (on ? 'var(--mbs-gold)' : 'transparent'),
      transition: 'all var(--mbs-dur) var(--mbs-ease)'
    }
  }, link.label);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/patterns/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--mbs-fs-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      fontFamily: 'var(--mbs-font-sans)',
      textAlign: c.align || 'left',
      fontSize: 'var(--mbs-fs-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--mbs-tr-badge)',
      color: 'var(--mbs-gray)',
      fontWeight: 'var(--mbs-fw-bold)',
      padding: '12px 16px',
      borderBottom: '2px solid var(--mbs-border)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement(Row, {
    key: i,
    row: r,
    columns: columns
  }))));
}
function Row({
  row,
  columns
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("tr", {
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      background: over ? 'var(--mbs-off)' : 'transparent',
      transition: 'background var(--mbs-dur) var(--mbs-ease)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--mbs-border)',
      textAlign: c.align || 'left',
      color: i === 0 ? 'var(--mbs-navy)' : 'var(--mbs-gray)',
      fontWeight: i === 0 ? 'var(--mbs-fw-semibold)' : 'var(--mbs-fw-regular)'
    }
  }, row[c.key])));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EventCard.jsx
try { (() => {
function EventCard({
  icon,
  title,
  children,
  tags = [],
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    accent: true,
    onClick: onClick,
    style: style
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '24px',
      marginBottom: '14px',
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: 'var(--mbs-fs-card-title)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-navy)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-card)',
      color: 'var(--mbs-gray)',
      lineHeight: 'var(--mbs-lh-body)',
      margin: 0
    }
  }, children), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      marginTop: '14px',
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    variant: "tag"
  }, t))));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EventListItem.jsx
try { (() => {
function EventListItem({
  day,
  month,
  title,
  tag,
  children,
  location,
  time,
  onClick,
  style
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--mbs-white)',
      border: '1px solid ' + (over ? 'var(--mbs-gold-tile-border)' : 'var(--mbs-border)'),
      borderRadius: 'var(--mbs-r)',
      overflow: 'hidden',
      boxShadow: 'var(--mbs-sh-xs)',
      cursor: onClick ? 'pointer' : undefined,
      transition: 'all var(--mbs-dur-slow) var(--mbs-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mbs-gold)',
      color: 'var(--mbs-navy)',
      padding: '20px 24px',
      minWidth: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '24px',
      fontWeight: 'var(--mbs-fw-black)',
      lineHeight: 1
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--mbs-fs-badge)',
      fontWeight: 'var(--mbs-fw-semibold)',
      letterSpacing: 'var(--mbs-tr-badge)',
      textTransform: 'uppercase',
      marginTop: '2px'
    }
  }, month)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '6px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: 'var(--mbs-fs-card-title)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-navy)',
      margin: 0
    }
  }, title), tag && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "gold"
  }, tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-ui)',
      color: 'var(--mbs-gray)',
      lineHeight: 1.6,
      margin: '0 0 8px'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      fontSize: '11px',
      color: 'var(--mbs-gray-light)'
    }
  }, location && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pin",
    size: "12px"
  }), location), time && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: "12px"
  }), time))));
}
Object.assign(__ds_scope, { EventListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EventListItem.jsx", error: String((e && e.message) || e) }); }

// components/patterns/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  children,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mbs-white)',
      border: '1px solid var(--mbs-border)',
      borderRadius: 'var(--mbs-r)',
      overflow: 'hidden',
      boxShadow: 'var(--mbs-sh-xs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      padding: '20px 24px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--mbs-font-sans)',
      fontSize: 'var(--mbs-fs-h4)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-navy)',
      margin: 0
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      color: 'var(--mbs-gold)',
      lineHeight: 1,
      flexShrink: 0,
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--mbs-dur) var(--mbs-ease)'
    }
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 20px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-body-sm)',
      color: 'var(--mbs-gray)',
      lineHeight: 'var(--mbs-lh-prose)',
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Hero.jsx
try { (() => {
function Hero({
  line1 = 'Munich',
  line2 = 'Business Society',
  lead,
  primary,
  secondary,
  imageSrc,
  imageLabel = 'Bild',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
      maxWidth: 'var(--mbs-content-max)',
      margin: '0 auto',
      padding: '100px var(--mbs-gutter) 80px',
      background: 'var(--mbs-white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: 'var(--mbs-fs-display)',
      fontWeight: 'var(--mbs-fw-bold)',
      lineHeight: 'var(--mbs-lh-display)',
      letterSpacing: 'var(--mbs-tr-display)',
      color: 'var(--mbs-navy)',
      maxWidth: '500px',
      margin: '0 0 24px'
    }
  }, line1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--mbs-gold)'
    }
  }, line2)), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-lead)',
      color: 'var(--mbs-gray)',
      maxWidth: '440px',
      lineHeight: 'var(--mbs-lh-body)',
      margin: '0 0 40px'
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }
  }, primary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gold",
    onClick: primary.onClick,
    href: primary.href
  }, primary.label), secondary && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: secondary.onClick,
    href: secondary.href
  }, secondary.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--mbs-r-lg)',
      background: 'var(--mbs-navy)',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(39,63,99,.1)'
    }
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      inset: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-on-navy-25)',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    }
  }, imageLabel))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Hero.jsx", error: String((e && e.message) || e) }); }

// components/patterns/MemberCard.jsx
try { (() => {
function MemberCard({
  name,
  role,
  initials,
  description,
  photoSrc,
  style
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      textAlign: 'center',
      borderRadius: 'var(--mbs-r)',
      background: 'var(--mbs-white)',
      overflow: 'hidden',
      border: '1px solid ' + (over ? 'var(--mbs-gold-border)' : 'var(--mbs-border)'),
      boxShadow: over ? 'var(--mbs-sh-lg)' : 'var(--mbs-sh-xs)',
      transform: over ? 'translateY(var(--mbs-lift-card))' : 'none',
      transition: 'all var(--mbs-dur-slow) var(--mbs-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      background: 'var(--mbs-navy)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      borderBottom: '3px solid var(--mbs-gold)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, photoSrc ? /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '40px',
      fontWeight: 'var(--mbs-fw-bold)',
      color: 'var(--mbs-gold)',
      letterSpacing: '2px',
      opacity: .3
    }
  }, initials), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'rgba(255,255,255,.2)',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    }
  }, "Foto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 28px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--mbs-font-sans)',
      fontSize: 'var(--mbs-fs-h4)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-navy)',
      margin: '0 0 4px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--mbs-fs-badge)',
      color: 'var(--mbs-gold)',
      fontWeight: 'var(--mbs-fw-bold)',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      marginBottom: '10px'
    }
  }, role), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-ui)',
      color: 'var(--mbs-gray)',
      lineHeight: 'var(--mbs-lh-tight)',
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { MemberCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/MemberCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Modal.jsx
try { (() => {
function Modal({
  open = true,
  tag,
  title,
  meta = [],
  children,
  footer,
  onClose,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--mbs-scrim-navy)',
      backdropFilter: 'var(--mbs-blur-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mbs-white)',
      borderRadius: 'var(--mbs-r-lg)',
      maxWidth: '640px',
      width: '100%',
      maxHeight: '90%',
      overflowY: 'auto',
      boxShadow: 'var(--mbs-sh-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mbs-navy)',
      padding: '32px 36px',
      borderRadius: 'var(--mbs-r-lg) var(--mbs-r-lg) 0 0',
      position: 'relative'
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,.1)',
      border: 'none',
      color: 'var(--mbs-on-navy-70)',
      fontSize: '18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\xD7"), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: 'var(--mbs-fs-badge)',
      fontWeight: 'var(--mbs-fw-semibold)',
      letterSpacing: 'var(--mbs-tr-badge)',
      textTransform: 'uppercase',
      color: 'var(--mbs-navy)',
      background: 'var(--mbs-gold)',
      padding: '4px 12px',
      borderRadius: 'var(--mbs-r-pill)',
      marginBottom: '14px'
    }
  }, tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '24px',
      fontWeight: 'var(--mbs-fw-bold)',
      color: 'var(--mbs-white)',
      margin: 0
    }
  }, title), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      fontSize: 'var(--mbs-fs-ui)',
      color: 'rgba(255,255,255,.45)',
      marginTop: '12px'
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 36px'
    }
  }, children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px'
    }
  }, footer))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Modal.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PageHeader.jsx
try { (() => {
function PageHeader({
  title,
  subtitle,
  height = 300,
  imageSrc,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height,
      background: 'var(--mbs-navy)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      ...style
    }
  }, imageSrc && /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: 'var(--mbs-fs-h1)',
      fontWeight: 'var(--mbs-fw-bold)',
      color: 'var(--mbs-white)',
      letterSpacing: 'var(--mbs-tr-title)',
      margin: '0 0 10px'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-body)',
      color: 'rgba(255,255,255,.45)',
      maxWidth: '480px',
      margin: '0 auto',
      lineHeight: 'var(--mbs-lh-body)'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PrincipleCard.jsx
try { (() => {
function PrincipleCard({
  icon,
  title,
  children,
  style
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      padding: '18px',
      borderRadius: 'var(--mbs-r)',
      background: over ? 'var(--mbs-navy-mid)' : 'var(--mbs-navy)',
      boxShadow: 'var(--mbs-sh-sm)',
      transition: 'background var(--mbs-dur) var(--mbs-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '32px',
      height: '32px',
      borderRadius: 'var(--mbs-r-sm)',
      background: 'var(--mbs-gold-tile)',
      border: '1px solid var(--mbs-gold-tile-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: '14px',
      color: 'var(--mbs-gold)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--mbs-font-sans)',
      fontSize: 'var(--mbs-fs-ui)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-white)',
      margin: '0 0 3px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-meta)',
      color: 'var(--mbs-on-navy-50)',
      lineHeight: 'var(--mbs-lh-tight)',
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { PrincipleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PrincipleCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProfileCard.jsx
try { (() => {
function ProfileCard({
  icon,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: style
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '28px',
      marginBottom: '14px',
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: 'var(--mbs-fs-h4)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-navy)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-ui)',
      color: 'var(--mbs-gray)',
      lineHeight: 'var(--mbs-lh-body)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { ProfileCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProfileCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StepCard.jsx
try { (() => {
function StepCard({
  number,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 16px',
      background: 'var(--mbs-navy)',
      border: '1px solid var(--mbs-navy)',
      borderRadius: 'var(--mbs-r)',
      boxShadow: 'var(--mbs-sh-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: 'var(--mbs-r-sm)',
      background: 'var(--mbs-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 14px',
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '18px',
      fontWeight: 'var(--mbs-fw-bold)',
      color: 'var(--mbs-navy)'
    }
  }, number), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--mbs-font-sans)',
      fontSize: 'var(--mbs-fs-ui)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-white)',
      margin: '0 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-meta)',
      color: 'rgba(255,255,255,.45)',
      lineHeight: 1.6,
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Timeline.jsx
try { (() => {
function Timeline({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: '32px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '6px',
      top: '6px',
      bottom: '6px',
      width: '2px',
      background: 'var(--mbs-border)'
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      marginBottom: i === items.length - 1 ? 0 : '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '-32px',
      top: '5px',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: it.upcoming ? 'var(--mbs-white)' : 'var(--mbs-gold)',
      border: it.upcoming ? '2px solid var(--mbs-border)' : 'none',
      boxShadow: '0 0 0 3px var(--mbs-white)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--mbs-fs-label)',
      fontWeight: 'var(--mbs-fw-bold)',
      letterSpacing: 'var(--mbs-tr-badge)',
      textTransform: 'uppercase',
      color: it.upcoming ? 'var(--mbs-gray-light)' : 'var(--mbs-gold)',
      marginBottom: '4px'
    }
  }, it.date), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--mbs-font-sans)',
      fontSize: 'var(--mbs-fs-h4)',
      fontWeight: 'var(--mbs-fw-semibold)',
      color: 'var(--mbs-navy)',
      margin: '0 0 4px'
    }
  }, it.title), it.description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--mbs-fs-ui)',
      color: 'var(--mbs-gray)',
      lineHeight: 1.6,
      margin: 0
    }
  }, it.description))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Timeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  StatTile,
  Avatar,
  Icon,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormNote,
  SiteHeader,
  SiteFooter,
  Hero,
  PageHeader,
  PrincipleCard,
  StepCard,
  EventCard,
  EventListItem,
  MemberCard,
  ProfileCard,
  FaqItem,
  Timeline,
  DataTable,
  Modal
} = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: tone === 'alt' ? 'var(--mbs-off)' : tone === 'navy' ? 'var(--mbs-navy)' : 'var(--mbs-white)',
    borderTop: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    borderBottom: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--mbs-content-max)',
    margin: '0 auto',
    padding: '80px var(--mbs-gutter)'
  }
}, children));
function AboutScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "\xDCber Uns",
    subtitle: "Eine studentische Initiative, die akademische Theorie mit realer Wirtschaftspraxis verbindet."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Wer sind wir \xFCberhaupt",
    title: "Munich Business Society",
    desc: "Die Munich Business Society ist eine studentische Initiative an der Hochschule Fresenius, die Studierenden eine Plattform f\xFCr angewandte Wirtschaftsbildung, professionellen Austausch und pers\xF6nliche Weiterentwicklung bietet."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.8,
      marginTop: '20px'
    }
  }, "Im Gegensatz zu bestehenden Initiativen fokussiert sich die MBS ausschlie\xDFlich auf angewandte Wirtschaftskompetenz \u2014 durch praxisnahe Workshops, Gastredner und eine starke Community, die Studierende beim professionellen und pers\xF6nlichen Wachstum unterst\xFCtzt.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mbs-label",
    style: {
      marginBottom: '14px'
    }
  }, "Kernprinzipien"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, D.principles.map(p => /*#__PURE__*/React.createElement(PrincipleCard, {
    key: p.title,
    icon: p.icon,
    title: p.title
  }, p.text))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '72px',
      textAlign: 'center',
      maxWidth: '720px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    label: "Unsere Vision",
    title: "Unsere Vision & Mission"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      lineHeight: 1.9
    }
  }, "Wir streben danach, ein einflussreiches studentisches Business-Netzwerk in M\xFCnchen zu sein \u2013 eine langfristige Karriereplattform, die auf den S\xE4ulen Gemeinschaft, Ambition und Verantwortung ruht. Unsere Mission ist es, Studierende nicht nur fachlich zu bilden, sondern sie zu inspirieren, proaktiv Verantwortung in der Wirtschaft zu \xFCbernehmen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '72px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    label: "Unsere Werte",
    title: "Wof\xFCr wir stehen",
    style: {
      marginBottom: '40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '28px'
    }
  }, D.values.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.title,
    tone: "navy",
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '28px',
      marginBottom: '16px',
      lineHeight: 1
    }
  }, v.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '18px',
      fontWeight: 600,
      color: 'var(--mbs-gold)',
      margin: '0 0 12px'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13.5px',
      color: 'var(--mbs-on-navy-50)',
      lineHeight: 1.7,
      margin: 0
    }
  }, v.text))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '72px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    label: "Board Members",
    title: "Aktuelle Board Members",
    style: {
      marginBottom: '40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '28px'
    }
  }, D.founders.map(p => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: p.name
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '72px',
      maxWidth: '620px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Fahrplan",
    title: "Was als N\xE4chstes kommt"
  }), /*#__PURE__*/React.createElement(Timeline, {
    items: [{
      date: 'April 2026',
      title: 'Gründung',
      description: 'Die MBS wird von drei IBM-Studierenden als GbR gegründet.'
    }, {
      date: 'Mai 2026',
      title: 'Launch-Event & Kick-Off',
      description: 'Offizieller Start am Campus München mit Keynote und Networking.'
    }, {
      date: 'Juni 2026',
      title: 'Erste Workshop-Reihe',
      description: 'CV- und Bewerbungstraining mit Recruitern.',
      upcoming: true
    }, {
      date: 'Wintersemester 2026',
      title: 'Erste Case Competition',
      description: 'Simulierte Business-Challenge mit Unternehmenspartner.',
      upcoming: true
    }]
  }))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApplyScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  StatTile,
  Avatar,
  Icon,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormNote,
  SiteHeader,
  SiteFooter,
  Hero,
  PageHeader,
  PrincipleCard,
  StepCard,
  EventCard,
  EventListItem,
  MemberCard,
  ProfileCard,
  FaqItem,
  Timeline,
  DataTable,
  Modal
} = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: tone === 'alt' ? 'var(--mbs-off)' : tone === 'navy' ? 'var(--mbs-navy)' : 'var(--mbs-white)',
    borderTop: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    borderBottom: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--mbs-content-max)',
    margin: '0 auto',
    padding: '80px var(--mbs-gutter)'
  }
}, children));
function ApplyScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    height: 220,
    title: "Bei der MBS bewerben",
    subtitle: "F\xFClle das Formular aus und wir vereinbaren dein Kennenlerngespr\xE4ch."
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--mbs-form-max)',
      margin: '0 auto'
    }
  }, sent ? /*#__PURE__*/React.createElement(Card, {
    padding: "40px",
    hover: false,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--mbs-gold)',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: "34px"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '22px',
      margin: '0 0 8px'
    }
  }, "Bewerbung eingegangen"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.8,
      maxWidth: '400px',
      margin: '0 auto 24px'
    }
  }, "Danke f\xFCr dein Interesse. Wir melden uns per E-Mail, um dein Kennenlerngespr\xE4ch zu vereinbaren."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Weitere Bewerbung")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Vorname"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Dein Vorname"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nachname"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Dein Nachname"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "E-Mail-Adresse"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "dein.name@students.hs-fresenius.de"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Studiengang"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Studiengang w\xE4hlen"), /*#__PURE__*/React.createElement("option", null, "International Business Management (IBM)"), /*#__PURE__*/React.createElement("option", null, "BWL / Betriebswirtschaftslehre"), /*#__PURE__*/React.createElement("option", null, "Wirtschaftspsychologie"), /*#__PURE__*/React.createElement("option", null, "Wirtschaftsrecht"), /*#__PURE__*/React.createElement("option", null, "Immobilienwirtschaft"), /*#__PURE__*/React.createElement("option", null, "Sportmanagement"), /*#__PURE__*/React.createElement("option", null, "Sonstiges"))), /*#__PURE__*/React.createElement(Field, {
    label: "Aktuelles Semester"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Semester w\xE4hlen"), /*#__PURE__*/React.createElement("option", null, "1. Semester"), /*#__PURE__*/React.createElement("option", null, "2. Semester"), /*#__PURE__*/React.createElement("option", null, "3. Semester"), /*#__PURE__*/React.createElement("option", null, "4. Semester"), /*#__PURE__*/React.createElement("option", null, "5. Semester"), /*#__PURE__*/React.createElement("option", null, "6. Semester"), /*#__PURE__*/React.createElement("option", null, "7.+ Semester")))), /*#__PURE__*/React.createElement(Field, {
    label: "Warum m\xF6chtest du der MBS beitreten?"
  }, /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Erz\xE4hl uns kurz von deiner Motivation und was du dir von der MBS erhoffst\u2026"
  })), /*#__PURE__*/React.createElement(FormNote, {
    tone: "alt"
  }, "Mit dem Absenden dieser Bewerbung best\xE4tigst du dein ernsthaftes Interesse an der Munich Business Society. Bewerbungen werden viertelj\xE4hrlich vom Gr\xFCndervorstand gepr\xFCft. Du erh\xE4ltst eine E-Mail zur Terminvereinbarung f\xFCr dein Kennenlerngespr\xE4ch."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ich habe die Datenschutzerkl\xE4rung gelesen und stimme der Verarbeitung meiner Daten zu."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    block: true,
    onClick: () => setSent(true)
  }, "Bewerbung Absenden \u2192"))))));
}
Object.assign(window, {
  ApplyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApplyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  StatTile,
  Avatar,
  Icon,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormNote,
  SiteHeader,
  SiteFooter,
  Hero,
  PageHeader,
  PrincipleCard,
  StepCard,
  EventCard,
  EventListItem,
  MemberCard,
  ProfileCard,
  FaqItem,
  Timeline,
  DataTable,
  Modal
} = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: tone === 'alt' ? 'var(--mbs-off)' : tone === 'navy' ? 'var(--mbs-navy)' : 'var(--mbs-white)',
    borderTop: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    borderBottom: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--mbs-content-max)',
    margin: '0 auto',
    padding: '80px var(--mbs-gutter)'
  }
}, children));
function ContactScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Kontakt",
    subtitle: "Wir freuen uns von dir zu h\xF6ren \u2014 egal ob Student/in, Unternehmen oder einfach neugierig."
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '600px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    label: "Allgemeiner Kontakt",
    title: "Schreib uns",
    desc: "F\xFCr allgemeine Anfragen erreichst du uns jederzeit per E-Mail oder \xFCber unsere Social-Media-Kan\xE4le."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '28px'
    }
  }, [['✉', 'info@munichbusinesssociety.com'], ['in', 'LinkedIn'], ['◎', 'Instagram']].map(([g, l]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '13px 22px',
      borderRadius: 'var(--mbs-r-sm)',
      background: 'var(--mbs-off)',
      border: '1px solid var(--mbs-border)',
      color: 'var(--mbs-navy)',
      fontSize: '13px',
      fontWeight: 500,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mbs-gold)',
      fontWeight: 700
    }
  }, g), l))))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "F\xFCr Studierende",
    title: "Du m\xF6chtest Mitglied werden?"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      lineHeight: 1.8,
      marginBottom: '20px'
    }
  }, "Du studierst an der Hochschule Fresenius M\xFCnchen und m\xF6chtest Teil der Munich Business Society werden? Wir freuen uns \xFCber dein Interesse!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.8,
      marginBottom: '28px'
    }
  }, "\xDCber unser Bewerbungsformular kannst du dich direkt f\xFCr die n\xE4chste Aufnahmerunde bewerben. Nach Eingang deiner Bewerbung melden wir uns bei dir, um ein kurzes Kennenlerngespr\xE4ch zu vereinbaren."), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    onClick: () => go('apply')
  }, "Zum Bewerbungsformular \u2192")), /*#__PURE__*/React.createElement(Card, {
    padding: "32px",
    hover: false
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '14px',
      margin: '0 0 16px'
    }
  }, "H\xE4ufige Fragen"), [['Wer kann sich bewerben?', 'In erster Linie Studierende wirtschaftlicher Studiengänge. Ausnahmen für andere Fachrichtungen sind nach Abstimmung möglich.'], ['Wann kann ich mich bewerben?', 'Bewerbungen sind in vierteljährlichen Aufnahmephasen möglich. Aktuelle Termine findest du auf unserer Events-Seite.'], ['Kostet die Mitgliedschaft etwas?', 'Die MBS ist eine Non-Profit-Initiative. Aktuell fallen keine Mitgliedsbeiträge an.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--mbs-navy)',
      margin: '0 0 4px'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      lineHeight: 1.6,
      margin: 0
    }
  }, a)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "F\xFCr Unternehmen & Organisationen",
    title: "Partnerschaft & Zusammenarbeit"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      lineHeight: 1.8,
      marginBottom: '20px'
    }
  }, "Sie m\xF6chten als Unternehmen mit der MBS zusammenarbeiten? Ob Sponsoring, Gastredner, Workshop-Kooperation oder Employer Branding am Campus \u2014 wir sind offen f\xFCr vielf\xE4ltige Partnerschaftsmodelle."), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    href: "mailto:info@munichbusinesssociety.com"
  }, "Kontakt aufnehmen \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, D.partnerOffers.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.title,
    tone: "navy",
    padding: "24px"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--mbs-white)',
      margin: '0 0 6px'
    }
  }, o.icon, " ", o.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--mbs-on-navy-50)',
      lineHeight: 1.6,
      margin: 0
    }
  }, o.text)))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventsScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  StatTile,
  Avatar,
  Icon,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormNote,
  SiteHeader,
  SiteFooter,
  Hero,
  PageHeader,
  PrincipleCard,
  StepCard,
  EventCard,
  EventListItem,
  MemberCard,
  ProfileCard,
  FaqItem,
  Timeline,
  DataTable,
  Modal
} = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: tone === 'alt' ? 'var(--mbs-off)' : tone === 'navy' ? 'var(--mbs-navy)' : 'var(--mbs-white)',
    borderTop: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    borderBottom: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--mbs-content-max)',
    margin: '0 auto',
    padding: '80px var(--mbs-gutter)'
  }
}, children));
function EventsScreen({
  openEvent
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Events & Programme",
    subtitle: "Eine kuratierte Mischung aus beruflicher Entwicklung, angewandtem Lernen und Gemeinschaftsaufbau."
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Unsere Formate",
    title: "Was wir bieten"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '20px'
    }
  }, D.formats.map(fm => /*#__PURE__*/React.createElement(EventCard, {
    key: fm.title,
    icon: fm.icon,
    title: fm.title,
    tags: fm.tags
  }, fm.text)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "N\xE4chste Termine",
    title: "Unsere kommenden Veranstaltungen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, D.events.map(e => /*#__PURE__*/React.createElement(EventListItem, {
    key: e.id,
    day: e.day,
    month: e.month,
    title: e.title,
    tag: e.tag,
    location: e.location,
    time: e.time,
    onClick: () => openEvent(e.id)
  }, e.teaser)))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Teilnahme",
    title: "Wer war dabei"
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'event',
      label: 'Veranstaltung'
    }, {
      key: 'format',
      label: 'Format'
    }, {
      key: 'seats',
      label: 'Plätze'
    }, {
      key: 'status',
      label: 'Status',
      align: 'right'
    }],
    rows: [{
      event: 'Launch-Event & Kick-Off',
      format: 'Workshop',
      seats: '60',
      status: /*#__PURE__*/React.createElement(Badge, {
        variant: "ok",
        dot: true
      }, "Best\xE4tigt")
    }, {
      event: 'Gastredner: Consulting',
      format: 'Speaker',
      seats: '40',
      status: /*#__PURE__*/React.createElement(Badge, {
        variant: "ok",
        dot: true
      }, "Best\xE4tigt")
    }, {
      event: 'Networking-Abend',
      format: 'Social',
      seats: '50',
      status: /*#__PURE__*/React.createElement(Badge, {
        variant: "warn",
        dot: true
      }, "Location offen")
    }, {
      event: 'CV & Bewerbungstraining',
      format: 'Workshop',
      seats: '30',
      status: /*#__PURE__*/React.createElement(Badge, {
        variant: "info",
        dot: true
      }, "In Planung")
    }]
  })));
}
Object.assign(window, {
  EventsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  StatTile,
  Avatar,
  Icon,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormNote,
  SiteHeader,
  SiteFooter,
  Hero,
  PageHeader,
  PrincipleCard,
  StepCard,
  EventCard,
  EventListItem,
  MemberCard,
  ProfileCard,
  FaqItem,
  Timeline,
  DataTable,
  Modal
} = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: tone === 'alt' ? 'var(--mbs-off)' : tone === 'navy' ? 'var(--mbs-navy)' : 'var(--mbs-white)',
    borderTop: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    borderBottom: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--mbs-content-max)',
    margin: '0 auto',
    padding: '80px var(--mbs-gutter)'
  }
}, children));
function HomeScreen({
  go,
  openEvent
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    lead: "Wo akademische Theorie auf reale Wirtschaft trifft. Der erste studentische Business-Club an der Hochschule Fresenius M\xFCnchen.",
    primary: {
      label: 'Jetzt Bewerben →',
      onClick: () => go('apply')
    },
    secondary: {
      label: 'Mehr Erfahren',
      onClick: () => go('about')
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '260px',
      background: 'var(--mbs-navy)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '26px',
      color: 'var(--mbs-white)',
      fontWeight: 600,
      margin: '0 0 6px'
    }
  }, "Hochschule Fresenius"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--mbs-on-navy-50)',
      margin: 0
    }
  }, "International Business School \xB7 Campus M\xFCnchen")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Wer wir sind",
    title: "Der erste studentische Business-Club an der Hochschule Fresenius M\xFCnchen"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      lineHeight: 1.8,
      marginBottom: '20px'
    }
  }, "Die Munich Business Society schlie\xDFt die L\xFCcke zwischen akademischer Theorie und beruflicher Praxis. Gegr\xFCndet 2026 von drei IBM-Studierenden, bietet die MBS eine Plattform f\xFCr angewandte Wirtschaftsbildung, Branchenaustausch und pers\xF6nliches Wachstum."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.8,
      marginBottom: '28px'
    }
  }, "Durch Gastredner, praxisnahe Workshops, Case Competitions und Networking-Events bereiten wir Studierende auf die Herausforderungen und Chancen der modernen Gesch\xE4ftswelt vor."), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    onClick: () => go('about')
  }, "Mehr \xDCber Uns \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '28px 40px'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "2026",
    label: "Gegr\xFCndet"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "3",
    label: "Gr\xFCnder",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "4",
    label: "Event-Formate"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "Q1\u2013Q4",
    label: "Aufnahmephasen",
    tone: "gold"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    label: "Gr\xFCnderteam",
    title: "Die Menschen hinter der MBS"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '28px',
      marginTop: '12px'
    }
  }, D.founders.map(p => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: p.name
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('about')
  }, "Unsere ganze Geschichte \u2192"))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '36px',
      flexWrap: 'wrap',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    divider: false,
    label: "Anstehende Events",
    title: "Was kommt als N\xE4chstes"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onNavy",
    onClick: () => go('events')
  }, "Alle Events \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px'
    }
  }, D.events.slice(0, 3).map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    onClick: () => openEvent(e.id),
    style: {
      background: 'var(--mbs-on-navy-fill)',
      border: '1px solid var(--mbs-on-navy-fill-hi)',
      borderRadius: 'var(--mbs-r)',
      padding: '28px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mbs-gold)',
      color: 'var(--mbs-navy)',
      padding: '8px 12px',
      borderRadius: 'var(--mbs-r-sm)',
      textAlign: 'center',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '18px',
      fontWeight: 800
    }
  }, e.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '9px',
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase'
    }
  }, e.month)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--mbs-gold)'
    }
  }, e.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '16px',
      fontWeight: 600,
      color: 'var(--mbs-white)',
      margin: '0 0 8px'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--mbs-on-navy-70)',
      lineHeight: 1.6,
      margin: '0 0 14px'
    }
  }, e.teaser), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      fontSize: '11px',
      color: 'var(--mbs-on-navy-50)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: "12px"
  }), e.location), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: "12px"
  }), e.time)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    label: "Wen suchen wir",
    title: "Bist du bereit, \xFCber dein Studium hinauszuwachsen?",
    desc: "Wir suchen engagierte Studierende, die wirtschaftliches Denken mit praktischem Handeln verbinden wollen. Du passt zu uns, wenn du:"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px'
    }
  }, D.profiles.map(p => /*#__PURE__*/React.createElement(ProfileCard, {
    key: p.title,
    icon: p.icon,
    title: p.title
  }, p.text)))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: 'var(--mbs-fs-h2)',
      fontWeight: 700,
      maxWidth: '500px',
      margin: '0 auto 18px'
    }
  }, "Bereit f\xFCr den n\xE4chsten Schritt?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      lineHeight: 1.8,
      maxWidth: '560px',
      margin: '0 auto 44px'
    }
  }, "Werde Teil einer Community ambitionierter Studierender und baue die F\xE4higkeiten, das Netzwerk und die Erfahrung auf, die z\xE4hlen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    onClick: () => go('apply')
  }, "Jetzt Bewerben \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('contact')
  }, "Kontakt Aufnehmen"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MembershipScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  StatTile,
  Avatar,
  Icon,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormNote,
  SiteHeader,
  SiteFooter,
  Hero,
  PageHeader,
  PrincipleCard,
  StepCard,
  EventCard,
  EventListItem,
  MemberCard,
  ProfileCard,
  FaqItem,
  Timeline,
  DataTable,
  Modal
} = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: tone === 'alt' ? 'var(--mbs-off)' : tone === 'navy' ? 'var(--mbs-navy)' : 'var(--mbs-white)',
    borderTop: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    borderBottom: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--mbs-content-max)',
    margin: '0 auto',
    padding: '80px var(--mbs-gutter)'
  }
}, children));
function MembershipScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Mitgliedschaft",
    subtitle: "Werde Teil einer Community ambitionierter, wirtschaftsbegeisterter Studierender an der Hochschule Fresenius."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Wie es funktioniert",
    title: "Bewerbungsprozess",
    desc: "Die MBS steht in erster Linie Studierenden wirtschaftlicher Studieng\xE4nge offen. Studierende anderer Fachrichtungen k\xF6nnen nach individueller Abstimmung ebenfalls aufgenommen werden."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '20px',
      marginTop: '12px'
    }
  }, D.steps.map(s => /*#__PURE__*/React.createElement(StepCard, {
    key: s.n,
    number: s.n,
    title: s.title
  }, s.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      textAlign: 'center',
      padding: '36px',
      borderRadius: 'var(--mbs-r)',
      background: 'var(--mbs-gold-dim)',
      border: '1px solid var(--mbs-gold-border)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.7,
      maxWidth: '480px',
      margin: '0 auto 20px'
    }
  }, "Unser Prozess dient nicht dem Ausschluss \u2014 sondern dem Commitment. Jedes Mitglied ist wirklich engagiert und sch\xFCtzt so die Qualit\xE4t der Community f\xFCr alle."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => go('apply')
  }, "Jetzt Bewerben \u2192"))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    label: "FAQ",
    title: "H\xE4ufig gestellte Fragen",
    style: {
      marginBottom: '48px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '760px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, D.faq.map((item, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: item.q,
    question: item.q,
    defaultOpen: i === 0
  }, item.a)))));
}
Object.assign(window, {
  MembershipScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MembershipScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PartnersScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SectionHeading,
  StatTile,
  Avatar,
  Icon,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  FormNote,
  SiteHeader,
  SiteFooter,
  Hero,
  PageHeader,
  PrincipleCard,
  StepCard,
  EventCard,
  EventListItem,
  MemberCard,
  ProfileCard,
  FaqItem,
  Timeline,
  DataTable,
  Modal
} = window.MBSDesignSystem_f206f7;
const D = window.MBS_DATA;
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: tone === 'alt' ? 'var(--mbs-off)' : tone === 'navy' ? 'var(--mbs-navy)' : 'var(--mbs-white)',
    borderTop: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    borderBottom: tone === 'alt' ? '1px solid var(--mbs-border)' : undefined,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--mbs-content-max)',
    margin: '0 auto',
    padding: '80px var(--mbs-gutter)'
  }
}, children));
function PartnersScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Unsere Partner",
    subtitle: "Zusammenarbeit mit f\xFChrenden Unternehmen, um reale Chancen f\xFCr unsere Mitglieder zu schaffen."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    label: "Unternehmenspartner",
    title: "Unternehmen, mit denen wir zusammenarbeiten",
    desc: "Wir kooperieren mit f\xFChrenden Unternehmen, um reale Einblicke, Sponsoring und M\xF6glichkeiten direkt an unsere Mitglieder zu bringen."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '20px',
      marginTop: '8px'
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: '96px',
      borderRadius: 'var(--mbs-r)',
      border: '1px dashed var(--mbs-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--mbs-off)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--mbs-gray-light)'
    }
  }, "Partnerlogo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '44px',
      textAlign: 'center',
      padding: '48px',
      borderRadius: 'var(--mbs-r-lg)',
      background: 'var(--mbs-navy)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--mbs-font-serif)',
      fontSize: '22px',
      color: 'var(--mbs-white)',
      margin: '0 0 10px'
    }
  }, "Partner werden"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      color: 'var(--mbs-on-navy-50)',
      lineHeight: 1.7,
      maxWidth: '460px',
      margin: '0 auto 24px'
    }
  }, "Gezielter Zugang zu motivierten Business-Studierenden an der Hochschule Fresenius M\xFCnchen. Events sponsern, Workshops veranstalten oder Ihre Arbeitgebermarke am Campus st\xE4rken."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => go('contact')
  }, "Kontakt Aufnehmen \u2192"))));
}
Object.assign(window, {
  PartnersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PartnersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.MBS_DATA = {
  nav: [{
    id: 'home',
    label: 'Startseite'
  }, {
    id: 'about',
    label: 'Über Uns'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'membership',
    label: 'Mitgliedschaft'
  }, {
    id: 'partners',
    label: 'Partner'
  }, {
    id: 'contact',
    label: 'Kontakt'
  }],
  founders: [{
    name: 'Martijn Mooren',
    role: 'Mitgründer',
    initials: 'MM',
    description: 'Finanzen & Administration'
  }, {
    name: 'Nicholas Porter',
    role: 'Mitgründer',
    initials: 'NP',
    description: 'Eventmanagement & Unternehmenskooperationen'
  }, {
    name: 'Lennart Neumeier',
    role: 'Mitgründer',
    initials: 'LN',
    description: 'Marketing & Kommunikation'
  }],
  principles: [{
    icon: '💼',
    title: 'Wirtschaftliches Denken',
    text: 'Förderung von ökonomischer Kompetenz und Eigeninitiative.'
  }, {
    icon: '🌐',
    title: 'Branchenaustausch',
    text: 'Brücken bauen zwischen Studierenden und der Wirtschaft.'
  }, {
    icon: '📈',
    title: 'Kompetenzentwicklung',
    text: 'Fachliche und soziale Fähigkeiten ausbauen.'
  }, {
    icon: '🏛️',
    title: 'Campus-Kultur',
    text: 'Beitrag zu einer lebendigen, praxisorientierten Hochschulkultur.'
  }],
  values: [{
    icon: '🚀',
    title: 'Ambition',
    text: 'Unser Ziel ist es, die Munich Business Society zur festen Institution an der Hochschule Fresenius zu machen – eine Brücke zwischen akademischer Theorie und beruflicher Praxis.'
  }, {
    icon: '🤝',
    title: 'Gemeinschaft',
    text: 'Bei der MBS steht der Mensch im Mittelpunkt: Wir schaffen einen Ort, an dem Ideen entstehen, Freundschaften wachsen und echte Karrierechancen eröffnet werden.'
  }, {
    icon: '⚖️',
    title: 'Verantwortung',
    text: 'Wir fordern und fördern Verantwortung. Unsere Mission ist es, die nächsten Generationen von Leadern darauf vorzubereiten, Verantwortung in Wirtschaft und Gesellschaft zu übernehmen.'
  }],
  formats: [{
    icon: '🎤',
    title: 'Gastredner-Reihe',
    text: 'Branchenführer teilen Karriere-Einblicke, Markttrends und praktische Ratschläge für den Berufseinstieg.',
    tags: ['Branchen-Spotlights', 'Karrierewege']
  }, {
    icon: '⚡',
    title: 'Skill-Workshops',
    text: 'Praxisnahe Sessions zu Hard und Soft Skills — von Financial Modeling bis Personal Branding — geleitet von Peers, Experten und Unternehmenspartnern.',
    tags: ['Hard Skills', 'Soft Skills', 'Karrierevorbereitung']
  }, {
    icon: '🏆',
    title: 'Wettbewerbe & Fallstudien',
    text: 'Theorie unter Druck anwenden. Simulierte Business-Challenges, die strategisches Denken und Präsentationsfähigkeiten fördern.',
    tags: ['Case Competitions', 'Angewandtes Lernen']
  }, {
    icon: '🤝',
    title: 'Networking & Socials',
    text: 'Kontakte zu Branchenprofis bei kuratierten Events knüpfen und Freundschaften bei entspannten Treffen aufbauen.',
    tags: ['Networking-Events', 'Social Nights']
  }],
  events: [{
    id: 'launch',
    day: '15',
    month: 'Mai',
    tag: 'Workshop',
    title: 'Launch-Event & Kick-Off',
    teaser: 'Unser offizielles Launch-Event. Lernt die Gründer kennen, erfahrt mehr über die MBS und vernetzt euch mit anderen Studierenden.',
    location: 'Campus München',
    time: '18:00 Uhr',
    about: 'Das offizielle Launch-Event der Munich Business Society markiert den Beginn einer neuen Ära studentischer Business-Kultur an der Hochschule Fresenius München. An diesem Abend stellen wir unsere Vision, unsere Werte und unser Programm für das kommende Semester vor.',
    expect: 'Eine inspirierende Keynote der Gründer über die Entstehung und Zukunft der MBS, eine offene Q&A-Runde, interaktive Networking-Sessions mit Gleichgesinnten und ein erstes Kennenlernen der Community bei Getränken und Snacks.',
    audience: 'Alle Studierenden der Hochschule Fresenius München, die sich für Wirtschaft, Karriereentwicklung und eine aktive Campus-Community interessieren.',
    capacity: 'Begrenzt auf 60 Plätze',
    price: 'Kostenlos',
    date: '15. Mai 2026'
  }, {
    id: 'consulting',
    day: '29',
    month: 'Mai',
    tag: 'Speaker',
    title: 'Gastredner: Karrierewege im Consulting',
    teaser: 'Ein Branchenexperte teilt Einblicke zum Einstieg ins Management Consulting und zum Aufbau einer erfolgreichen Karriere.',
    location: 'Campus München',
    time: '17:30 Uhr',
    about: 'In dieser exklusiven Speaker-Session gibt ein erfahrener Management-Consultant Einblicke in die Welt der Unternehmensberatung — von den ersten Schritten im Bewerbungsprozess bis hin zu den Realitäten des Beratungsalltags.',
    expect: 'Ein 45-minütiger Impulsvortrag über Karrierepfade im Consulting, gefolgt von einer interaktiven Fragerunde.',
    audience: 'Studierende, die eine Karriere in der Unternehmensberatung anstreben oder sich für strategisches Denken und Problemlösung interessieren.',
    capacity: 'Begrenzt auf 40 Plätze',
    price: 'Kostenlos für MBS-Mitglieder',
    date: '29. Mai 2026'
  }, {
    id: 'networking',
    day: '12',
    month: 'Jun',
    tag: 'Social',
    title: 'Networking-Abend: Summer Edition',
    teaser: 'Lockeres Networking mit Mitgliedern und Branchenprofis in entspannter Atmosphäre.',
    location: 'München',
    time: '19:00 Uhr',
    about: 'Unser erster Networking-Abend bringt MBS-Mitglieder, Alumni und Branchenprofis in einer entspannten Atmosphäre zusammen.',
    expect: 'Ein lockerer Abend mit strukturierten Networking-Runden, informellen Gesprächen und der Möglichkeit, Kontakte zu Profis aus verschiedenen Branchen zu knüpfen.',
    audience: 'Aktive MBS-Mitglieder und eingeladene Gäste aus der Wirtschaft.',
    capacity: 'Begrenzt auf 50 Plätze',
    price: 'Kostenlos für MBS-Mitglieder',
    date: '12. Juni 2026'
  }, {
    id: 'cv',
    day: '26',
    month: 'Jun',
    tag: 'Workshop',
    title: 'Workshop: CV & Bewerbungstraining',
    teaser: 'Praxisnahes Training rund um Lebenslauf, Anschreiben und Bewerbungsgespräche — mit Tipps von erfahrenen Recruitern.',
    location: 'Campus München',
    time: '16:00 Uhr',
    about: 'In diesem praxisorientierten Workshop lernst du, wie du deinen Lebenslauf optimierst, ein überzeugendes Anschreiben verfasst und im Bewerbungsgespräch selbstbewusst auftrittst.',
    expect: 'Hands-on-Sessions zu CV-Optimierung und Anschreiben, eine Mock-Interview-Runde mit individuellem Feedback, Best Practices für LinkedIn-Profile.',
    audience: 'Alle Studierenden, die sich auf Praktika, Werkstudentenstellen oder den Berufseinstieg vorbereiten möchten.',
    capacity: 'Begrenzt auf 30 Plätze',
    price: 'Kostenlos für MBS-Mitglieder',
    date: '26. Juni 2026'
  }],
  profiles: [{
    icon: '🎯',
    title: 'Eigeninitiative zeigst',
    text: 'Du wartest nicht auf Gelegenheiten — du schaffst sie selbst. Du bist bereit, Verantwortung zu übernehmen und aktiv zum Clubleben beizutragen.'
  }, {
    icon: '💡',
    title: 'Neugierig & lernbereit bist',
    text: 'Du interessierst dich für Wirtschaft, Märkte und Karrierewege über den Vorlesungsstoff hinaus. Du willst wachsen — fachlich und persönlich.'
  }, {
    icon: '🤝',
    title: 'Teamgeist mitbringst',
    text: 'Du schätzt den Austausch mit Gleichgesinnten, teilst dein Wissen gern und möchtest Teil einer aktiven, unterstützenden Community sein.'
  }],
  steps: [{
    n: '1',
    title: 'Bewerben',
    text: 'Bewerbung während einer unserer vierteljährlichen Bewerbungsphasen einreichen.'
  }, {
    n: '2',
    title: 'Gespräch',
    text: 'Ein kurzes Kennenlerngespräch mit einem Vorstandsmitglied.'
  }, {
    n: '3',
    title: 'Vorstandsbeschluss',
    text: 'Aufnahme im Einvernehmen mit dem Gründervorstand.'
  }, {
    n: '4',
    title: 'Willkommen',
    text: 'Werde Teil der Community, besuche Events und wachse mit uns.'
  }],
  faq: [{
    q: 'Wer kann sich bei der MBS bewerben?',
    a: 'Die MBS steht in erster Linie Studierenden wirtschaftlicher Studiengänge an der Hochschule Fresenius München offen, darunter IBM, BWL, Wirtschaftspsychologie, Wirtschaftsrecht, Immobilienwirtschaft und Sportmanagement. Studierende anderer Fachrichtungen können nach individueller Abstimmung ebenfalls aufgenommen werden.'
  }, {
    q: 'Wann finden die Bewerbungsphasen statt?',
    a: 'Wir nehmen neue Mitglieder in vierteljährlichen Aufnahmephasen auf (Q1, Q2, Q3, Q4). Die genauen Termine werden rechtzeitig auf unserer Website und über unsere Social-Media-Kanäle bekannt gegeben.'
  }, {
    q: 'Kostet die Mitgliedschaft etwas?',
    a: 'Die MBS ist eine Non-Profit-Initiative. Aktuell fallen keine Mitgliedsbeiträge an. Unsere Veranstaltungen und Programme werden durch universitäre Fördermittel, Unternehmenspartnerschaften und externe Förderungen finanziert.'
  }, {
    q: 'Muss ich an jedem Event teilnehmen?',
    a: 'Nein, wir erwarten keine Teilnahme an allen Events. Wir setzen jedoch auf eine Mindestanwesenheit von zwei Veranstaltungen pro Semester, um sicherzustellen, dass die Community aktiv und lebendig bleibt.'
  }],
  partnerOffers: [{
    icon: '🎤',
    title: 'Gastredner stellen',
    text: 'Teilen Sie Ihre Expertise mit ambitionierten Studierenden in unserer Speaker-Reihe.'
  }, {
    icon: '⚡',
    title: 'Workshops veranstalten',
    text: 'Bieten Sie praxisnahe Trainings an und lernen Sie potenzielle Nachwuchstalente kennen.'
  }, {
    icon: '🤝',
    title: 'Event-Sponsoring',
    text: 'Positionieren Sie Ihre Marke vor einer gezielten Zielgruppe wirtschaftsinteressierter Studierender.'
  }, {
    icon: '🎯',
    title: 'Employer Branding',
    text: 'Stärken Sie Ihre Arbeitgebermarke direkt am Campus und gewinnen Sie Top-Talente frühzeitig.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FormNote = __ds_scope.FormNote;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.EventListItem = __ds_scope.EventListItem;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.MemberCard = __ds_scope.MemberCard;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.PrincipleCard = __ds_scope.PrincipleCard;

__ds_ns.ProfileCard = __ds_scope.ProfileCard;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Timeline = __ds_scope.Timeline;

})();
