import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Learning from './components/Learning';
import Writing from './components/Writing';
import Rules from './components/QuizGame/Rules/Rules';
import Result from './components/QuizGame/Result/Result';
import Home from './components/Home/Home';
import MemoryGame from './components/MemoryGameMatch/MemoryGame';
import GameGTW from './components/QuizGame/Guesstheword/Game/GameGTW';
import SignIn from './components/Chatroom/Join/Join';
import Chat from './components/Chatroom/Chat/Chat';
import GameGK from './components/QuizGame/Gk/GameGK';
import GameMeaning from './components/QuizGame/WordMeaning/GameMeaning';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learn" exact component={Learning} />
          {/* <Route path='/learn/video' exact component = {VideoLecture} /> */}
          <Route path="/chatroom" exact component={SignIn} />
          <Route path="/chat" component={Chat} />
          <Route path="/game/memorygame" exact component={MemoryGame} />
          <Route path="/game/quiz/result" exact component={Result} />
          <Route path="/game/quiz/rules" exact component={Rules} />
          <Route path="/game/quiz/gk/play" exact component={GameGK} />
          <Route path="/game/quiz/guesstheword/play" exact component={GameGTW} />
          <Route path="/game/quiz/meaning/play" exact component={GameMeaning} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
