"use client";
import {
  ThemeProviderProps,
  ThemeProvider as NextThemesProviders,
} from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProviders {...props}>{children}</NextThemesProviders>;
};
export default ThemeProvider;
