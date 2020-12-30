export const WTTJ_THEME_CONFIG = {
  transformers: {},
  colors: {
    primary: {
      100: "#FFF8D9",
      200: "#FFE166",
      500: "#FFCD00",
      700: "#E5B800",
      800: "#735C00",
      900: "#4C3D00",
    },
    success: {
      100: "#E6FAE7",
      200: "#52B45A",
      500: "#2F9237",
    },
    danger: {
      100: "#FFECEC",
      200: "#E02F32",
      500: "#BB1316",
      700: "#94080A",
    },
    warning: {
      100: "#FFF5EF",
      200: "#F17D39",
      500: "#D35E1A",
      700: "#B34607",
    },
    info: {
      100: "#EAF2FE",
      200: "#3E7BD7",
      500: "#1B57B2",
    },
    light: {
      100: "#737373",
      200: "#8C8C8C",
      500: "#999999",
      700: "#B3B3B3",
      800: "#E5E5E5",
      900: "#FFFFFF",
    },
    dark: {
      100: "#666666",
      200: "#4C4C4C",
      500: "#2B2B2B",
      700: "#1A1A1A",
      800: "#151515",
      900: "#000000",
    },
    nude: {
      100: "#F6F3EF",
      200: "#EFEAE4",
      500: "#D6D2CC",
      700: "#8F8C88",
      800: "#6B6966",
      900: "#474543",
    },
    sub: {
      1: "#3FD1C1",
      2: "#4AB519",
      3: "#EA724C",
      4: "#F0AABF",
      5: "#965FE6",
      6: "#F4CF70",
    },
    underline: "#FFF8D9",
    overlay: "rgba(0, 0, 0, 0.55)",
  },
  fontFaces: {
    "welcome-font": [
      {
        url:
          "https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-regular",
        weight: "400",
        display: "swap",
        extensions: ["woff2", "woff"],
      },
      {
        url:
          "https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-medium",
        weight: "500",
        display: "swap",
        extensions: ["woff2", "woff"],
      },
      {
        url:
          "https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-bold",
        weight: "600",
        display: "swap",
        extensions: ["woff2", "woff"],
      },
      {
        url:
          "https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-regular-italic",
        weight: "400",
        style: "italic",
        display: "swap",
        extensions: ["woff2", "woff"],
      },
      {
        url:
          "https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-medium-italic",
        weight: "500",
        style: "italic",
        display: "swap",
        extensions: ["woff2", "woff"],
      },
      {
        url:
          "https://cdn.welcometothejungle.com/common/assets/fonts/welcome-font-bold-italic",
        weight: "600",
        style: "italic",
        display: "swap",
        extensions: ["woff2", "woff"],
      },
    ],
    "welcome-icon-font": [
      {
        url:
          "https://cdn.welcometothejungle.com/common/assets/fonts/welcome-icon-font",
        display: "block",
        extensions: ["woff2", "woff"],
      },
    ],
  },
  fontSizes: {
    h0: "4.0625rem",
    h1: "2.8125rem",
    h2: "2.25rem",
    h3: "1.625rem",
    h4: "1.25rem",
    h5: "1rem",
    h6: "0.875rem",
    body1: "1.125rem",
    body2: "1rem",
    body3: "0.875rem",
    body4: "0.75rem",
    button: "0.75rem",
    subtitle1: "0.8125rem",
    subtitle2: "0.6875rem",
    meta1: "0.875rem",
    meta2: "0.75rem",
  },
  defaultLineHeight: 1.15,
  defaultLetterSpacing: 0,
  headingLineHeight: 1.2,
  headingLetterSpacing: 0,
  lineHeights: {
    html: 1.15,
    h0: 1.2,
    h1: 1.2,
    h2: 1.2,
    h3: 1.2,
    h4: 1.2,
    h5: 1.2,
    h6: 1.2,
    body1: 1.15,
    body2: 1.15,
    body3: 1.15,
    body4: 1.15,
    subtitle1: 1.2,
    subtitle2: 1.2,
    meta1: 1.15,
    meta2: 1.15,
  },
  fontWeights: {
    regular: "400",
    medium: "500",
    bold: "600",
  },
  letterSpacings: {
    sm: "0.5px",
    md: "1px",
    lg: "2px",
    html: 0,
    h0: 0,
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    body1: 0,
    body2: 0,
    body3: 0,
    body4: 0,
    subtitle1: 0,
    subtitle2: 0,
    meta1: 0,
    meta2: 0,
  },
  fonts: {
    texts: "Work Sans, sans-serif",
    headings: "welcome-font, sans-serif",
    icons: "welcome-icon-font",
  },
  borderWidths: {
    sm: "1px",
    md: "2px",
    lg: "3px",
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 736,
    lg: 980,
    xl: 1280,
  },
  space: {
    xxs: "0.375rem",
    xs: "0.5rem",
    sm: "0.625rem",
    md: "0.75rem",
    lg: "0.9375rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  icons: {
    xxs: "0.4375rem",
    xs: "0.625rem",
    sm: "0.75rem",
    md: "0.9375rem",
    lg: "1.25rem",
    xl: "1.723375rem",
  },
  radii: {
    sm: "4px",
    md: "6px",
    lg: "10px",
  },
  transitions: {
    slow: "500ms cubic-bezier(0.41, 0.094, 0.54, 0.07)",
    medium: "300ms ease",
    fast: "100ms linear",
  },
  transitionCurves: {
    primary: "ease",
    secondary: "linear",
    tertiary: "cubic-bezier(0.41, 0.094, 0.54, 0.07)",
  },
  shadows: {
    sm: "1px 2px 4px 0 rgba(0,0,0,0.05)",
    md: "3px 4px 10px 0 rgba(0,0,0,0.07)",
  },
  selection: {
    backgroundColor: "#FFCD00",
    color: "#FFFFFF",
  },
  underline: {
    default: [
      "\n      background-image: linear-gradient(0deg, ",
      "#FFF8D9",
      ", ",
      "#FFF8D9",
      " 100%);\n      background-repeat: no-repeat;\n      background-size: 100% 50%;\n      background-position-y: calc(200% - 1px);\n      transition: background-position-y 0.25s;\n    ",
    ],
    hover: ["\n      opacity: 1;\n      background-position-y: 100%;\n    "],
  },
  defaultCards: {
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#E5E5E5",
  },
  textsFontWeights: {
    h0: "600",
    h1: "600",
    h2: "600",
    h3: "600",
    h4: "600",
    h5: "600",
    h6: "600",
    body1: "400",
    body2: "400",
    body3: "400",
    body4: "400",
    button: "600",
    subtitle1: "600",
    subtitle2: "500",
    meta1: "400",
    meta2: "400",
  },
  textsFontFamily: {
    h0: "welcome-font, sans-serif",
    h1: "welcome-font, sans-serif",
    h2: "welcome-font, sans-serif",
    h3: "welcome-font, sans-serif",
    h4: "welcome-font, sans-serif",
    h5: "welcome-font, sans-serif",
    h6: "welcome-font, sans-serif",
    subtitle1: "welcome-font, sans-serif",
    subtitle2: "welcome-font, sans-serif",
  },
  textsTextTransform: {
    h0: "uppercase",
  },
  alerts: {
    default: {
      fontSize: "0.875rem",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "6px",
      padding: "1.25rem",
      color: "#4C4C4C",
    },
    error: {
      backgroundColor: "#FFECEC",
      borderColor: "#BB1316",
    },
    warning: {
      backgroundColor: "#FFF5EF",
      borderColor: "#D35E1A",
    },
    info: {
      backgroundColor: "#EAF2FE",
      borderColor: "#1B57B2",
    },
    success: {
      backgroundColor: "#E6FAE7",
      borderColor: "#2F9237",
    },
    title: {
      error: {
        color: "#94080A",
      },
      warning: {
        color: "#B34607",
      },
      info: {
        color: "#1B57B2",
      },
      success: {
        color: "#2F9237",
      },
    },
  },
  avatars: {
    sizes: {
      sm: "1.25rem",
      md: "1.875rem",
      lg: "2.5rem",
      xl: "3.125rem",
      xxl: "3.75rem",
    },
    text: {
      color: "#FFFFFF",
      fontWeight: "600",
    },
  },
  buttons: {
    primary: {
      color: "#FFFFFF",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#FFCD00",
      borderColor: "#FFCD00",
    },
    secondary: {
      color: "#FFFFFF",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#000000",
      borderColor: "#000000",
    },
    tertiary: {
      color: "#000000",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "transparent",
      borderColor: "#000000",
    },
    "tertiary-negative": {
      color: "#FFFFFF",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "transparent",
      borderColor: "#FFFFFF",
    },
    "primary-warning": {
      color: "#FFFFFF",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#D35E1A",
      borderColor: "#D35E1A",
    },
    "secondary-warning": {
      color: "#B34607",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#FFFFFF",
      borderColor: "#D35E1A",
    },
    "primary-danger": {
      color: "#FFFFFF",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#BB1316",
      borderColor: "#BB1316",
    },
    "secondary-danger": {
      color: "#94080A",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#FFFFFF",
      borderColor: "#BB1316",
    },
    quaternary: {
      color: "#000000",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
    },
    hover: {
      primary: {
        backgroundColor: "#FFE166",
        borderColor: "#FFE166",
      },
      secondary: {
        backgroundColor: "#2B2B2B",
        borderColor: "#2B2B2B",
      },
      tertiary: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
      "tertiary-negative": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
      "primary-warning": {
        backgroundColor: "#F17D39",
        borderColor: "#F17D39",
      },
      "secondary-warning": {
        backgroundColor: "#FFF5EF",
        borderColor: "#B34607",
      },
      "primary-danger": {
        backgroundColor: "#E02F32",
        borderColor: "#E02F32",
      },
      "secondary-danger": {
        backgroundColor: "#FFECEC",
        borderColor: "#94080A",
      },
      quaternary: {
        backgroundColor: "#E5E5E5",
        borderColor: "#E5E5E5",
      },
    },
    focus: {
      primary: {
        boxShadow: "0 0 0 3px rgba(59, 53, 220, 0.5)",
      },
      secondary: {
        boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.5)",
      },
      tertiary: {
        boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.5)",
      },
      "tertiary-negative": {
        boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.5)",
      },
      quaternary: {
        boxShadow: "0 0 0 3px rgba(225, 225, 225, 0.5)",
      },
      "primary-warning": {
        boxShadow: "0 0 0 3px rgba(211, 94, 26, 0.5)",
      },
      "secondary-warning": {
        boxShadow: "0 0 0 3px rgba(211, 94, 26, 0.5)",
      },
      "primary-danger": {
        boxShadow: "0 0 0 3px rgba(187, 19, 22, 0.5)",
      },
      "secondary-danger": {
        boxShadow: "0 0 0 3px rgba(187, 19, 22, 0.5)",
      },
    },
    active: {
      primary: {
        backgroundColor: "#E5B800",
        borderColor: "#E5B800",
      },
      secondary: {
        backgroundColor: "#4C4C4C",
        borderColor: "#4C4C4C",
      },
      tertiary: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
      "tertiary-negative": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      },
      "primary-warning": {
        backgroundColor: "#B34607",
        borderColor: "#B34607",
      },
      "secondary-warning": {
        color: "#B34607",
        borderColor: "#B34607",
      },
      "primary-danger": {
        backgroundColor: "#94080A",
        borderColor: "#94080A",
      },
      "secondary-danger": {
        color: "#94080A",
        borderColor: "#94080A",
      },
      quaternary: {
        backgroundColor: "#B3B3B3",
        borderColor: "#B3B3B3",
      },
    },
    disabled: {
      color: "#8F8C88",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: 0,
      borderRadius: "6px",
      backgroundColor: "#D6D2CC",
      borderColor: "#D6D2CC",
      "&:focus": {
        boxShadow: "0 0 0 3px rgba(195, 195, 190, 0.5)",
      },
    },
    sizes: {
      xs: {
        height: "1.25rem",
        padding: "0 0.375rem",
      },
      sm: {
        height: "2.125rem",
        padding: "0 0.75rem",
        fontSize: "NaNrem",
      },
      md: {
        height: "2.625rem",
        padding: "0 0.9375rem",
        fontSize: "0.875rem",
      },
      lg: {
        height: "3.0625rem",
        padding: "0 1.25rem",
        fontSize: "1rem",
      },
      xl: {
        height: "4.375rem",
        padding: "0 1.5rem",
        fontSize: "1.125rem",
      },
    },
  },
  breadcrumbs: {
    list: {
      fontSize: "0.875rem",
      fontWeight: "500",
      lineHeight: "1.92",
      padding: "0.625rem 0",
    },
    item: {
      default: {
        textDecoration: "none",
        color: "#737373",
      },
      hover: {
        color: "#000000",
      },
      active: {
        color: "#000000",
      },
    },
    separator: {
      padding: "0 0.625rem",
      color: "#737373",
    },
  },
  toasts: {
    default: {
      paddingLeft: "0.625rem",
      paddingRight: "0.625rem",
    },
    top: {
      paddingTop: "0.9375rem",
    },
    bottom: {
      paddingBottom: "0.9375rem",
    },
    growls: {
      default: {
        fontWeight: "400",
        fontSize: "0.875rem",
        lineHeight: 1.15,
        backgroundColor: "#B3B3B3",
        borderColor: "#EFEAE4",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "6px",
      },
      error: {
        backgroundColor: "#FFECEC",
        borderColor: "#BB1316",
      },
      warning: {
        backgroundColor: "#FFF5EF",
        borderColor: "#D35E1A",
      },
      info: {
        backgroundColor: "#EAF2FE",
        borderColor: "#1B57B2",
      },
      success: {
        backgroundColor: "#E6FAE7",
        borderColor: "#2F9237",
      },
      title: {
        fontFamily: "welcome-font, sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
        lineHeight: 1.2,
      },
    },
  },
  paginations: {
    default: {
      color: "#000000",
      fontWeight: "600",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "50%",
      width: "1.875rem",
      height: "1.875rem",
      "&:hover, &:focus": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
      "&:focus": {
        boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.5)",
      },
    },
    active: {
      color: "#FFFFFF",
      backgroundColor: "#FFCD00",
      borderColor: "#FFCD00",
      "&:hover, &:focus": {
        color: "#FFFFFF",
        borderColor: "#FFCD00",
        backgroundColor: "#FFCD00",
      },
      "&:focus": {
        boxShadow: "0 0 0 3px rgba(59, 53, 220, 0.5)",
      },
    },
    number: {
      fontSize: "0.875rem",
    },
    dots: {
      fontSize: "0.875rem",
      borderColor: "transparent",
      "&:hover, &:focus": {
        border: "none",
      },
    },
  },
  tabs: {
    tabsBorder: {
      horizontal: {
        boxShadow: "inset 0 -1px 0 #E5E5E5",
      },
      vertical: {
        boxShadow: "inset -1px 0 0 #E5E5E5",
      },
    },
    item: {
      default: {
        color: "#737373",
        fontWeight: "500",
        fontSize: "1rem",
        textDecoration: "none",
      },
      active: {
        color: "#000000",
      },
      focus: {
        color: "#000000",
      },
      disabled: {
        color: "#B3B3B3",
      },
    },
    panel: {
      vertical: {
        "&:focus": {
          outline: "none",
        },
      },
      horizontal: {
        marginTop: "1.25rem",
        "&:focus": {
          outline: "none",
        },
      },
    },
    activeBar: {
      horizontal: {
        background: "#FFCD00",
        height: "3px",
      },
      vertical: {
        background: "#FFCD00",
        width: "3px",
      },
    },
  },
  tags: {
    default: {
      fontWeight: "500",
      backgroundColor: "#FFFFFF",
      color: "#FFFFFF",
    },
    variants: {
      1: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#3FD1C1",
        backgroundColor: "#3FD1C1",
      },
      2: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#4AB519",
        backgroundColor: "#4AB519",
      },
      3: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#EA724C",
        backgroundColor: "#EA724C",
      },
      4: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#F0AABF",
        backgroundColor: "#F0AABF",
      },
      5: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#965FE6",
        backgroundColor: "#965FE6",
      },
      6: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#F4CF70",
        backgroundColor: "#F4CF70",
      },
      default: {
        backgroundColor: "#EFEAE4",
        color: "#737373",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: "1px",
        borderStyle: "solid",
      },
      primary: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#FFCD00",
        backgroundColor: "#FFCD00",
        color: "#FFFFFF",
      },
      secondary: {
        backgroundColor: "#F0AABF",
        color: "#FFFFFF",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: "1px",
        borderStyle: "solid",
      },
      dark: {
        backgroundColor: "#1A1A1A",
        color: "#B3B3B3",
        borderColor: "#2B2B2B",
        borderWidth: "1px",
        borderStyle: "solid",
      },
      success: {
        backgroundColor: "#E6FAE7",
        color: "#2F9237",
        borderColor: "#52B45A",
        borderWidth: "1px",
        borderStyle: "solid",
      },
      error: {
        backgroundColor: "#FFECEC",
        color: "#94080A",
        borderColor: "#BB1316",
        borderWidth: "1px",
        borderStyle: "solid",
      },
      warning: {
        backgroundColor: "#FFF5EF",
        color: "#B34607",
        borderColor: "#D35E1A",
        borderWidth: "1px",
        borderStyle: "solid",
      },
      info: {
        backgroundColor: "#EAF2FE",
        color: "#1B57B2",
        borderColor: "#3E7BD7",
        borderWidth: "1px",
        borderStyle: "solid",
      },
    },
    sizes: {
      sm: {
        padding: "0 0.375rem",
        height: "1.375rem",
        fontSize: "0.75rem",
      },
      md: {
        padding: "0 0.5rem",
        height: "1.75rem",
        fontSize: "0.875rem",
      },
      lg: {
        padding: "0 0.625rem",
        height: "2.125rem",
      },
    },
    shape: {
      sm: {
        width: "1.375rem",
        height: "1.375rem",
      },
      md: {
        width: "1.75rem",
        height: "1.75rem",
      },
      lg: {
        width: "2.125rem",
        height: "2.125rem",
      },
    },
  },
  texts: {
    h0: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "4.0625rem",
      lineHeight: 1.2,
      textTransform: "uppercase",
    },
    h1: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "2.8125rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "2.25rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "1.625rem",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "1.25rem",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "1rem",
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "0.875rem",
      lineHeight: 1.2,
    },
    body1: {
      fontWeight: "400",
      fontSize: "1.125rem",
      lineHeight: 1.15,
    },
    body2: {
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: 1.15,
    },
    body3: {
      fontWeight: "400",
      fontSize: "0.875rem",
      lineHeight: 1.15,
    },
    body4: {
      fontWeight: "400",
      fontSize: "0.75rem",
      lineHeight: 1.15,
    },
    button: {
      fontWeight: "600",
      fontSize: "0.75rem",
      lineHeight: 1.15,
    },
    subtitle1: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "0.8125rem",
      lineHeight: 1.2,
    },
    subtitle2: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "500",
      fontSize: "0.6875rem",
      lineHeight: 1.2,
    },
    meta1: {
      fontWeight: "400",
      fontSize: "0.875rem",
      lineHeight: 1.15,
    },
    meta2: {
      fontWeight: "400",
      fontSize: "0.75rem",
      lineHeight: 1.15,
    },
  },
  tooltips: {
    maxWidth: "12.5rem",
    backgroundColor: "#1A1A1A",
    color: "#B3B3B3",
    border: "1px solid #2B2B2B",
    padding: "0.375rem 0.625rem",
    fontSize: "0.75rem",
    borderRadius: "6px",
  },
  links: {
    default: {
      color: "#2B2B2B",
      fontWeight: "500",
      transition: "300ms ease",
    },
    primary: {
      default: [
        [
          "\n        > .wui-text {\n          \n      background-image: linear-gradient(0deg, #FFF8D9, #FFF8D9 100%);\n      background-repeat: no-repeat;\n      background-size: 100% 50%;\n      background-position-y: calc(200% - 1px);",
          null,
          "\n    ;\n        }\n      ",
        ],
      ],
      hover: [
        [
          "\n        > .wui-text {\n          \n      opacity: 1;\n      background-position-y: 100%;\n    ;\n        }\n      ",
        ],
      ],
    },
    secondary: {
      default: "",
      hover: {
        opacity: 0.6,
      },
    },
  },
  dropdownMenu: {
    inner: {
      fontSize: "0.875rem",
      minWidth: "8.125rem",
    },
    item: {
      padding: "0.625rem 0.75rem",
      backgroundColor: "transparent",
      color: "#6B6966",
      "&:hover": {
        backgroundColor: "#EFEAE4",
        color: "#000000",
      },
      "&:focus": {
        backgroundColor: "#EFEAE4",
        color: "#000000",
      },
      "&[disabled]": {
        backgroundColor: "transparent",
        color: "#D6D2CC",
        cursor: "not-allowed",
      },
    },
    separator: {
      backgroundColor: "#EFEAE4",
    },
  },
  tables: {
    th: {
      color: "#737373",
      fontWeight: "500",
      textAlign: "left",
      borderBottomColor: "#000000",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      padding: "1.25rem",
    },
    tr: {
      default: {
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      },
      error: {
        backgroundColor: "#FFECEC",
        color: "#94080A",
      },
      warning: {
        backgroundColor: "#FFF5EF",
        color: "#B34607",
      },
      info: {
        backgroundColor: "#EAF2FE",
        color: "#1B57B2",
      },
      success: {
        backgroundColor: "#E6FAE7",
        color: "#2F9237",
      },
      clickable: {
        cursor: "pointer",
      },
    },
  },
  cards: {
    default: {
      overflow: "hidden",
      color: "#4C4C4C",
    },
    cover: {
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
  },
  modals: {
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.55)",
      zIndex: 999,
    },
    default: {
      zIndex: 999,
    },
    footer: {
      borderTopColor: "#E5E5E5",
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      padding: "0.9375rem 1.5rem",
    },
    title: {
      borderBottomColor: "#E5E5E5",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      padding: "0.9375rem 1.5rem",
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "1.25rem",
      lineHeight: 1.2,
      paddingRight: "3.125rem",
    },
    gutter: "2rem",
    sizes: {
      sm: {
        width: "25rem",
      },
      md: {
        width: "34.375rem",
      },
      lg: {
        width: "42.5rem",
      },
      auto: {},
    },
    cover: {},
  },
  loaders: {
    xs: "0.5rem",
    sm: "0.625rem",
    md: "0.9375rem",
    lg: "1.25rem",
  },
  accordions: {
    padding: "1.25rem",
    wrapper: {
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E5E5",
    },
    icon: {
      color: "#000000",
    },
    content: {
      color: "#4C4C4C",
      fontSize: "0.875rem",
    },
    title: {
      color: "#000000",
      fontSize: "1rem",
      fontWeight: "600",
    },
  },
  swipers: {
    navigation: {
      bullet: {
        active: {
          backgroundColor: "#FFCD00",
        },
        default: {
          backgroundColor: "#D6D2CC",
        },
      },
    },
  },
  labels: {
    color: "#737373",
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  popovers: {
    default: {
      fontWeight: "400",
      fontSize: "0.875rem",
      lineHeight: 1.15,
      backgroundColor: "#151515",
      color: "#FFFFFF",
      borderColor: "#151515",
      maxWidth: "43.75rem",
      zIndex: 1,
    },
    content: {
      display: "block",
      padding: "0.75rem",
    },
    title: {
      fontFamily: "welcome-font, sans-serif",
      fontWeight: "600",
      fontSize: "0.875rem",
      lineHeight: 1.2,
      padding: "0.75rem 0.75rem 0.5rem",
      borderBottomColor: "#4C4C4C",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
    },
  },
  defaultFields: {
    default: {
      color: "#000000",
      fontSize: "0.875rem",
      lineHeight: "1rem",
      fontWeight: "400",
      backgroundColor: "#FFFFFF",
      borderColor: "#EFEAE4",
      borderWidth: "1px",
      borderStyle: "solid",
      outline: "none",
    },
    sizes: {
      sm: {
        height: "2rem",
        padding: "0.5rem 0.75rem",
      },
      md: {
        height: "2.25rem",
        padding: "0.625rem 0.75rem",
      },
      lg: {
        height: "2.5rem",
        padding: "0.75rem",
      },
    },
    checkableField: {
      checked: {
        color: "white",
      },
      disabled: {
        opacity: 0.4,
      },
    },
    disabled: {
      backgroundColor: "#D6D2CC",
      color: "#8F8C88",
      cursor: "not-allowed",
    },
    placeholder: {},
    focused: {
      default: {
        boxShadow: "0 0 0 3px rgba(59, 53, 220, 0.5)",
        borderColor: "#FFCD00",
      },
      error: {
        boxShadow: "0 0 0 3px rgba(148, 8, 10, 0.5)",
      },
      warning: {
        boxShadow: "0 0 0 3px rgba(179, 70, 7, 0.5)",
      },
    },
    checkablelabel: {
      default: {
        fontWeight: "400",
      },
      checked: {
        color: "#4C4C4C",
        "-webkit-text-stroke": "0.04em",
      },
    },
    select: {
      default: {
        maxHeight: "9.6875rem",
      },
      existing: {
        color: "#D6D2CC",
        cursor: "not-allowed",
      },
      highlighted: {
        backgroundColor: "#F6F3EF",
        cursor: "default",
      },
      selectedAndHighlighted: {
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)",
      },
      selected: {
        color: "#4C4C4C",
        fontWeight: "600",
      },
    },
    fieldset: {
      "border-width": "0",
    },
  },
  hints: {
    color: "#999999",
    fontSize: "0.75rem",
    fontWeight: "400",
  },
  checkboxes: {
    default: {
      width: "1.25rem",
      height: "1.25rem",
      flexShrink: 0,
    },
    disabled: {
      borderColor: "#8F8C88",
    },
    checked: {
      backgroundColor: "#FFCD00",
      borderColor: "#FFCD00",
    },
  },
  toggles: {
    item: {
      default: {
        width: "2.125rem",
        height: "1.125rem",
        borderRadius: "0.5625rem",
        backgroundColor: "#FFFFFF",
        borderColor: "#E5E5E5",
        borderWidth: "1px",
        borderStyle: "solid",
        marginTop: "0.15rem",
        "&:focus": {
          borderColor: "#FFCD00",
          boxShadow: "0 0 0 3px rgba(59, 53, 220, 0.5)",
        },
      },
      checked: {
        backgroundColor: "#FFCD00",
        borderColor: "#FFCD00",
      },
      disabled: {
        borderColor: "#8F8C88",
        backgroundColor: "#D6D2CC",
      },
    },
    after: {
      default: {
        width: 14,
        height: 14,
        backgroundColor: "#FFFFFF",
        borderColor: "#999999",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "50%",
      },
      checked: {
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
      },
      disabled: {
        borderColor: "#8F8C88",
        backgroundColor: "#8F8C88",
      },
    },
  },
  dateTimePickerCommon: {
    item: {
      selected: {
        color: "#FFFFFF",
        fontWeight: "600",
        backgroundColor: "#FFCD00",
        outline: "none",
      },
      today: {
        color: "#000000",
        fontWeight: "600",
      },
    },
  },
  textareas: {
    minHeight: "8.125rem",
  },
  filedrops: {
    default: {
      borderStyle: "dashed",
      minHeight: "12.5rem",
    },
    dragAccept: {},
    dragReject: {},
    disabled: {},
  },
  radios: {
    default: {
      width: "1.25rem",
      height: "1.25rem",
    },
    checked: {
      backgroundColor: "#FFCD00",
      borderColor: "#FFCD00",
    },
    withHint: {
      default: {
        fontSize: "1rem",
        color: "#000000",
      },
      hint: {
        marginTop: "0.5rem",
        color: "#4C4C4C",
      },
    },
  },
  radioTabs: {
    default: {
      "&:hover": {
        backgroundColor: "#EFEAE4",
      },
    },
    checked: {
      backgroundColor: "#FFCD00",
      color: "#FFFFFF",
      borderColor: "#FFCD00",
      "&:hover": {
        backgroundColor: "#FFE166",
      },
    },
  },
};
