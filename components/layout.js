import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/actions/themeActions";
import palette from "../theme/palette";
import MainAppBar from "./appbar";

export default function Layout({ children, page }) {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme());
  }, [dispatch]);

  // only recalculate theme value when dark changes (useMemo)
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...palette,
          type: dark ? "dark" : "light",
        },
      }),
    [dark]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          borderRadius: 0,
        }}
      >
        <MainAppBar />
        <Container maxWidth='md'>{children}</Container>
      </Paper>
    </ThemeProvider>
  );
}
