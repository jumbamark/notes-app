import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NotesPage from './pages/NotesPage';

function App() {

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />

          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
