import './App.css';
import Header from './components/Header/Header';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Main from './components/Main/Main';
import{BrowserRouter, Routes, Route}  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

      <Routes>
      <Route path='/' element = {<Main/>}/>
      <Route path='/leaderboard' element = {<LeaderBoard/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
