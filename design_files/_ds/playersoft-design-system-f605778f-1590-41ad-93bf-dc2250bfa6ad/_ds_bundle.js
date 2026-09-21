/* @ds-bundle: {"format":4,"namespace":"PlayersoftDesignSystem_f60577","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Suits","sourcePath":"components/display/Suits.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7407b930df48","components/actions/IconButton.jsx":"ac24fa8f6381","components/display/Badge.jsx":"1c2d7fa94dc6","components/display/Card.jsx":"745267c8757b","components/display/Suits.jsx":"10568148a0d5","components/display/Tabs.jsx":"21f4171dc162","components/display/Tag.jsx":"71105d50410e","components/feedback/Dialog.jsx":"9e4c39d20c82","components/feedback/Toast.jsx":"1045ebb09d9b","components/feedback/Tooltip.jsx":"472d575dbc4f","components/forms/Checkbox.jsx":"b52a62f04a8f","components/forms/Input.jsx":"2701c14039f6","components/forms/Radio.jsx":"84585345e918","components/forms/Select.jsx":"f6884d3e904a","components/forms/Switch.jsx":"8598cf78efbe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PlayersoftDesignSystem_f60577 = window.PlayersoftDesignSystem_f60577 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  icon,
  children,
  style,
  ...rest
}) {
  const h = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  }[size];
  const pad = {
    sm: '0 12px',
    md: '0 18px',
    lg: '0 24px'
  }[size];
  const fs = {
    sm: 13,
    md: 15,
    lg: 16
  }[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: h,
    padding: pad,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: fs,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard)'
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)'
    },
    gold: {
      background: 'var(--gold)',
      color: '#1A1207'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    danger: {
      background: 'transparent',
      color: 'var(--danger)',
      borderColor: 'var(--red-600)'
    }
  };
  const hover = {
    primary: 'var(--accent-hover)',
    gold: 'var(--gold-hover)',
    secondary: 'var(--surface-raised)',
    ghost: 'var(--surface-raised)',
    danger: 'rgba(196,33,47,0.12)'
  };
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hov && !disabled ? {
        background: hover[variant]
      } : null),
      ...style
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = 'md',
  variant = 'ghost',
  disabled,
  children,
  style,
  ...rest
}) {
  const d = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const [hov, setHov] = React.useState(false);
  const bg = variant === 'solid' ? hov ? 'var(--accent-hover)' : 'var(--accent)' : hov ? 'var(--surface-raised)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-sm)',
      border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent',
      background: bg,
      color: variant === 'solid' ? '#fff' : 'var(--text-secondary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const tones = {
    neutral: {
      background: 'var(--ink-700)',
      color: 'var(--gray-200)'
    },
    red: {
      background: 'rgba(196,33,47,0.18)',
      color: 'var(--red-400)'
    },
    gold: {
      background: 'rgba(236,164,63,0.15)',
      color: 'var(--gold-400)'
    },
    success: {
      background: 'rgba(63,164,106,0.15)',
      color: 'var(--success)'
    },
    info: {
      background: 'rgba(76,141,201,0.15)',
      color: 'var(--info)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-eyebrow)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  featured,
  title,
  action,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      ...style
    }
  }, featured && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--grad-brand)'
    }
  }), (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '14px 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-h3)',
      color: 'var(--text-primary)'
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Suits.jsx
try { (() => {
function Suits({
  size = 14,
  chip = true,
  style
}) {
  const g = 'var(--gold-400)',
    r = 'var(--red-400)';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.7),
      fontSize: size,
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: g
    }
  }, "\u2660"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: r
    }
  }, "\u2665"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: g
    }
  }, "\u2666"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: r
    }
  }, "\u2663"), chip && /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px dashed ' + g,
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { Suits });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Suits.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const id = t.id ?? t;
    const label = t.label ?? t;
    const is = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": is,
      onClick: () => onChange && onChange(id),
      style: {
        padding: '10px 14px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        font: 'var(--text-body-strong)',
        color: is ? 'var(--text-primary)' : 'var(--text-muted)',
        boxShadow: is ? 'inset 0 -2px 0 var(--red-500)' : 'none',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  onRemove,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 10px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-raised)',
      color: 'var(--text-secondary)',
      font: 'var(--text-small)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: 0,
      fontSize: 13,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  onClose,
  footer,
  children,
  width = 440
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10,10,12,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: 'calc(100vw - 48px)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-raised)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--grad-brand)'
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-h2)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      font: 'var(--text-body)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '0 20px 20px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'success',
  title,
  children,
  onClose,
  style
}) {
  const colors = {
    success: 'var(--success)',
    danger: 'var(--danger)',
    gold: 'var(--gold-400)',
    info: 'var(--info)'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 340,
      padding: '12px 14px',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-strong)',
      borderLeft: '3px solid ' + colors[tone],
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-strong)',
      color: 'var(--text-primary)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 14,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--ink-700)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      font: 'var(--text-small)',
      boxShadow: 'var(--shadow-raised)',
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 4,
      border: '1px solid ' + (checked ? 'var(--red-500)' : 'var(--border-strong)'),
      background: checked ? 'var(--red-500)' : 'var(--surface-inset)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      fontWeight: 700,
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, checked ? '✓' : '')), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      font: 'var(--text-small)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--control-h-md)',
      padding: '0 12px',
      background: 'var(--surface-inset)',
      border: '1px solid ' + (error ? 'var(--danger)' : focus ? 'var(--red-500)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-sm)',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      font: 'var(--text-body)'
    }
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 18,
      height: 18,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--red-500)' : 'var(--border-strong)'),
      background: 'var(--surface-inset)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--red-500)'
    }
  }))), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      font: 'var(--text-small)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      appearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 32px 0 12px',
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      font: 'var(--text-body)',
      cursor: 'pointer'
    }
  }), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 38,
      height: 22,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--red-500)' : 'var(--ink-700)',
      transition: 'background var(--dur-med) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--dur-med) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Suits = __ds_scope.Suits;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
