import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksArticlesContainer from './components/HooksArticlesContainer';
import logo from './img/NewYorkTimes.png'; // with import



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <img src={logo}></img>
     {/* <DataContainer /> */}
     <HooksArticlesContainer />
    </div>
    </Provider>
  );
}

export default App;
