import React, { createElement } from "react"
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
