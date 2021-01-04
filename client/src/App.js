import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Rules from './components/QuizGame/Rules/Rules';
import Result from './components/QuizGame/Result/Result';
import Home from './components/Home/Home';
import MemoryGame from './components/MemoryGameMatch/MemoryGame';
import SignIn from './components/Chatroom/Join/Join';
import Chat from './components/Chatroom/Chat/Chat';
import GameGK from './components/QuizGame/Gk/GameGK';
import GameGTW from './components/QuizGame/Guesstheword/GameGTW';
import GameMeaning from './components/QuizGame/WordMeaning/GameMeaning';
import Learning from './components/Learning/Learning';
import Ebooks from './components/Ebooks/Ebooks';
import GameMenu from './components/Games/Games';
import Sandhi from './components/Learning/Grammar/Sandhi';
import Samas from './components/Learning/Grammar/Samas';
import Karak from './components/Learning/Grammar/Karak';
import Pratyay from './components/Learning/Grammar/Pratyay';
import Avyay from './components/Learning/Grammar/Avyay';
import Alankar from './components/Learning/Grammar/Alankar';
import Prayavachi from './components/Learning/Grammar/Prayavachi';
import ShabRoop from './components/Learning/Grammar/ShabRoop';
import Upsarga from './components/Learning/Grammar/Upsarga';
import Vilom from './components/Learning/Grammar/Vilom';
import Kriya from './components/Learning/Grammar/Kriya';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learn" exact component={Learning} />
          <Route path="/chatroom" exact component={SignIn} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/ebooks" exact component={Ebooks} />
          <Route path="/game" exact component={GameMenu} />
          <Route path="/game/memorygame" exact component={MemoryGame} />
          <Route path="/game/quiz/result" exact component={Result} />
          <Route path="/game/quiz/rules" exact component={Rules} />
          <Route path="/game/quiz/gk/play" exact component={GameGK} />
          <Route path="/game/quiz/guesstheword/play" exact component={GameGTW} />
          <Route path="/game/quiz/meaning/play" exact component={GameMeaning} />
          <Route path="/learn/grammer/sandhi" exact component={Sandhi} />
          <Route path="/learn/grammer/samas" exact component={Samas} />
          <Route path="/learn/grammer/karak" exact component={Karak} />
          <Route path="/learn/grammer/pratyay" exact component={Pratyay} />
          <Route path="/learn/grammer/avyay" exact component={Avyay} />
          <Route path="/learn/grammer/alankar" exact component={Alankar} />
          <Route path="/learn/grammer/prayavachi" exact component={Prayavachi} />
          <Route path="/learn/grammer/shabroop" exact component={ShabRoop} />
          <Route path="/learn/grammer/upsarga" exact component={Upsarga} />
          <Route path="/learn/grammer/vilom" exact component={Vilom} />
          <Route path="/learn/grammer/kriya" exact component={Kriya} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
