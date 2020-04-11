import React, { useMemo } from "react";
import { createTheming } from "@callstack/react-theme-provider";
import { useColorScheme } from "react-native";
const { useTheme, ThemeProvider } = createTheming({});
const P = ({ theme: propTheme, ...props }) => {
  const scheme = useColorScheme();
  const theme = useMemo(() => {
    if (typeof propTheme === "function") return propTheme(scheme);
    else if (propTheme[scheme]) return propTheme[app];
  }, [scheme, propTheme]);
  return <ThemeProvider {...props} theme={theme} />;
};
const useStyles = (f) => {
  const isDark = useColorScheme() === "dark";
  const theme = useTheme();
  const styles = useMemo(() => {
    if (typeof f === "function") return f(theme, isDark);
    else if (f[scheme]) return f[scheme];
    else return f;
  }, [f, appearance, theme]);
  return styles;
};
export default P;
export { P as ThemeProvider, useStyles, useTheme };
