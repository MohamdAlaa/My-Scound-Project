import React , { useState } from 'react';
import Dropdown from './component/Dropdown';
import Navbar from './component/Navbar';
import GlobalStyle from './globalStyles';
import Footer from './component/Footer';
import {Switch , Route} from 'react-router-dom'
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Rentals from './pages/Rentals';
import Homes from './pages/Homes';


function App() {

  const [isOpen , setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  }
  
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/> 
      <Dropdown isOpen={isOpen} toggle={toggle}/> 
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about'  component={About} />
        <Route path='/homes'  component={Homes} />
        <Route path='/rentals'  component={Rentals} />
        <Route path='/contact'  component={Contact} />
      </Switch>
      <Footer />  
    </>
  );
}

export default App;
