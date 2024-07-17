import logo from './logo.svg';
import './App.css';
import JsxExample from './components/jsxexample';
import Greeting from './components/greeting';
import EventAndStateTest from './components/eventandtest';
import Counter from './components/counter';
import UserGreeting from './conditionalrendering/usergreeting';

function App() {
  let name = 'Asmita';
  let age= '28';
  return (
    <div className="App">
      {/* <header className="App-header">
        Welcome
      </header> */}
      {/* <JsxExample/> */}
      {/* <Greeting name='Asmita' age={34}></Greeting> */}
      {/* <Greeting name={name} age={age}></Greeting> */}
      {/* <EventAndStateTest></EventAndStateTest> */}
      <Counter></Counter>
      <UserGreeting></UserGreeting>
    </div>
  );
}

export default App;
