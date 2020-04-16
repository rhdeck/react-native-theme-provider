import React, { useMemo, useState, useEffect } from "react";
import { createTheming } from "@callstack/react-theme-provider";
import { useColorScheme, Appearance } from "react-native";
import { useAppState } from "@react-native-community/hooks";
const { useTheme, ThemeProvider } = createTheming({});
const useStateColorScheme = () => {
  const [scheme, setScheme] = useState(Appearance.getColorScheme());
  const ucsScheme = useColorScheme();
  useEffect(() => {
    setScheme(ucsScheme);
  }, [ucsScheme]);
  const state = useAppState();
  useEffect(() => {
    setScheme((scheme) => Appearance.getColorScheme());
  }, [state]);
  console.log("new color scheme is ", scheme);
  return scheme;
};
const P = ({ theme: propTheme, ...props }) => {
  const scheme = useStateColorScheme();
  const theme = useMemo(() => {
    if (!propTheme) return {};
    if (typeof propTheme === "function") return propTheme(scheme);
    else if (propTheme[scheme]) return propTheme[app];
  }, [scheme, propTheme]);
  return <ThemeProvider {...props} theme={theme} />;
};
const useStyles = (f, options) => {
  const scheme = useStateColorScheme();
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
