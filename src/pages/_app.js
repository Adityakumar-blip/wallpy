import RootLayout from "@/MainLayout/RootLayout";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps, router }) {
  return (
    <RecoilRoot>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </RecoilRoot>
  );
}
