import "../styles/globals.scss";
import PageWrapper from "../components/PageWrapper";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { StylesContext } from "../context/StylesContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StylesContext>
      <AnimatePresence mode="wait">
        <PageWrapper key={router.pathname}>
          <Component {...pageProps} />
        </PageWrapper>
      </AnimatePresence>
    </StylesContext>
  );
}

export default MyApp;
