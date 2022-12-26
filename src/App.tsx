import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import TimerParent from "./components/TimerParent";
import User from "./components/User";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <hr />
      <User />
      <hr />
      <TimerParent />
      <hr />
      <CounterReducer />
      <hr />
      <Form />
      <hr />
      <Form2 />
    </>
  );
}

export default App;
