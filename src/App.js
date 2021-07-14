import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksArticlesContainer from './components/HooksArticlesContainer';
import ArticlesContainer from './components/ArticlesContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <DataContainer /> */}
     <HooksArticlesContainer />
    </div>
    </Provider>
  );
}

export default App;
