import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Examples from "../components/examples";
import Layout from "../components/layout";
import { startClock } from "../store/actions/counterActions";
import { setTheme } from "../store/actions/themeActions";
const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
    dispatch(setTheme());
  }, [dispatch]);

  const dark = useSelector((state) => state.theme.dark);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      common: {
        black: "#fff",
      },
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  });

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Layout page="homepage">
        <div className="root">
          <Examples />
          <Link href="/show-redux-state">
            <a>Click to see current Redux State</a>
          </Link>
        </div>
        <style jsx>
          {`
            a {
              color: inherit;
              text-decoration: none;
            }
            .root {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          `}
        </style>
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
