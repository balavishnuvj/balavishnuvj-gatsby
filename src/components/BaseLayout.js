import React, { useState, useEffect, useLayoutEffect } from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
} from "styled-components"
import { DARK_THEME, LIGHT_THEME } from "../utils/theme"
import SinglePageLayout from "./SinglePageLayout"
import BlogLayout from "./BlogLayout"
import { THEMES, THEME_STORAGE_KEY } from "../constants/app"

/**
 * A hook to get and update the current theme for dark mode
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
  const storedTheme = () =>
    typeof window !== "undefined" &&
    window.localStorage.getItem(THEME_STORAGE_KEY)
  const [theme, setTheme] = useState(storedTheme || THEMES.LIGHT)
  const toggleTheme = () =>
    setTheme(prevTheme => {
      return prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    })
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    }
  }, [theme])
  return [theme, toggleTheme]
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props =>
      props.themeName && (props.theme.isDark ? "#1f1f1f" : "#f4f3f9")};
    &.dark {
      background-color: #1f1f1f;
    }
    color: ${props => props.theme.textColor};
    a {
      color:  ${props => (props.theme.isDark ? "#80bafe" : "#007acc")};
    }
    transition-delay: ${({ themeName, count }) =>
      themeName === "dark" && count > 0 ? "0.75s" : "0s"};
      ${({ count }) =>
        count > 0 ? "transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);" : ""}
    * {
      font-family: 'Open Sans';
      ${
        false &&
        css`
          outline: 1px solid red;
        `
      }
    }
  }
`

const Wrapper = styled.div``

const Layout = ({ location, title, children, path }) => {
  const [key, forceUpdate] = useState(0)
  useLayoutEffect(() => {
    // let react take care of dynamic styles
    document.body.classList.remove("dark")
    forceUpdate(1) // after mounting, remove the class from body
  }, [])
  const [theme, toggleTheme] = useTheme()
  const isDarkTheme = theme === THEMES.DARK
  console.log("LOG: : Layout -> theme", theme)
  const themeObj = isDarkTheme ? DARK_THEME : LIGHT_THEME

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle theme={themeObj} themeName={theme} count={key} />
      <Wrapper key={`${key}_${path}`}>
        {path.startsWith("/blog") ? (
          <BlogLayout toggleTheme={toggleTheme}>{children}</BlogLayout>
        ) : (
          <SinglePageLayout toggleTheme={toggleTheme}>
            {children}
          </SinglePageLayout>
        )}
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
