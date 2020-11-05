import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import { toggleDarkMode } from "../store/actions/app";

// routes
import HomePage from "../components/containers/home";

// shared
import SEO from "../components/shared/seo";
import LightSwitch from "../components/shared/light-switch";
import Footer from "../components/shared/footer";
import "../assets/index.scss";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const IndexPage = () => {
  const dispatch = useDispatch();

  const [isLightOff, setIsLightOff] = useState(
    typeof window !== "undefined" &&
      window.localStorage &&
      window.localStorage.getItem("theme")
      ? JSON.parse(window.localStorage.getItem("theme") || "{}")
      : false
  );

  const getTheme = (res: boolean) => {
    setIsLightOff(res);
  };

  useEffect(() => {
    dispatch(toggleDarkMode(typeof window !== "undefined" &&
      window.localStorage &&
      window.localStorage.getItem("theme")
      ? JSON.parse(window.localStorage.getItem("theme") || "{}")
      : false)
    );

    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === "theme") {
        dispatch(toggleDarkMode(JSON.parse(e.newValue)));
        setIsLightOff(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
    };
  }, []);

  return (
    <ThemeProvider theme={isLightOff ? darkTheme : lightTheme}>
      <SEO title="Home" />
      <CssBaseline />
      <LightSwitch onSwitch={getTheme} />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
