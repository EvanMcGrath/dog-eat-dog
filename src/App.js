import './App.css';
import Header from './components/Header/Header';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <LeaderBoard/>
    </div>
  );
}

export default App;
