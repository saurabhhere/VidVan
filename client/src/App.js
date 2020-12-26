import {Redirect,Route,Switch,BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Practice from './components/Practice';
import Learning from './components/Learning';
import Writing from './components/Writing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Navbar />
         <Switch>
           <Route path="/" render={(props)=><Home/>} />
           <Route path="/learn" render={(props)=><Learning/>}/>
           <Route path="/practice" render={(props)=><Practice/>}/>
           <Route path="/write" render={(props)=><Writing/>}/>
           <Redirect to="/"/>
         </Switch>
         <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
