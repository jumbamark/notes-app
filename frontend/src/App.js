import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<NotesListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
