import './App.css';
import ImageCarousel from './Components/ImageCarousel';
import Posts from './Components/Post';
import {Link, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import AboutPage from './Components/About';
import MainPage from './Components/MainPage';
import Users from './Components/Users';
import Reviews from './Components/Reviews';
import DarkMode from './Components/DarkMode';


const NavBar = () => {
  return <div class="head" style={{justifyContent: "flex-end"}}>
    <Link to="/final">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/clients">Last Clients</Link>
    <Link to="/reviews">Reviews</Link>
    <Link to="/about">About</Link>
    <Link to="/signup">Sign Up</Link>
    <DarkMode></DarkMode>
  </div>
}


function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Switch>
        <Route path="/final" exact component={MainPage} />
        <Route path="/posts" component={Posts} />
        <Route path="/projects" component={ImageCarousel} />
        <Route path="/clients" component={Users} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/about" component={AboutPage} />
        <Route path="/signup" component={Form} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;