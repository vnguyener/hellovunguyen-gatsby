
import React, { useEffect, useState } from "react";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

// routes
import HomePage from "../components/containers/home";

// shared
import SEO from "../components/shared/seo"
import LightSwitch from '../components/shared/light-switch';
import Footer from "../components/shared/footer";
import '../assets/index.scss';

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const IndexPage = () => {
  const [isLightOff, setIsLightOff] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme") || '{}') : false);

  const getTheme = (res) => {
    setIsLightOff(res);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === "theme") {
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
