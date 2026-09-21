/* @ds-bundle: {"format":4,"namespace":"PlayersoftDesignSystem_7bdeae","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/display/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"StatTile","sourcePath":"components/display/StatTile.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"TierBadge","sourcePath":"components/display/TierBadge.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Avatar.jsx":"3c9d5d291530","components/display/Badge.jsx":"dcc9af003e2a","components/display/Card.jsx":"2e9966dfdf22","components/display/ProgressBar.jsx":"a7d8270e0a0c","components/display/StatTile.jsx":"d75ba8dfa34e","components/display/Tag.jsx":"657dede96040","components/display/TierBadge.jsx":"7f161b7e6e4e","components/feedback/Alert.jsx":"04fb0347789c","components/feedback/Dialog.jsx":"4c1f73a9771b","components/forms/Button.jsx":"3a9e12c4c941","components/forms/Checkbox.jsx":"9a5514fc101a","components/forms/IconButton.jsx":"4dd4691be525","components/forms/Input.jsx":"9cc4102f1705","components/forms/Select.jsx":"7e77a56634fc","components/forms/Switch.jsx":"194074d4af55","components/navigation/Tabs.jsx":"ff9f58475d75","ui_kits/console/ConsoleApp.jsx":"5f9a76c006c5","ui_kits/console/DashboardScreen.jsx":"892c417a6f82","ui_kits/console/PlayersScreen.jsx":"5441bcfe248f","ui_kits/console/PromotionsScreen.jsx":"f6a6f24edd14","ui_kits/console/Sidebar.jsx":"2edafe6ead17","ui_kits/console/Topbar.jsx":"1e7baa0b3bf4","ui_kits/console/icons.jsx":"30694b1e02a2","ui_kits/floor-app/EnrollScreen.jsx":"dfeae96017a7","ui_kits/floor-app/FloorApp.jsx":"873cbbe3e3f8","ui_kits/floor-app/LookupScreen.jsx":"bea498b6573b","ui_kits/floor-app/ProfileScreen.jsx":"27739a3bb978","ui_kits/floor-app/icons.jsx":"30694b1e02a2","ui_kits/floor-app/ios-frame.jsx":"24642b887be3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PlayersoftDesignSystem_7bdeae = window.PlayersoftDesignSystem_7bdeae || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 28,
  md: 40,
  lg: 56
};
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '?';
}
function Avatar({
  name = '',
  src,
  size = 'md',
  tier,
  style
}) {
  const px = SIZES[size] || SIZES.md;
  const ring = tier ? {
    Bronze: '#b07a4a',
    Silver: '#9aa6b2',
    Gold: '#d6a636',
    Platinum: 'var(--aqua-500)',
    Diamond: 'var(--cyan-100)'
  }[tier] : null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--gradient-navy)',
      color: 'var(--cyan-50)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: px * 0.38,
      boxShadow: ring ? `0 0 0 2px var(--surface-card), 0 0 0 4px ${ring}` : 'none',
      overflow: 'hidden',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)',
    dot: 'var(--gray-500)'
  },
  primary: {
    bg: 'var(--cyan-50)',
    fg: 'var(--navy-700)',
    dot: 'var(--navy-500)'
  },
  accent: {
    bg: 'var(--cyan-100)',
    fg: 'var(--aqua-800)',
    dot: 'var(--aqua-600)'
  },
  success: {
    bg: 'var(--color-success-soft)',
    fg: 'var(--green-600)',
    dot: 'var(--green-500)'
  },
  warning: {
    bg: 'var(--color-warning-soft)',
    fg: 'var(--amber-600)',
    dot: 'var(--amber-500)'
  },
  danger: {
    bg: 'var(--color-danger-soft)',
    fg: 'var(--red-600)',
    dot: 'var(--red-500)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  solid = false,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  const solidBg = {
    neutral: 'var(--gray-600)',
    primary: 'var(--navy-700)',
    accent: 'var(--aqua-600)',
    success: 'var(--green-500)',
    warning: 'var(--amber-500)',
    danger: 'var(--red-500)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? solidBg[tone] : t.bg,
      color: solid ? '#fff' : t.fg,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'rgba(255,255,255,.85)' : t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 'md',
  interactive = false,
  elevated = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      boxShadow: hover ? 'var(--shadow-md)' : elevated ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      cursor: interactive ? 'pointer' : 'default',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
function CardHeader({
  title,
  subtitle,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action));
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  tone = 'primary',
  size = 'md',
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    primary: 'var(--color-primary)',
    accent: 'var(--gradient-aqua)',
    success: 'var(--color-success)'
  }[tone] || 'var(--color-primary)';
  const h = size === 'sm' ? 6 : size === 'lg' ? 12 : 8;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: h,
      background: 'var(--gray-200)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-emphasized)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/StatTile.jsx
try { (() => {
function StatTile({
  label,
  value,
  unit,
  delta,
  deltaTone = 'auto',
  icon,
  style
}) {
  const positive = typeof delta === 'string' ? delta.trim().startsWith('+') : delta > 0;
  const tone = deltaTone === 'auto' ? positive ? 'success' : 'danger' : deltaTone;
  const deltaColor = {
    success: 'var(--green-600)',
    danger: 'var(--red-600)',
    neutral: 'var(--text-muted)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--aqua-600)'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h2)',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: deltaColor
    }
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  icon,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: hover ? 'var(--gray-200)' : 'transparent',
      color: 'var(--text-muted)',
      width: 16,
      height: 16,
      borderRadius: '50%',
      cursor: 'pointer',
      padding: 0,
      marginRight: -2,
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/TierBadge.jsx
try { (() => {
const TIERS = {
  Bronze: {
    bg: 'linear-gradient(135deg,#c08a5a,#8a5a34)',
    fg: '#fff'
  },
  Silver: {
    bg: 'linear-gradient(135deg,#c6cfd8,#93a0ad)',
    fg: 'var(--navy-900)'
  },
  Gold: {
    bg: 'linear-gradient(135deg,#e8c25a,#c99a2e)',
    fg: 'var(--navy-900)'
  },
  Platinum: {
    bg: 'linear-gradient(135deg,#1cc0db,#007a99)',
    fg: 'var(--navy-900)'
  },
  Diamond: {
    bg: 'linear-gradient(135deg,#ebffff,#92e4f2)',
    fg: 'var(--navy-800)'
  }
};
function TierBadge({
  tier = 'Bronze',
  size = 'md',
  style
}) {
  const t = TIERS[tier] || TIERS.Bronze;
  const sizing = size === 'sm' ? {
    fontSize: 'var(--text-2xs)',
    padding: '3px 9px'
  } : size === 'lg' ? {
    fontSize: 'var(--text-sm)',
    padding: '7px 16px'
  } : {
    fontSize: 'var(--text-xs)',
    padding: '5px 12px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      boxShadow: 'var(--shadow-xs)',
      ...sizing,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"
  })), tier);
}
Object.assign(__ds_scope, { TierBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TierBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--color-info-soft)',
    border: 'var(--aqua-300)',
    fg: 'var(--aqua-800)',
    icon: 'var(--aqua-600)'
  },
  success: {
    bg: 'var(--color-success-soft)',
    border: 'var(--green-500)',
    fg: 'var(--green-600)',
    icon: 'var(--green-500)'
  },
  warning: {
    bg: 'var(--color-warning-soft)',
    border: 'var(--amber-500)',
    fg: 'var(--amber-600)',
    icon: 'var(--amber-500)'
  },
  danger: {
    bg: 'var(--color-danger-soft)',
    border: 'var(--red-500)',
    fg: 'var(--red-600)',
    icon: 'var(--red-500)'
  }
};
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })
};
function Alert({
  tone = 'info',
  title,
  children,
  onClose,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      background: t.bg,
      borderLeft: `3px solid ${t.border}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      color: t.icon,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, tone === 'info' && /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      color: t.fg,
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      color: t.fg,
      cursor: 'pointer',
      padding: 2,
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 460
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,18,34,0.55)',
      backdropFilter: 'blur(3px)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      animation: 'ps-dialog-in var(--dur-base) var(--ease-emphasized)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ps-dialog-in{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: 2,
      display: 'inline-flex',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.55
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-1)'
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-primary-hover)',
    '--active-bg': 'var(--color-primary-active)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--color-on-accent)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-accent-hover)',
    '--active-bg': 'var(--aqua-800)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--color-primary)',
    border: '1px solid var(--border-default)',
    '--hover-bg': 'var(--gray-50)',
    '--active-bg': 'var(--gray-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--cyan-50)',
    '--active-bg': 'var(--cyan-100)'
  },
  danger: {
    background: 'var(--color-danger)',
    color: '#fff',
    border: '1px solid transparent',
    '--hover-bg': 'var(--red-600)',
    '--active-bg': 'var(--red-600)'
  }
};
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 14px',
    fontSize: 'var(--text-sm)',
    radius: 'var(--radius-sm)',
    gap: '6px'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 18px',
    fontSize: 'var(--text-base)',
    radius: 'var(--radius-sm)',
    gap: '8px'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 24px',
    fontSize: 'var(--text-lg)',
    radius: 'var(--radius-md)',
    gap: '10px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled ? undefined : active ? v['--active-bg'] : hover ? v['--hover-bg'] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: s.fontSize,
      height: s.height,
      padding: s.padding,
      borderRadius: s.radius,
      background: bg || v.background,
      color: v.color,
      border: v.border,
      width: fullWidth ? '100%' : undefined,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transform: active && !disabled ? 'translateY(0.5px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const cbId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--cyan-50)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: '32px',
    icon: 16,
    radius: 'var(--radius-sm)'
  },
  md: {
    box: '40px',
    icon: 18,
    radius: 'var(--radius-sm)'
  },
  lg: {
    box: '48px',
    icon: 22,
    radius: 'var(--radius-md)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    hover: 'var(--color-primary-hover)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--color-on-accent)',
    hover: 'var(--color-accent-hover)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--color-primary)',
    border: '1px solid var(--border-default)',
    hover: 'var(--gray-50)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--gray-600)',
    hover: 'var(--gray-100)'
  }
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  'aria-label': ariaLabel,
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      borderRadius: s.radius,
      background: disabled ? v.background : hover ? v.hover : v.background,
      color: v.color,
      border: v.border || '1px solid transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      flexShrink: 0,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  id,
  disabled = false,
  required = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const inputId = id || autoId;
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const fontSizes = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
  };
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--color-accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: heights[size],
      padding: '0 12px',
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: fontSizes[size],
      color: 'var(--text-body)',
      minWidth: 0,
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  size = 'md',
  id,
  disabled = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const selId = id || autoId;
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const fontSizes = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
  };
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--color-accent)' : 'var(--border-default)';
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: heights[size],
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--gray-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: fontSizes[size],
      color: 'var(--text-body)',
      padding: '0 36px 0 12px',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = 'md',
  id,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const swId = id || autoId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === 'sm' ? {
    w: 36,
    h: 20,
    k: 14
  } : {
    w: 44,
    h: 24,
    k: 18
  };
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: dims.w,
      height: dims.h,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--gray-300)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-emphasized)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: pill ? 4 : 4,
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      padding: pill ? 4 : 0,
      borderRadius: pill ? 'var(--radius-md)' : 0,
      ...style
    }
  }, tabs.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.value),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-sm)',
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        padding: pill ? '7px 14px' : '10px 14px',
        color: on ? pill ? 'var(--navy-700)' : 'var(--color-primary)' : 'var(--text-muted)',
        background: pill && on ? 'var(--surface-card)' : 'transparent',
        borderRadius: pill ? 'var(--radius-sm)' : 0,
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        transition: 'color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)'
      }
    }, t.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex'
      }
    }, t.icon), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        background: on ? 'var(--cyan-100)' : 'var(--gray-200)',
        color: on ? 'var(--navy-800)' : 'var(--text-muted)',
        borderRadius: 'var(--radius-pill)',
        padding: '1px 7px'
      }
    }, t.count), !pill && on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2.5,
        background: 'var(--color-accent)',
        borderRadius: '2px 2px 0 0'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleApp.jsx
try { (() => {
function ConsoleApp() {
  const Icon = window.PSIcon;
  const [screen, setScreen] = React.useState('dashboard');
  const Sidebar = window.PSSidebar,
    Topbar = window.PSTopbar;
  const meta = {
    dashboard: {
      title: 'Dashboard',
      subtitle: 'Bellagio Property · Live'
    },
    players: {
      title: 'Players',
      subtitle: '4,281 active members'
    },
    promotions: {
      title: 'Promotions',
      subtitle: 'Campaign manager'
    },
    rewards: {
      title: 'Rewards',
      subtitle: 'Catalog & redemptions'
    },
    reports: {
      title: 'Reports',
      subtitle: 'Analytics & exports'
    }
  }[screen];
  let Body;
  if (screen === 'dashboard') Body = window.PSDashboardScreen;else if (screen === 'players') Body = window.PSPlayersScreen;else if (screen === 'promotions') Body = window.PSPromotionsScreen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: screen,
    onNavigate: setScreen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: meta.title,
    subtitle: meta.subtitle
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, Body ? /*#__PURE__*/React.createElement(Body, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'var(--text-muted)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: screen === 'rewards' ? 'gift' : 'chart',
    size: 40,
    color: "var(--gray-400)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, meta.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, "Screen not included in this UI-kit sample.")))));
}
window.PSConsoleApp = ConsoleApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/DashboardScreen.jsx
try { (() => {
function DashboardScreen() {
  const Icon = window.PSIcon;
  const {
    StatTile,
    Card,
    CardHeader,
    Badge,
    TierBadge,
    Avatar,
    ProgressBar,
    Button
  } = window.PlayersoftDesignSystem_7bdeae;
  const promos = [{
    name: 'Weekend Free Play',
    tone: 'success',
    status: 'Live',
    enrolled: '2,140',
    redeemed: 68
  }, {
    name: 'Platinum Dining Comp',
    tone: 'success',
    status: 'Live',
    enrolled: '412',
    redeemed: 41
  }, {
    name: 'New Member 2X Points',
    tone: 'warning',
    status: 'Ending soon',
    enrolled: '883',
    redeemed: 22
  }];
  const players = [{
    name: 'Marcus Reed',
    tier: 'Platinum',
    pts: '128,450',
    trend: '+2,340'
  }, {
    name: 'Elena Vasquez',
    tier: 'Diamond',
    pts: '341,900',
    trend: '+5,120'
  }, {
    name: 'Raymond Foss',
    tier: 'Gold',
    pts: '76,210',
    trend: '+890'
  }, {
    name: 'Priya Nair',
    tier: 'Gold',
    pts: '64,880',
    trend: '+1,020'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Active players",
    value: "4,281",
    delta: "+12.4%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Points issued (30d)",
    value: "8.4M",
    unit: "pts",
    delta: "+6.1%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "coins",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Reward liability",
    value: "$284K",
    delta: "-3.1%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Redemption rate",
    value: "47%",
    delta: "+2.8%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trend",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Live promotions",
    subtitle: "3 running \xB7 1 ending soon",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronRight",
        size: 16
      })
    }, "Manage"),
    style: {
      marginBottom: 0
    }
  })), /*#__PURE__*/React.createElement("div", null, promos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 24px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    dot: true
  }, p.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, p.enrolled, " enrolled")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: p.redeemed,
    showValue: true,
    tone: "accent",
    size: "sm"
  })))))), /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Top players",
    subtitle: "By points this week",
    style: {
      marginBottom: 0
    }
  })), players.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 24px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    tier: p.tier,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, p.pts, " pts")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--green-600)'
    }
  }, p.trend))))));
}
window.PSDashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/PlayersScreen.jsx
try { (() => {
function PlayersScreen() {
  const Icon = window.PSIcon;
  const {
    Tabs,
    Tag,
    Badge,
    TierBadge,
    Avatar,
    Button,
    ProgressBar,
    Dialog,
    IconButton
  } = window.PlayersoftDesignSystem_7bdeae;
  const [tab, setTab] = React.useState('all');
  const [sel, setSel] = React.useState(null);
  const all = [{
    name: 'Elena Vasquez',
    id: 'PS-1180-4472',
    tier: 'Diamond',
    pts: '341,900',
    visit: '2h ago',
    seg: ['VIP'],
    next: 'Diamond',
    prog: 100
  }, {
    name: 'Marcus Reed',
    id: 'PS-4471-9082',
    tier: 'Platinum',
    pts: '128,450',
    visit: 'Today',
    seg: ['VIP', 'Weekend'],
    next: 'Diamond',
    prog: 86
  }, {
    name: 'Priya Nair',
    id: 'PS-3092-1145',
    tier: 'Gold',
    pts: '64,880',
    visit: 'Yesterday',
    seg: ['Weekend'],
    next: 'Platinum',
    prog: 54
  }, {
    name: 'Raymond Foss',
    id: 'PS-7741-2210',
    tier: 'Gold',
    pts: '76,210',
    visit: '3d ago',
    seg: ['At-risk'],
    next: 'Platinum',
    prog: 63
  }, {
    name: 'Dana Whitfield',
    id: 'PS-5521-8830',
    tier: 'Silver',
    pts: '28,400',
    visit: '1w ago',
    seg: ['At-risk'],
    next: 'Gold',
    prog: 38
  }, {
    name: 'Owen Bright',
    id: 'PS-6610-3345',
    tier: 'Bronze',
    pts: '9,120',
    visit: '2w ago',
    seg: [],
    next: 'Silver',
    prog: 22
  }];
  const rows = tab === 'all' ? all : tab === 'vip' ? all.filter(p => p.seg.includes('VIP')) : all.filter(p => p.seg.includes('At-risk'));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'all',
      label: 'All players',
      count: all.length
    }, {
      value: 'vip',
      label: 'VIP',
      count: all.filter(p => p.seg.includes('VIP')).length
    }, {
      value: 'atrisk',
      label: 'At-risk',
      count: all.filter(p => p.seg.includes('At-risk')).length
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "filter",
      size: 15
    })
  }, "Filter"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })
  }, "Enroll player"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1.2fr 1.4fr 1fr 40px',
      gap: 12,
      padding: '12px 20px',
      background: 'var(--surface-sunken)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Player"), /*#__PURE__*/React.createElement("span", null, "Tier"), /*#__PURE__*/React.createElement("span", null, "Points"), /*#__PURE__*/React.createElement("span", null, "Segments"), /*#__PURE__*/React.createElement("span", null, "Last visit"), /*#__PURE__*/React.createElement("span", null)), rows.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => setSel(p),
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1.2fr 1.4fr 1fr 40px',
      gap: 12,
      padding: '14px 20px',
      borderTop: '1px solid var(--border-subtle)',
      alignItems: 'center',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--gray-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    tier: p.tier,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, p.id))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TierBadge, {
    tier: p.tier,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, p.pts), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, p.seg.length ? p.seg.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    style: {
      padding: '2px 8px',
      fontSize: 12
    }
  }, s)) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "\u2014")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, p.visit), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 16
    }),
    variant: "ghost",
    size: "sm",
    "aria-label": "Open"
  })))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!sel,
    onClose: () => setSel(null),
    width: 440,
    title: sel?.name,
    description: sel ? `${sel.id} · member since 2021` : '',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSel(null)
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "gift",
        size: 16
      })
    }, "Issue reward"))
  }, sel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: sel.name,
    tier: sel.tier,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TierBadge, {
    tier: sel.tier
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--navy-700)',
      marginTop: 6
    }
  }, sel.pts, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "pts")))), /*#__PURE__*/React.createElement(ProgressBar, {
    label: `Progress to ${sel.next}`,
    value: sel.prog,
    showValue: true,
    tone: "accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, sel.seg.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)), !sel.seg.length && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "No segments assigned")))));
}
window.PSPlayersScreen = PlayersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/PlayersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/PromotionsScreen.jsx
try { (() => {
function PromotionsScreen() {
  const Icon = window.PSIcon;
  const {
    Card,
    Badge,
    Button,
    Switch,
    Input,
    Select,
    Checkbox,
    Dialog,
    Alert
  } = window.PlayersoftDesignSystem_7bdeae;
  const [open, setOpen] = React.useState(false);
  const [flash, setFlash] = React.useState(false);
  const [promos, setPromos] = React.useState([{
    name: 'Weekend Free Play',
    type: 'Free play',
    audience: 'All active',
    live: true,
    reward: '$25 free play',
    ends: 'Sun 11:59 PM'
  }, {
    name: 'Platinum Dining Comp',
    type: 'Comp',
    audience: 'Platinum+',
    live: true,
    reward: '$250 dining',
    ends: 'Ongoing'
  }, {
    name: 'New Member 2X Points',
    type: 'Multiplier',
    audience: 'Enrolled < 30d',
    live: true,
    reward: '2× base points',
    ends: 'In 18h'
  }, {
    name: 'Birthday Bonus',
    type: 'Bonus',
    audience: 'Segment: Birthday',
    live: false,
    reward: '5,000 pts',
    ends: 'Scheduled'
  }]);
  const toggle = i => setPromos(ps => ps.map((p, j) => j === i ? {
    ...p,
    live: !p.live
  } : p));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, flash && /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Promotion created",
    onClose: () => setFlash(false)
  }, "Your promotion is scheduled and ready to go live."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, promos.filter(p => p.live).length, " live \xB7 ", promos.length, " total"), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginLeft: 'auto'
    },
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }),
    onClick: () => setOpen(true)
  }, "New promotion")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, promos.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: p.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    tone: p.live ? 'success' : 'neutral',
    dot: true
  }, p.live ? 'Live' : 'Paused')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p.type, " \xB7 ", p.audience)), /*#__PURE__*/React.createElement(Switch, {
    checked: p.live,
    onChange: () => toggle(i),
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-muted)'
    }
  }, "Reward"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, p.reward)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-muted)'
    }
  }, "Ends"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, p.ends)))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    width: 480,
    title: "New promotion",
    description: "Set up a reward campaign for a player segment.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        setOpen(false);
        setFlash(true);
      }
    }, "Create & schedule"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Promotion name",
    placeholder: "e.g. Labor Day Free Play"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Type",
    options: ['Free play', 'Comp', 'Multiplier', 'Bonus points']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Audience",
    options: ['All active', 'Platinum+', 'At-risk', 'New members']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Reward value",
    placeholder: "$25 free play",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "gift",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Notify enrolled players by SMS",
    defaultChecked: true
  }))));
}
window.PSPromotionsScreen = PromotionsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/PromotionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Sidebar.jsx
try { (() => {
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'home'
}, {
  id: 'players',
  label: 'Players',
  icon: 'users'
}, {
  id: 'promotions',
  label: 'Promotions',
  icon: 'megaphone'
}, {
  id: 'rewards',
  label: 'Rewards',
  icon: 'gift'
}, {
  id: 'reports',
  label: 'Reports',
  icon: 'chart'
}];
function Sidebar({
  active,
  onNavigate
}) {
  const Icon = window.PSIcon;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: 'var(--gradient-navy)',
      color: 'var(--cyan-50)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-light.svg",
    style: {
      height: 30
    },
    alt: "Playersoft"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-light.svg",
    style: {
      height: 20
    },
    alt: "Playersoft"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, NAV.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-sm)',
        textAlign: 'left',
        padding: '10px 12px',
        borderRadius: 'var(--radius-sm)',
        color: on ? 'var(--navy-900)' : 'var(--cyan-50)',
        background: on ? 'var(--cyan-100)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-standard)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'rgba(204,255,255,.1)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderTop: '1px solid var(--border-inverse)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--aqua-500)',
      color: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, "DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13
    }
  }, "Dana Cole"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--aqua-300)'
    }
  }, "Marketing Host")))));
}
window.PSSidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Topbar.jsx
try { (() => {
function Topbar({
  title,
  subtitle,
  actions
}) {
  const Icon = window.PSIcon;
  const {
    Input,
    IconButton
  } = window.PlayersoftDesignSystem_7bdeae;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '18px 28px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    placeholder: "Search players, offers\u2026",
    size: "sm"
  })), actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    }),
    variant: "secondary",
    "aria-label": "Notifications"
  }));
}
window.PSTopbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/icons.jsx
try { (() => {
// Playersoft UI kit — inline icon set (Lucide-style stroke paths).
// Substituted from Lucide (github.com/lucide-icons/lucide, ISC) — clean 2px stroke.
const PS_ICON_PATHS = {
  home: '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  dots: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  star: '<path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>',
  coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h.01M21 21v-4M17 21h1"/>',
  trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="M18 12a1 1 0 0 0 0 2h3v-2z"/>'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: PS_ICON_PATHS[name] || ''
    }
  });
}
window.PSIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/floor-app/EnrollScreen.jsx
try { (() => {
function FloorEnroll({
  onDone
}) {
  const Icon = window.PSIcon;
  const {
    Input,
    Select,
    Checkbox,
    Button,
    Alert
  } = window.PlayersoftDesignSystem_7bdeae;
  const [done, setDone] = React.useState(false);
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        minHeight: 480,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--color-success-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 38,
      color: "var(--green-500)",
      strokeWidth: 2.5
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22,
        color: 'var(--text-strong)'
      }
    }, "Player enrolled"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        color: 'var(--text-muted)',
        maxWidth: 260
      }
    }, "Jordan Alvarez is now a Bronze member. A welcome offer has been sent by SMS."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: () => {
        setDone(false);
        onDone && onDone();
      }
    }, "Done"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info"
  }, "New members earn 2\xD7 points for their first 30 days."), /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jordan Alvarez",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(702) 555-0148",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Starting tier",
    options: ['Bronze', 'Silver', 'Gold']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "jordan@email.com",
    hint: "Optional \u2014 used for digital offers"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Consent to SMS marketing offers",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }),
    onClick: () => setDone(true)
  }, "Enroll player"));
}
window.PSFloorEnroll = FloorEnroll;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/floor-app/EnrollScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/floor-app/FloorApp.jsx
try { (() => {
function FloorApp() {
  const Icon = window.PSIcon;
  const {
    Dialog,
    Button,
    Select,
    Input
  } = window.PlayersoftDesignSystem_7bdeae;
  const [tab, setTab] = React.useState('lookup');
  const [player, setPlayer] = React.useState(null);
  const [reward, setReward] = React.useState(false);
  const openPlayer = p => {
    setPlayer(p);
    setTab('profile');
  };
  let content;
  if (tab === 'profile') content = /*#__PURE__*/React.createElement(window.PSFloorProfile, {
    player: player,
    onBack: () => setTab('lookup'),
    onReward: () => setReward(true)
  });else if (tab === 'enroll') content = /*#__PURE__*/React.createElement(window.PSFloorEnroll, {
    onDone: () => setTab('lookup')
  });else content = /*#__PURE__*/React.createElement(window.PSFloorLookup, {
    onOpen: openPlayer,
    onScan: () => openPlayer({
      name: 'Marcus Reed',
      id: 'PS-4471-9082',
      tier: 'Platinum',
      pts: '128,450'
    })
  });
  const tabs = [{
    id: 'lookup',
    label: 'Lookup',
    icon: 'search'
  }, {
    id: 'enroll',
    label: 'Enroll',
    icon: 'plus'
  }, {
    id: 'profile',
    label: 'Player',
    icon: 'users'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-page)',
      paddingTop: 50
    }
  }, tab !== 'profile' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 20px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-navy.svg",
    style: {
      height: 26
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, tab === 'enroll' ? 'Enroll player' : 'Playersoft Floor')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, content), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      padding: '8px 12px 26px'
    }
  }, tabs.map(t => {
    const on = tab === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        color: on ? 'var(--color-primary)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 22,
      strokeWidth: on ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: on ? 700 : 500
      }
    }, t.label));
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: reward,
    onClose: () => setReward(false),
    width: 340,
    title: "Issue reward",
    description: "Comp a reward to this player on the floor.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setReward(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => setReward(false)
    }, "Issue"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Reward type",
    options: ['Free play', 'Dining comp', 'Bonus points', 'Room night']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Value",
    placeholder: "$50",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "coins",
      size: 16
    })
  }))));
}
window.PSFloorApp = FloorApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/floor-app/FloorApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/floor-app/LookupScreen.jsx
try { (() => {
function FloorLookup({
  onOpen,
  onScan
}) {
  const Icon = window.PSIcon;
  const {
    Input,
    Button,
    Avatar,
    TierBadge
  } = window.PlayersoftDesignSystem_7bdeae;
  const recent = [{
    name: 'Marcus Reed',
    id: 'PS-4471-9082',
    tier: 'Platinum',
    pts: '128,450'
  }, {
    name: 'Priya Nair',
    id: 'PS-3092-1145',
    tier: 'Gold',
    pts: '64,880'
  }, {
    name: 'Owen Bright',
    id: 'PS-6610-3345',
    tier: 'Bronze',
    pts: '9,120'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }),
    placeholder: "Name, member ID or phone",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "qr",
      size: 18
    }),
    onClick: onScan
  }, "Scan player card")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Recent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, recent.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen(p),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14,
      boxShadow: 'var(--shadow-xs)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    tier: p.tier
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p.pts, " pts")), /*#__PURE__*/React.createElement(TierBadge, {
    tier: p.tier,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    color: "var(--gray-400)"
  }))))));
}
window.PSFloorLookup = FloorLookup;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/floor-app/LookupScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/floor-app/ProfileScreen.jsx
try { (() => {
function FloorProfile({
  player,
  onBack,
  onReward
}) {
  const Icon = window.PSIcon;
  const {
    Avatar,
    TierBadge,
    ProgressBar,
    Button,
    Badge
  } = window.PlayersoftDesignSystem_7bdeae;
  const p = player || {
    name: 'Marcus Reed',
    id: 'PS-4471-9082',
    tier: 'Platinum',
    pts: '128,450'
  };
  const activity = [{
    t: 'Earned 2,340 pts',
    s: 'Slots · Level 3 · 12 min ago',
    tone: 'success'
  }, {
    t: 'Redeemed $250 dining comp',
    s: 'Prime Steakhouse · 2h ago',
    tone: 'primary'
  }, {
    t: 'Free play credited',
    s: 'Weekend promo · Yesterday',
    tone: 'accent'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-hero)',
      padding: '10px 20px 22px',
      color: 'var(--cyan-50)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'transparent',
      border: 'none',
      color: 'var(--cyan-100)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      padding: 0,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowLeft",
    size: 18
  }), " Lookup"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    tier: p.tier,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--cyan-100)',
      marginTop: 2
    }
  }, p.id))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1
    }
  }, p.pts), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--cyan-100)',
      marginTop: 4
    }
  }, "Points balance")), /*#__PURE__*/React.createElement(TierBadge, {
    tier: p.tier,
    size: "lg"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Progress to Diamond",
    value: 128450,
    max: 150000,
    showValue: true,
    tone: "accent"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "gift",
      size: 18
    }),
    onClick: onReward
  }, "Issue reward"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    })
  }, "Contact")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      marginTop: 6,
      background: `var(--color-${a.tone === 'accent' ? 'accent' : a.tone})`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, a.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, a.s))))))));
}
window.PSFloorProfile = FloorProfile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/floor-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/floor-app/icons.jsx
try { (() => {
// Playersoft UI kit — inline icon set (Lucide-style stroke paths).
// Substituted from Lucide (github.com/lucide-icons/lucide, ISC) — clean 2px stroke.
const PS_ICON_PATHS = {
  home: '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  dots: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  star: '<path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>',
  coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h.01M21 21v-4M17 21h1"/>',
  trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="M18 12a1 1 0 0 0 0 2h3v-2z"/>'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: PS_ICON_PATHS[name] || ''
    }
  });
}
window.PSIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/floor-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/floor-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/floor-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TierBadge = __ds_scope.TierBadge;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
