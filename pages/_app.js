import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";
import "../styles/argon-design-system-react.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
