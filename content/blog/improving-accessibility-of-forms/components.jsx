import React from "react"
import CodeDemo from "../../../src/components/CodeDemo"

function BadForm() {
  const [state, setState] = React.useState({})
  function handleSubmit() {
    alert(JSON.stringify(state))
  }
  function handleChange(name, value) {
    setState(current => ({ ...current, [name]: value }))
  }
  return (
    <CodeDemo>
      <div>
        <h3>Login</h3>
        <div>
          <span>Email</span>
          <input
            onChange={event => handleChange("username", event.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <input
            type="password"
            onChange={event => handleChange("password", event.target.value)}
          />
        </div>
        <div
          onClick={handleSubmit}
          style={{
            padding: "4px 16px",
            border: "1px solid darkgrey",
            display: "inline-block",
            backgroundColor: "lightgrey",
          }}
        >
          Login
        </div>
      </div>
    </CodeDemo>
  )
}

function OkForm() {
  function handleSubmit(event) {
    event.preventDefault()
    const { elements } = event.target
    const { email, password } = elements
    alert(JSON.stringify({ email: email.value, password: password.value }))
  }
  return (
    <CodeDemo>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <section>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </section>
        <section>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </section>
        <button id="signin" type="submit">
          Login
        </button>
      </form>
    </CodeDemo>
  )
}

function BetterForm() {
  function handleSubmit(event) {
    event.preventDefault()
    const { elements } = event.target
    const { email, "current-password": password } = elements
    alert(JSON.stringify({ email: email.value, password: password.value }))
  }
  return (
    <CodeDemo>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <section>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            autoComplete="username"
            required
          />
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="current-password"
            type="password"
            autoComplete="current-password"
            required
          />
        </section>
        <button id="signin">Login</button>
      </form>
    </CodeDemo>
  )
}

export { BadForm, OkForm, BetterForm }
