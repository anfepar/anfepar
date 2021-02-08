import "../styles/global.css";
import { AppProps } from "next/app";
import {
  createMuiTheme,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { LangProvider } from "@/components/LanguageProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[500],
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </ThemeProvider>
  );
}
