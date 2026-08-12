/* @ds-bundle: {"format":4,"namespace":"MajuVendasOnlineDesignSystem_670be3","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CourseCard","sourcePath":"components/cards/CourseCard.jsx"},{"name":"PostCard","sourcePath":"components/cards/PostCard.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"AffiliateDisclosure","sourcePath":"components/feedback/AffiliateDisclosure.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/media/ImagePlaceholder.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"306d0868d115","components/cards/CourseCard.jsx":"3857104a0a5d","components/cards/PostCard.jsx":"e4819849cf69","components/cards/ProductCard.jsx":"64fed3dd39bd","components/core/Button.jsx":"845778d15e12","components/core/Chip.jsx":"2aef3dc816ee","components/core/Input.jsx":"978a210ddb45","components/feedback/AffiliateDisclosure.jsx":"1382129c21c6","components/layout/Hero.jsx":"eba8516cf4f3","components/layout/SectionHeading.jsx":"36db525b6f9d","components/layout/SiteFooter.jsx":"d1415989d403","components/layout/SiteHeader.jsx":"dcaed3d82fdd","components/media/ImagePlaceholder.jsx":"f9066b29b971","doc-page.js":"371bab66f42d","ui_kits/landing-afiliado/OfferCheckout.jsx":"27b958b0e5ef","ui_kits/landing-afiliado/OfferHero.jsx":"0ea708d09895","ui_kits/landing-afiliado/OfferProof.jsx":"341339a473de","ui_kits/landing-afiliado/app-root.jsx":"1f2adb42e530","ui_kits/site-institucional/BlogScreen.jsx":"6ede6521bdd5","ui_kits/site-institucional/ContatoScreen.jsx":"d156df5e497f","ui_kits/site-institucional/CursosScreen.jsx":"59847fd68310","ui_kits/site-institucional/HomeScreen.jsx":"8d30da050243","ui_kits/site-institucional/PostScreen.jsx":"45a77dfac50a","ui_kits/site-institucional/SobreScreen.jsx":"7856f84b9c03","ui_kits/site-institucional/app-root.jsx":"8a0cd6d48740","ui_kits/site-institucional/data.jsx":"8af28476e8b2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MajuVendasOnlineDesignSystem_670be3 = window.MajuVendasOnlineDesignSystem_670be3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const TONES = {
  brand: {
    mark: 'var(--brand)',
    glyph: 'var(--sand-50)',
    word: 'var(--ink-900)',
    tagline: 'var(--ink-500)'
  },
  negative: {
    mark: 'var(--sand-50)',
    glyph: 'var(--brand)',
    word: 'var(--sand-50)',
    tagline: '#9BA49F'
  },
  mono: {
    mark: 'var(--ink-900)',
    glyph: 'var(--sand-50)',
    word: 'var(--ink-900)',
    tagline: 'var(--ink-500)'
  },
  onImage: {
    mark: 'var(--sand-50)',
    glyph: 'var(--brand)',
    word: 'var(--sand-50)',
    tagline: 'var(--sand-150)'
  }
};
function Logo({
  variant = 'lockup',
  tone = 'brand',
  size = 36,
  showTagline = false,
  showDot = true
}) {
  const t = TONES[tone] || TONES.brand;
  const dot = Math.round(size * 0.24);
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: t.mark,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: Math.round(size * 0.485),
      color: t.glyph,
      lineHeight: 1
    }
  }, "M"), showDot && variant !== 'mark' ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: Math.round(size * 0.05),
      bottom: Math.round(size * 0.08),
      width: dot,
      height: dot,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--action)'
    }
  }) : null);
  if (variant === 'mark') return mark;
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: Math.max(4, Math.round(size * 0.1))
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: Math.round(size * 0.95),
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.02em',
      color: t.word,
      lineHeight: 1
    }
  }, "maju", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--action)'
    }
  }, ".")), showTagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(11, Math.round(size * 0.33)),
      letterSpacing: 'var(--tracking-wordmark)',
      textTransform: 'uppercase',
      color: t.tagline
    }
  }, "vendas online") : null);
  if (variant === 'wordmark') return word;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.34)
    }
  }, mark, word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  action: {
    background: 'var(--action)',
    color: 'var(--text-on-action)',
    border: '1px solid transparent',
    fontWeight: 'var(--weight-semibold)'
  },
  brand: {
    background: 'var(--brand)',
    color: 'var(--secondary-fg)',
    border: '1px solid transparent',
    fontWeight: 'var(--weight-semibold)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-900)',
    border: '1px solid var(--outline-border)',
    fontWeight: 'var(--weight-medium)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand)',
    border: '1px solid transparent',
    fontWeight: 'var(--weight-semibold)'
  }
};
const HOVER = {
  action: {
    background: 'var(--action-hover)',
    transform: 'var(--lift-hover)'
  },
  brand: {
    background: 'var(--brand-hover)',
    transform: 'var(--lift-hover)'
  },
  outline: {
    borderColor: 'var(--brand)',
    background: 'var(--brand-50)'
  },
  ghost: {
    background: 'var(--brand-50)'
  }
};
const ACTIVE = {
  action: {
    background: 'var(--action-active)',
    transform: 'var(--lift-active)'
  },
  brand: {
    background: 'var(--brand-active)',
    transform: 'var(--lift-active)'
  },
  outline: {
    background: 'var(--teal-100)'
  },
  ghost: {
    background: 'var(--teal-100)'
  }
};
const SIZES = {
  sm: {
    padding: '11px 22px',
    fontSize: '1rem'
  },
  md: {
    padding: '15px 26px',
    fontSize: 'var(--size-ui)'
  },
  lg: {
    padding: '16px 30px',
    fontSize: '1.125rem'
  }
};
function Button({
  children,
  variant = 'action',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-1)',
    fontFamily: 'var(--font-display)',
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'var(--transition)',
    width: fullWidth ? '100%' : undefined,
    ...SIZES[size],
    ...VARIANTS[variant]
  };
  const style = disabled ? {
    ...base,
    background: 'var(--disabled-bg)',
    color: 'var(--disabled-fg)',
    border: '1px solid transparent'
  } : {
    ...base,
    ...(hover ? HOVER[variant] : null),
    ...(press ? ACTIVE[variant] : null)
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: style,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
const VARIANTS = {
  verified: {
    background: 'var(--brand-50)',
    color: 'var(--brand)',
    fontWeight: 'var(--weight-semibold)',
    borderRadius: 'var(--radius-pill)'
  },
  discount: {
    background: 'var(--action)',
    color: 'var(--text-on-action)',
    fontWeight: 'var(--weight-bold)',
    borderRadius: 'var(--radius-pill)'
  },
  category: {
    background: 'transparent',
    color: 'var(--ink-500)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-pill)'
  },
  brand: {
    background: 'var(--brand)',
    color: 'var(--text-on-brand)',
    fontWeight: 'var(--weight-semibold)',
    borderRadius: 'var(--radius-pill)'
  },
  affiliate: {
    background: 'var(--warning-bg)',
    color: 'var(--warning)',
    fontWeight: 'var(--weight-semibold)',
    borderRadius: 'var(--radius-chip)'
  }
};
function Chip({
  children,
  variant = 'verified',
  dot = false
}) {
  const v = VARIANTS[variant] || VARIANTS.verified;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      padding: '9px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      lineHeight: 1.2,
      ...v
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--support)',
      flex: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  state = 'default',
  message,
  type = 'text',
  onChange
}) {
  const [focused, setFocused] = React.useState(false);
  const isError = state === 'error';
  const active = focused || state === 'focus';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      fontWeight: 'var(--weight-semibold)',
      color: isError ? 'var(--danger)' : 'var(--text-body)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      padding: '15px 18px',
      borderRadius: 'var(--radius-input)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-ui)',
      color: isError ? 'var(--danger)' : 'var(--ink-900)',
      background: isError ? 'var(--danger-bg)' : 'var(--white)',
      border: isError ? '1px solid var(--danger)' : active ? 'var(--border-strong)' : 'var(--border-input)',
      boxShadow: active && !isError ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'var(--transition)',
      width: '100%'
    }
  }), message ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: isError ? 'var(--danger)' : 'var(--text-subtle)'
    }
  }, message) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AffiliateDisclosure.jsx
try { (() => {
function AffiliateDisclosure({
  children = 'Este post contém links de afiliado. Se você comprar por eles, recebemos uma comissão sem custo adicional.',
  tone = 'inline'
}) {
  const compact = tone === 'compact';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: compact ? '12px 16px' : '18px 20px',
      borderRadius: 'var(--radius-input)',
      background: 'var(--warning-bg)',
      color: 'var(--warning)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      lineHeight: 'var(--leading-small)'
    }
  }, children);
}
Object.assign(__ds_scope, { AffiliateDisclosure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AffiliateDisclosure.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  actionLabel,
  onAction,
  size = 'md'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size === 'lg' ? 'var(--size-h2)' : '1.75rem',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-h2)',
      color: 'var(--text-heading)',
      lineHeight: 1.1
    }
  }, title)), actionLabel ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onAction && onAction();
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--brand)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
const DEFAULT_LINKS = ['Política de privacidade', 'Como avaliamos', 'Contato'];
function SiteFooter({
  links = DEFAULT_LINKS,
  note = '© 2026 Maju Vendas Online · Alguns links são de afiliado.'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 30,
      padding: '34px 40px',
      background: 'var(--surface-inverse)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark",
    tone: "negative",
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-on-brand-muted)'
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--text-on-brand-subtle)',
      textDecoration: 'none'
    }
  }, l))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
const DEFAULT_NAV = ['Home', 'Sobre', 'Blog', 'Cursos', 'Contato'];
function SiteHeader({
  items = DEFAULT_NAV,
  active = 'Home',
  ctaLabel = 'Ver ofertas',
  onNavigate,
  onCta,
  sticky = false
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      padding: '18px 32px',
      background: 'var(--bg)',
      borderBottom: 'var(--border)',
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]);
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 36
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      fontFamily: 'var(--font-body)',
      fontSize: '1rem'
    }
  }, items.map(item => {
    const on = item === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item);
      },
      style: {
        color: on ? 'var(--brand)' : 'var(--text-body)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        textDecoration: 'none',
        paddingBottom: 3,
        borderBottom: on ? '2px solid var(--action)' : '2px solid transparent'
      }
    }, item);
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "action",
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/media/ImagePlaceholder.jsx
try { (() => {
function ImagePlaceholder({
  label = 'imagem IA',
  height = 200,
  radius = 'var(--radius-input)',
  tone = 'sand'
}) {
  const dark = tone === 'teal';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: dark ? 'repeating-linear-gradient(135deg, var(--teal-700) 0 12px, var(--teal-800) 12px 24px)' : 'var(--ai-hatch)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      padding: '8px 12px',
      borderRadius: '6px',
      color: dark ? 'var(--text-on-brand-subtle)' : 'var(--text-subtle)',
      background: dark ? 'var(--teal-900)' : 'var(--sand-50)'
    }
  }, label));
}
Object.assign(__ds_scope, { ImagePlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImagePlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/cards/CourseCard.jsx
try { (() => {
function CourseCard({
  meta,
  title,
  blurb,
  imageLabel = 'capa do curso (IA)',
  imageSrc,
  ctaLabel = 'Assistir grátis',
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-input)',
      border: 'var(--border)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: 120,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    label: imageLabel,
    height: 120,
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)'
    }
  }, meta) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.15,
      color: 'var(--text-heading)'
    }
  }, title), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, blurb) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "brand",
    fullWidth: true,
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PostCard.jsx
try { (() => {
function PostCard({
  category,
  title,
  meta,
  excerpt,
  imageLabel = 'imagem do post (IA)',
  imageSrc,
  layout = 'stacked',
  href = '#'
}) {
  const wide = layout === 'wide';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: wide ? 'grid' : 'flex',
      gridTemplateColumns: wide ? '260px 1fr' : undefined,
      flexDirection: wide ? undefined : 'column',
      borderRadius: 'var(--radius-card)',
      border: 'var(--border)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: wide ? '100%' : 170,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    label: imageLabel,
    height: wide ? '100%' : 170,
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, category ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)'
    }
  }, category) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: wide ? '1.75rem' : 'var(--size-h3)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: 'var(--text-heading)'
    }
  }, title), excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, excerpt) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-subtle)'
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { PostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PostCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function ProductCard({
  category,
  name,
  blurb,
  price,
  oldPrice,
  discount,
  proof,
  imageLabel = 'foto produto IA',
  imageSrc,
  ctaLabel = 'Ver oferta',
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-card)',
      border: 'var(--border)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: 150,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    label: imageLabel,
    height: 150,
    radius: "0"
  }), discount ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    variant: "discount"
  }, discount)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, category ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)'
    }
  }, category) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.3125rem',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.2,
      color: 'var(--text-heading)'
    }
  }, name), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, blurb) : null, proof ? /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    variant: "verified",
    dot: true
  }, proof)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 'auto',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.625rem',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, price), oldPrice ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      color: 'var(--text-subtle)',
      textDecoration: 'line-through'
    }
  }, oldPrice) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "action",
    fullWidth: true,
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function Hero({
  badge,
  title,
  body,
  primaryLabel,
  secondaryLabel,
  proof,
  tone = 'light',
  imageLabel = 'imagem IA — pessoa usando produto',
  imageSrc,
  onPrimary,
  onSecondary
}) {
  const dark = tone === 'brand';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 40px 60px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, badge ? /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    variant: dark ? 'brand' : 'verified'
  }, badge) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-display)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: dark ? 'var(--text-on-brand)' : 'var(--text-heading)',
      textWrap: 'pretty'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body)',
      lineHeight: 1.6,
      color: dark ? 'var(--text-on-brand-muted)' : 'var(--text-muted)',
      maxWidth: 440
    }
  }, body) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, primaryLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'action' : 'brand',
    onClick: onPrimary
  }, primaryLabel) : null, secondaryLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: onSecondary
  }, secondaryLabel) : null), proof ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--support)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: dark ? 'var(--text-on-brand-subtle)' : 'var(--text-muted)'
    }
  }, proof)) : null), imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: 380,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.ImagePlaceholder, {
    label: imageLabel,
    height: "100%",
    radius: "0",
    tone: dark ? 'teal' : 'sand'
  }));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/landing-afiliado/OfferCheckout.jsx
try { (() => {
const {
  Button,
  Input,
  Chip
} = window.MajuVendasOnlineDesignSystem_670be3;
function OfferCheckout({
  open,
  onClose
}) {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "checkout",
    style: {
      padding: '0 0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      borderRadius: 'var(--radius-card-lg)',
      padding: '48px 52px',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "discount"
  }, "-40% at\xE9 domingo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--text-on-brand)',
      fontSize: '2.25rem'
    }
  }, "Comece hoje por R$ 89"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-brand-muted)',
      maxWidth: '42ch'
    }
  }, "Pagamento \xFAnico, acesso vital\xEDcio ao material. Se em 7 dias n\xE3o fizer sentido, devolvemos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 600,
      color: 'var(--text-on-brand)',
      letterSpacing: '-0.03em'
    }
  }, "R$ 89"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-on-brand-subtle)',
      textDecoration: 'line-through'
    }
  }, "R$ 149"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      padding: '28px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Seu e-mail",
    placeholder: "nome@email.com",
    state: open ? 'focus' : 'default'
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "action",
    fullWidth: true,
    size: "lg",
    onClick: () => setDone(true)
  }, done ? 'Tudo certo — confira o e-mail' : 'Quero começar'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-subtle)',
      textAlign: 'center'
    }
  }, "Garantia de 7 dias \xB7 pagamento seguro")))));
}
window.OfferCheckout = OfferCheckout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-afiliado/OfferCheckout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-afiliado/OfferHero.jsx
try { (() => {
const {
  Logo,
  Button,
  ImagePlaceholder
} = window.MajuVendasOnlineDesignSystem_670be3;
function OfferHero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-inverse)',
      padding: '28px 0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "negative",
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--support)'
    }
  }, "oferta.majuvendasonline.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--support)'
    }
  }, "M\xE9todo testado pela nossa equipe"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '3.5rem',
      color: 'var(--text-on-brand)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em'
    }
  }, "Dormir melhor em 21 dias"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-brand-muted)',
      maxWidth: '46ch'
    }
  }, "O mesmo protocolo que usamos para avaliar monitores de sono, transformado em um plano di\xE1rio simples. Sem suplemento, sem app pago."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['Método testado pela nossa equipe', 'Acesso imediato, sem assinatura'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-on-brand)',
      fontSize: 'var(--size-ui)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: 'var(--support)'
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "action",
    size: "lg",
    onClick: onCta
  }, "Quero come\xE7ar"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-on-brand-subtle)'
    }
  }, "Garantia de 7 dias"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/produto-headphone.jpg",
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: 340,
      objectFit: 'cover',
      borderRadius: 'var(--radius-card)'
    }
  }))));
}
window.OfferHero = OfferHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-afiliado/OfferHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-afiliado/OfferProof.jsx
try { (() => {
const {
  Chip,
  SectionHeading,
  AffiliateDisclosure
} = window.MajuVendasOnlineDesignSystem_670be3;
function OfferProof() {
  const steps = [{
    n: 'Semana 1',
    t: 'Regularizar o horário',
    d: 'Um único ajuste por dia, sempre no mesmo bloco de 30 minutos.'
  }, {
    n: 'Semana 2',
    t: 'Cortar os ruídos',
    d: 'Luz, cafeína e tela — na ordem que mais pesa para o seu caso.'
  }, {
    n: 'Semana 3',
    t: 'Medir e ajustar',
    d: 'O que fazer com o dado do monitor em vez de só olhar o gráfico.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "O plano",
    title: "Tr\xEAs semanas, um ajuste por vez",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-card)',
      padding: '28px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "verified",
    dot: true
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)',
      lineHeight: 1.55
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-card)',
      padding: '32px 36px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.3,
      color: 'var(--text-heading)',
      letterSpacing: '-0.02em'
    }
  }, "\"Na terceira semana eu j\xE1 acordava antes do despertador. O plano n\xE3o promete nada al\xE9m do que entrega.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, "Renata M. \xB7 leitora do blog desde 2024"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-subtle)'
    }
  }, "Depoimento coletado por e-mail, publicado com autoriza\xE7\xE3o."))), /*#__PURE__*/React.createElement(AffiliateDisclosure, null, "Esta p\xE1gina cont\xE9m link de afiliado. Se voc\xEA comprar por ele, recebemos uma comiss\xE3o sem custo adicional.")));
}
window.OfferProof = OfferProof;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-afiliado/OfferProof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-afiliado/app-root.jsx
try { (() => {
const {
  SiteFooter
} = window.MajuVendasOnlineDesignSystem_670be3;
function OfferApp() {
  const [focusCheckout, setFocusCheckout] = React.useState(false);
  const scrollToCheckout = () => {
    setFocusCheckout(true);
    const el = document.getElementById('checkout');
    if (el) window.scrollTo({
      top: el.offsetTop - 40,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.OfferHero, {
    onCta: scrollToCheckout
  }), /*#__PURE__*/React.createElement(window.OfferProof, null), /*#__PURE__*/React.createElement(window.OfferCheckout, {
    open: focusCheckout
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    note: "\xA9 2026 Maju Vendas Online \xB7 Esta p\xE1gina cont\xE9m link de afiliado.",
    links: ['Política de privacidade', 'Como avaliamos', 'Contato']
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(OfferApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-afiliado/app-root.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/BlogScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PostCard,
  SectionHeading,
  Chip
} = window.MajuVendasOnlineDesignSystem_670be3;
function BlogScreen({
  go
}) {
  const [cat, setCat] = React.useState('Todos');
  const cats = ['Todos', 'Tecnologia', 'Saúde', 'Bem-estar'];
  const posts = window.majuPosts;
  const shown = cat === 'Todos' ? posts : posts.filter(p => p.category.includes(cat));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Blog",
    title: "An\xE1lises e comparativos",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: c === cat ? 'brand' : 'category'
  }, c)))), /*#__PURE__*/React.createElement("div", {
    onClick: () => go('Post'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PostCard, _extends({
    layout: "wide"
  }, posts[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, shown.slice(1).concat(posts).slice(0, 3).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => go('Post'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PostCard, p))))));
}
window.BlogScreen = BlogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/BlogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/ContatoScreen.jsx
try { (() => {
const {
  Input,
  Button,
  Chip
} = window.MajuVendasOnlineDesignSystem_670be3;
function ContatoScreen() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const invalid = email.length > 0 && !email.includes('@');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "verified",
    dot: true
  }, "Resposta em at\xE9 2 dias \xFAteis"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '2.5rem'
    }
  }, "Fala com a gente"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '48ch'
    }
  }, "Sugest\xE3o de produto para testar, corre\xE7\xE3o em uma an\xE1lise ou proposta de parceria \u2014 tudo chega no mesmo lugar."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-subtle)'
    }
  }, "contato@majuvendasonline.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-card)',
      padding: '30px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Seu nome",
    placeholder: "Como te chamamos?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Seu e-mail",
    placeholder: "nome@email.com",
    value: email,
    state: invalid ? 'error' : 'default',
    message: invalid ? 'Confira o endereço.' : undefined,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Assunto",
    placeholder: "Sugest\xE3o de produto"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "action",
    fullWidth: true,
    disabled: invalid,
    onClick: () => setSent(true)
  }, sent ? 'Enviado, obrigado!' : 'Enviar mensagem'))));
}
window.ContatoScreen = ContatoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/ContatoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/CursosScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  CourseCard,
  SectionHeading,
  Chip
} = window.MajuVendasOnlineDesignSystem_670be3;
function CursosScreen() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Cursos",
    title: "Gratuitos, curtos e sem enrola\xE7\xE3o",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "verified",
    dot: true
  }, "Sem cadastro para assistir"), /*#__PURE__*/React.createElement(Chip, {
    variant: "category"
  }, "V\xEDdeo + resumo em texto")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, window.majuCourses.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.title
  }, c))))));
}
window.CursosScreen = CursosScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/CursosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  SectionHeading,
  ProductCard,
  CourseCard,
  Chip,
  Button,
  Input,
  ImagePlaceholder
} = window.MajuVendasOnlineDesignSystem_670be3;
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    badge: "Curadoria semanal",
    title: "O que vale a pena em tech, sa\xFAde e bem-estar",
    body: "An\xE1lises independentes e ofertas verificadas, atualizadas toda semana. Sem promessa m\xE1gica, sem letra mi\xFAda.",
    primaryLabel: "Explorar produtos",
    secondaryLabel: "Ler o blog",
    proof: "247 produtos testados \xB7 3 nichos",
    imageSrc: "../../assets/imagery/hero-workspace.jpg",
    onSecondary: () => go('Blog')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0',
      borderTop: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Testados esta semana",
    actionLabel: "Ver todos"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, window.majuProducts.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.name
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "verified",
    dot: true
  }, "Como avaliamos"), /*#__PURE__*/React.createElement("h2", null, "Tr\xEAs filtros antes de qualquer recomenda\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, "Reputa\xE7\xE3o do vendedor, pol\xEDtica de devolu\xE7\xE3o e o que dizem quem j\xE1 comprou. Se n\xE3o passa, n\xE3o entra no site."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('Sobre')
  }, "Conhecer o m\xE9todo")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/retrato-equipe.jpg",
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: 280,
      objectFit: 'cover',
      borderRadius: 'var(--radius-card)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Gratuito",
    title: "Cursos r\xE1pidos",
    actionLabel: "Ver todos",
    onAction: () => go('Cursos')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, window.majuCourses.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.title
  }, c)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      borderRadius: 'var(--radius-card-lg)',
      padding: '44px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--text-on-brand)'
    }
  }, "Uma curadoria por semana no seu e-mail"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-brand-muted)',
      maxWidth: '48ch'
    }
  }, "S\xF3 o que passou nos testes. Sem spam, cancelamento em um clique.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "nome@email.com"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "action",
    fullWidth: true
  }, "Quero receber"))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/PostScreen.jsx
