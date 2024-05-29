import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
	let count = 0;

  const getData = () => {
    console.log("fetching data::", count++);
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const betterFunction = debounce(getData, 500);

  return (
    <div className="App">
      <input onChange={betterFunction} />
    </div>
  );
}

export default App;
