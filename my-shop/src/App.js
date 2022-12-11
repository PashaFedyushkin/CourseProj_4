import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from './pages/homepage';
import { BookPage } from './pages/bookpage';
import { Header } from './components/header';
import { store } from "./redux";

function App() {
  return (
    <Provider store ={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element = { <HomePage /> } />
            <Route path="/app/:title" element = { <BookPage /> } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