try { (() => {
const {
  AffiliateDisclosure,
  ImagePlaceholder,
  ProductCard,
  Chip,
  Button
} = window.MajuVendasOnlineDesignSystem_670be3;
function PostScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: '64px 0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 7fr) 4fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)'
    }
  }, "Blog \xB7 Sa\xFAde"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '2.375rem',
      lineHeight: 1.08,
      letterSpacing: '-0.025em'
    }
  }, "Vale a pena investir em um monitor de sono?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-subtle)'
    }
  }, "7 min de leitura \xB7 atualizado em 28 jul 2026"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/retrato-equipe.jpg",
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: 280,
      objectFit: 'cover',
      borderRadius: 'var(--radius-input)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-prose)'
    }
  }, "Testamos quatro aparelhos por 60 noites. A conclus\xE3o curta: o dado s\xF3 serve se voc\xEA mudar algo depois \u2014 e tr\xEAs dos quatro entregam precis\xE3o suficiente para isso."), /*#__PURE__*/React.createElement(AffiliateDisclosure, null), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.75rem',
      marginTop: 8
    }
  }, "O que medimos"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-prose)'
    }
  }, "Comparamos cada aparelho com um registro manual de hor\xE1rio de deitar e acordar, e cruzamos os est\xE1gios de sono relatados entre os quatro dispositivos na mesma noite. Nenhum deles substitui polissonografia \u2014 e nenhum fabricante afirma o contr\xE1rio na letra mi\xFAda."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: '20px 24px',
      background: 'var(--surface)',
      borderRadius: 'var(--radius-input)',
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      fontWeight: 500,
      color: 'var(--text-heading)',
      lineHeight: 1.35
    }
  }, "Se o n\xFAmero n\xE3o muda o que voc\xEA faz na noite seguinte, ele n\xE3o vale o investimento."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-prose)'
    }
  }, "Para quem quer s\xF3 entender o padr\xE3o da pr\xF3pria semana, o modelo mais barato da lista j\xE1 resolve. Para quem tem apneia diagnosticada, converse com o m\xE9dico antes de trocar um aparelho cl\xEDnico por um de pulso.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Produto do post"), /*#__PURE__*/React.createElement(ProductCard, {
    category: "Tecnologia",
    name: "Smartwatch com ox\xEDmetro",
    blurb: "O melhor equil\xEDbrio entre precis\xE3o e pre\xE7o.",
    price: "R$ 349",
    oldPrice: "R$ 429",
    proof: "Testado 60 noites",
    imageSrc: "../../assets/imagery/produto-headphone.jpg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-card)',
      padding: '22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "verified",
    dot: true
  }, "Curadoria semanal"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, "Receba o resumo dos testes da semana."), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "sm",
    onClick: () => go('Home')
  }, "Assinar")))));
}
window.PostScreen = PostScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/PostScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/SobreScreen.jsx
try { (() => {
const {
  Chip,
  ImagePlaceholder,
  SectionHeading,
  Button
} = window.MajuVendasOnlineDesignSystem_670be3;
function SobreScreen({
  go
}) {
  const filtros = [{
    t: 'Reputação do vendedor',
    d: 'Tempo de loja, histórico de reclamação e resposta a problema.'
  }, {
    t: 'Política de devolução',
    d: 'Prazo real, quem paga o frete, o que acontece com produto aberto.'
  }, {
    t: 'Quem já comprou',
    d: 'Avaliações verificadas cruzadas com o nosso próprio uso.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "verified",
    dot: true
  }, "Sobre a Maju"), /*#__PURE__*/React.createElement("h1", null, "A Maju nasceu de uma pergunta simples: vale a pena?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, "Compramos, usamos e escrevemos o que achamos. Quando indicamos, \xE9 porque usar\xEDamos de novo. Quando n\xE3o indicamos, dizemos por qu\xEA."), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    onClick: () => go('Contato')
  }, "Falar com a gente")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/retrato-equipe.jpg",
    alt: "",
    style: {
      display: 'block',
      width: '100%',
      height: 340,
      objectFit: 'cover',
      borderRadius: 'var(--radius-card)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Como avaliamos",
    title: "Tr\xEAs filtros, sempre na mesma ordem",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, filtros.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: x.t,
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-card)',
      padding: '28px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("h3", null, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)',
      lineHeight: 1.55
    }
  }, x.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, [['247', 'produtos testados'], ['3', 'nichos: tech, saúde e bem-estar'], ['60', 'noites no teste de sono mais longo']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      color: 'var(--brand)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, l))))));
}
window.SobreScreen = SobreScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/SobreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/app-root.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter
} = window.MajuVendasOnlineDesignSystem_670be3;
const SCREENS = {
  Home: window.HomeScreen,
  Sobre: window.SobreScreen,
  Blog: window.BlogScreen,
  Post: window.PostScreen,
  Cursos: window.CursosScreen,
  Contato: window.ContatoScreen
};
function SiteApp() {
  const [page, setPage] = React.useState('Home');
  const Screen = SCREENS[page] || SCREENS.Home;
  const activeNav = page === 'Post' ? 'Blog' : page;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    active: activeNav,
    onNavigate: setPage,
    onCta: () => setPage('Home'),
    sticky: true
  }), /*#__PURE__*/React.createElement(Screen, {
    go: setPage
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/app-root.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/data.jsx
try { (() => {
const majuProducts = [{
  category: 'Bem-estar',
  name: 'Headphone com cancelamento de ruído',
  blurb: 'Testamos por 30 dias em uso diário no escritório.',
  price: 'R$ 189',
  oldPrice: 'R$ 279',
  discount: '-32%',
  imageSrc: '../../assets/imagery/produto-headphone.jpg'
}, {
  category: 'Tecnologia',
  name: 'Notebook leve para trabalho remoto',
  blurb: 'Nove horas reais de bateria em uso misto.',
  price: 'R$ 349',
  oldPrice: 'R$ 429',
  proof: 'Testado 30 dias',
  imageSrc: '../../assets/imagery/hero-workspace.jpg'
}, {
  category: 'Saúde',
  name: 'Balança de bioimpedância',
  blurb: 'Nota 8,4 na nossa avaliação de precisão e app.',
  price: 'R$ 219',
  oldPrice: 'R$ 299',
  imageSrc: '../../assets/imagery/produto-balanca.jpg'
}];
const majuPosts = [{
  category: 'Blog · Saúde',
  title: 'Vale a pena investir em um monitor de sono?',
  meta: '7 min de leitura · atualizado em 28 jul 2026',
  excerpt: 'Testamos quatro aparelhos por 60 noites. A conclusão curta: o dado só serve se você mudar algo depois.',
  imageSrc: '../../assets/imagery/retrato-equipe.jpg'
}, {
  category: 'Blog · Tecnologia',
  title: 'Smartwatch barato mede pressão de verdade?',
  meta: '5 min de leitura · 21 jul 2026',
  excerpt: 'Comparamos três modelos com um aparelho de braço calibrado.',
  imageSrc: '../../assets/imagery/hero-workspace.jpg'
}, {
  category: 'Blog · Bem-estar',
  title: 'Massageador cervical: o que muda depois de 30 dias',
  meta: '6 min de leitura · 14 jul 2026',
  excerpt: 'Uso diário no escritório, com e sem pausa ativa.',
  imageSrc: '../../assets/imagery/produto-headphone.jpg'
}];
const majuCourses = [{
  meta: '6 aulas · 2h40',
  title: 'Como avaliar um produto antes de comprar',
  blurb: 'O método que usamos nas análises, passo a passo.'
}, {
  meta: '4 aulas · 1h20',
  title: 'Ler ficha técnica sem se enganar',
  blurb: 'Os números que importam em tech e saúde.'
}, {
  meta: '5 aulas · 2h05',
  title: 'Comprar online com segurança',
  blurb: 'Reputação, devolução e o que fazer quando dá errado.'
}];
Object.assign(window, {
  majuProducts,
  majuPosts,
  majuCourses
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.PostCard = __ds_scope.PostCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.AffiliateDisclosure = __ds_scope.AffiliateDisclosure;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

})();
