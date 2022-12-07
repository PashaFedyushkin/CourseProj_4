import {
  Route,
  Router,
  Routes,
} from "react-router-dom";
import {HomePage} from './pages/homepage';
import {Header} from './components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/">
            <HomePage />
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
