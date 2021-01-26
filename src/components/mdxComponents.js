import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled, { css } from "styled-components"
import theme from "prism-react-renderer/themes/nightOwl"
import { bpDesktopOnly } from "../utils/breakpoints"

// import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { rhythm } from "../utils/typography"

const RE = /{([\d,-]+)}/

const wrapperStyles = css`
  overflow: auto;
  margin-left: -${rhythm(1)};
  margin-right: -${rhythm(1)};
  max-width: 100vw;
  ${bpDesktopOnly} {
    margin-left: -80px;
    margin-right: -80px;
  }
`

const preStyles = css`
  float: left;
  min-width: 100%;
  overflow: initial;
`

const Pre = styled.pre`
  padding: 16px;
  border-radius: 4px;
`

// lifted this from mdx-utils
// it doesn't compile it's code and this busted IE, so I'm just vendoring it.
function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)
    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    }
  }
}

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

// function LiveDemoEditor({codeString, children}) {
//   console.log('LOG: : LiveDemoEditor -> children', children);
//   return (
//     <LiveProvider code={codeString} theme={theme}>
//       <LiveEditor />
//       <LiveError />
//       <LivePreview />
//     </LiveProvider>
//   )
// }

function Code({ codeString, language, metastring }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const shouldShowLineNumbers =
    !metastring || !metastring.includes("no-line-numbers")
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div css={wrapperStyles}>
          <Pre className={className} style={style} css={preStyles}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? "highlight-line" : "",
                })}
              >
                {shouldShowLineNumbers ? (
                  <span
                    css={css`
                      display: inline-block;
                      width: 2em;
                      user-select: none;
                      opacity: 0.3;
                    `}
                  >
                    {i + 1}
                  </span>
                ) : null}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </div>
      )}
    </Highlight>
  )
}

export default {
  wrapper: ({ children }) => children,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    // if (props.live === 'true') {
    //   return <LiveDemoEditor {...props} />
    // }
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <Pre {...preProps} />
    }
  },
}
