import React from 'react';
import './App.css';

import MainComponent from './MainComponent/MainComponent';
import CoachingComponent from './CoachingComponent/CoachingComponent';
import ChanteuseComponent from './ChanteuseComponent/ChanteuseComponent';
import ContactComponent from './ContactComponent/ContactComponent';




import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import ScrollToTopRoute from './ScrollToTopRoute';

const Home = () => <MainComponent />
const Coaching = () => <CoachingComponent />
const Chanteuse = () => <ChanteuseComponent />
const Contact = () => <ContactComponent />


function App() {
  return (
    <Router>


      {/*
     <ScrollToTopRoute exact path="/" component={MainComponent} />
     <ScrollToTopRoute exact path="/CoachingComponent" component={CoachingComponent} />
     <ScrollToTopRoute exact path="/ChanteuseComponent" component={ChanteuseComponent} />
     <ScrollToTopRoute exact path="/ContactComponent" component={ContactComponent} />


      <NavBar/>
      <HeaderComponent logo={logo}/>
      <CardsComponent margotImgCard1={margotImgCard1} margotImgCard2={margotImgCard2}/>
      <YouTubeComponent/>
      <Footer/>
      */}


      <Switch>
        <ScrollToTopRoute path="/" exact component={MainComponent} />
        <ScrollToTopRoute path="/CoachingComponent" exact component={CoachingComponent} />
        <ScrollToTopRoute path="/ChanteuseComponent" exact component={ChanteuseComponent} />
        <ScrollToTopRoute exact path="/ContactComponent" exact component={ContactComponent} />

      </Switch>
    </Router>
  );
}

export default App;

