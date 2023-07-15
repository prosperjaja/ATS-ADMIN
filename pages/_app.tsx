import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { AppProvider } from "../components/common/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </MantineProvider>
  );
}
