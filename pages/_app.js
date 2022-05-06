import 'bootstrap/dist/css/bootstrap.css';
import "../css/custom.css";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }, AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp;