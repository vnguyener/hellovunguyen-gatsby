import React from "react"
import { useTheme } from "@material-ui/core"
import About from "./about"
import Title from "./title"
import Skills from "./skills"
import SelfDoodle from "../../shared/doodle"
import "./style.scss"

const Home = () => {
  const theme = useTheme()
  const themeType = theme.palette.type

  return (
    <div className={`page ${themeType}`}>
      <div className="root-container">
        <Title />
        <SelfDoodle />
        <About />
        <Skills />
      </div>
    </div>
  )
}

export default Home
