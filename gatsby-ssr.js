import React, { createElement } from "react"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"
import Layout from "./src/components/BaseLayout"
import { THEMES, THEME_STORAGE_KEY } from "./src/constants/app"

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (mode === '${THEMES.DARK}') {
			document.body.classList.add('${THEMES.DARK}');
		}
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  })
  setPreBodyComponents([script])
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

// Collect styled-components critical CSS during SSR and inject it into the
// document head, so the first paint is fully styled (no flash of unstyled
// content). Uses the styled-components v6 collectStyles API.
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet()
  const bodyHTML = renderToString(sheet.collectStyles(bodyComponent))
  const styleElements = sheet.getStyleElement()
  sheet.seal()
  replaceBodyHTMLString(bodyHTML)
  setHeadComponents(styleElements)
}
