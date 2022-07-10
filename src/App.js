import { useState } from "react"

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")
  
  const ops = ["*", "/", "+", "-", "."]
  
  const update = value => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const equalEffect = () => {
    setCalc(result.toString())
    setResult("")
  }

  const delEffect = () => {
    setCalc(eval(calc.slice(0, -1)))
    setResult(calc.slice(0, -1))
  }

  const clearEffect = () => {
    setCalc("")
    setResult("")
  }

  const nine = () => {
    const digits = []
    for (let i = 1;i<10;i++) {
      digits.push(
      <button 
        onClick={() => update(i.toString())} 
        key={i}>{i}
      </button>)
    }

    return digits
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          { result ? <span>({result})</span>: "" }{ calc || "0" }
        </div>

        <div className="operators">
          <button onClick={() => update("+")}>+</button>
          <button onClick={() => update("-")}>-</button>
          <button onClick={() => update("*")}>*</button>
          <button onClick={() => update("/")}>/</button>
          <button onClick={delEffect}>Del</button>
        </div>

        <div className="digits">
          {nine()}
          <button onClick={() => update("0")}>0</button>
          <button onClick={() => update(".")}>.</button>
          <button onClick={() => equalEffect()}>=</button>
        </div>
        <button onClick={clearEffect} className="clear">Clear All</button>
      </div>
    </div>
  );
}

export default App;
