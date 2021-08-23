import AsyncBootstrap from "@Components/AsyncBootstrap"
import {Routes} from "@Nav/routes"
import {ThemeProvider} from "@Utils/styled-components"
import {theme} from "@Utils/theme"
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native"
import React from "react"
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  configureFonts,
} from "react-native-paper"
import {SafeAreaProvider} from "react-native-safe-area-context"

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
}

const fontConfig = {
  bold: {
    fontFamily: "SFProDisplay-Bold",
    fontWeight: "900" as const,
  },
  regular: {
    fontFamily: "SFProDisplay-Regular",
    fontWeight: "400" as const,
  },
  medium: {
    fontFamily: "SFProDisplay-Medium",
    fontWeight: "400" as const,
  },
  light: {
    fontFamily: "sans-serif-light",
    fontWeight: "300" as const,
  },
  thin: {
    fontFamily: "sans-serif-thin",
    fontWeight: "400" as const,
  },
}

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: theme.colors.background,
    primary: theme.colors.primary,
    accent: theme.colors.accent,
    text: theme.fonts.colors.primary,
    placeholder: theme.fonts.colors.placeholder,
  },
  fonts: configureFonts({
    default: fontConfig,
    android: fontConfig,
    ios: fontConfig,
  }),
}

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: theme.colors.background,
    primary: theme.colors.primary,
    accent: theme.colors.accent,
    text: theme.fonts.colors.primary,
    placeholder: theme.fonts.colors.placeholder,
  },
  fonts: configureFonts({
    default: fontConfig,
    android: fontConfig,
    ios: fontConfig,
  }),
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const globalTheme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={globalTheme}>
        <SafeAreaProvider>
          <AsyncBootstrap theme={globalTheme} {...{fonts}}>
            <Routes />
          </AsyncBootstrap>
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeProvider>
  )
}
