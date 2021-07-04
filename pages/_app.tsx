import "../styles/global.sass";
import { AppProps } from "next/app";
import { grey } from "@material-ui/core/colors";
import { LangProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </ThemeProvider>
  );
}
