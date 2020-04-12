import React, { useMemo } from "react";
import { createTheming } from "@callstack/react-theme-provider";
import { useColorScheme } from "react-native";
const { useTheme, ThemeProvider } = createTheming({});
const P = ({ theme: propTheme, ...props }) => {
  const scheme = useColorScheme();
  const theme = useMemo(() => {
    if (!propTheme) return {};
    if (typeof propTheme === "function") return propTheme(scheme);
    else if (propTheme[scheme]) return propTheme[app];
  }, [scheme, propTheme]);
  return <ThemeProvider {...props} theme={theme} />;
};
const useStyles = (f, options) => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const theme = useTheme();
  const styles = useMemo(() => {
    if (!f) throw "No styles object or func provided to useStyles";
    if (typeof f === "function") return f(theme, isDark, options);
    else if (f[scheme]) return f[scheme];
    else return f;
  }, [f, theme, isDark, options]);
  return styles;
};
export default P;
export { P as ThemeProvider, useStyles, useTheme };
