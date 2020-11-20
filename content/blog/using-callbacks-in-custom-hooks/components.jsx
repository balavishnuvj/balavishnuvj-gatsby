import React from "react"
import CodeDemo from "../../../src/components/CodeDemo"

function useIntervalWithMissingDep(callback, interval) {
  React.useEffect(() => {
    const id = setInterval(callback, interval)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval])
}

function useIntervalWithDeps(callback, interval) {
  React.useEffect(() => {
    const id = setInterval(callback, interval)
    return () => clearInterval(id)
  }, [callback, interval])
}

function useInterval(callback, interval) {
  const callbackRef = React.useRef()

  React.useEffect(() => {
    callbackRef.current = callback // Update ref to the latest callback.
  }, [callback])

  // Set up the interval.
  React.useEffect(() => {
    function cb() {
      callbackRef.current()
    }
    if (interval !== null) {
      let id = setInterval(cb, interval)
      return () => clearInterval(id)
    }
  }, [interval])
}

function Counter({ count, reset }) {
  return (
    <CodeDemo>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1>{count}</h1>
        <button
          type="button"
          onClick={reset}
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          RESET
        </button>
      </div>
    </CodeDemo>
  )
}

function CounterWithMissingDep() {
  let [count, setCount] = React.useState(0)
  useIntervalWithMissingDep(() => {
    setCount(count + 1)
  }, 1000)
  return <Counter count={count} reset={() => setCount(0)} />
}

function CounterWithDeps() {
  let [count, setCount] = React.useState(0)
  useIntervalWithDeps(() => {
    setCount(count + 1)
  }, 1000)
  return <Counter count={count} reset={() => setCount(0)} />
}

function DoubleCounter() {
  let [count1, setCount1] = React.useState(0)
  let [count2, setCount2] = React.useState(0)
  useIntervalWithDeps(() => {
    setCount1(count1 + 1)
  }, 1000)
  useIntervalWithDeps(() => {
    setCount2(count2 + 1)
  }, 2000)
  return (
    <React.Fragment>
      <Counter count={count1} reset={() => setCount1(0)} />
      <Counter count={count2} reset={() => setCount2(0)} />
    </React.Fragment>
  )
}

function DoubleCounterWithMemo() {
  let [count1, setCount1] = React.useState(0)
  let [count2, setCount2] = React.useState(0)
  const handleFirstCounter = React.useCallback(() => {
    setCount1(c => c + 1)
  }, [])

  const handleSecondCounter = React.useCallback(() => {
    setCount2(c => c + 1)
  }, [])

  useIntervalWithDeps(handleFirstCounter, 1000)
  useIntervalWithDeps(handleSecondCounter, 2000)
  return (
    <React.Fragment>
      <Counter count={count1} reset={() => setCount1(0)} />
      <Counter count={count2} reset={() => setCount2(0)} />
    </React.Fragment>
  )
}

function DoubleCounterWithStep() {
  let [count1, setCount1] = React.useState(0)
  let [count2, setCount2] = React.useState(0)
  let [step, setStep] = React.useState(1)
  const handleFirstCounter = React.useCallback(() => {
    setCount1(c => c + step)
  }, [step])

  const handleSecondCounter = React.useCallback(() => {
    setCount2(c => c + step)
  }, [step])

  useIntervalWithDeps(handleFirstCounter, 1000)
  useIntervalWithDeps(handleSecondCounter, 2000)
  return (
    <React.Fragment>
      <Counter count={count1} reset={() => setCount1(0)} />
      <Counter count={count2} reset={() => setCount2(0)} />
      <button onClick={() => setStep(s => s + 1)}>Step: {step}</button>
    </React.Fragment>
  )
}

function FinalDoubleCounter() {
  let [count1, setCount1] = React.useState(0)
  let [count2, setCount2] = React.useState(0)
  useInterval(() => {
    setCount1(count1 + 1)
  }, 1000)
  useInterval(() => {
    setCount2(count2 + 1)
  }, 2000)
  return (
    <React.Fragment>
      <Counter count={count1} reset={() => setCount1(0)} />
      <Counter count={count2} reset={() => setCount2(0)} />
    </React.Fragment>
  )
}

function FinalDoubleCounterWithStep() {
  let [count1, setCount1] = React.useState(0)
  let [count2, setCount2] = React.useState(0)
  let [step, setStep] = React.useState(1)
  useInterval(() => {
    setCount1(count1 + step)
  }, 1000)
  useInterval(() => {
    setCount2(count2 + step)
  }, 2000)
  return (
    <React.Fragment>
      <Counter count={count1} reset={() => setCount1(0)} />
      <Counter count={count2} reset={() => setCount2(0)} />
      <button onClick={() => setStep(s => s + 1)}>Step: {step}</button>
    </React.Fragment>
  )
}

export {
  CounterWithMissingDep,
  CounterWithDeps,
  DoubleCounter,
  DoubleCounterWithMemo,
  FinalDoubleCounter,
  DoubleCounterWithStep,
  FinalDoubleCounterWithStep,
}
