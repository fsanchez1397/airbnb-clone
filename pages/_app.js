import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,
  });
  const router = useRouter();
  router.events?.on("routeChangeStart", progress.start);
  router.events?.on("routeChangeComplete", progress.finish);
  router.events?.on("routeChangeError", progress.finish);
  return <Component {...pageProps} />;
}
