import './style/style.css';
import './style/productscreen.css';
import './style/side-bar.css';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {

  const openAsideBar = () => {
    document.querySelector('.side-bar').classNameList.add('open');
  };

  const closeAsideBar = () => {
    document.querySelector('.side-bar').classNameList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <nav>
            <div className="brand">
              <button onClick={openAsideBar}>
                &#9776;
                    </button>
            </div>
            
              <div id="brand_name"><Link to="/">Fest<span className="logo-break">rush</span></Link></div>
            
            <ul className="navbar">
              <li><Link to="shopping-cart.html" className="btn">Cart</Link></li>
              <li><Link to="sign-in.html" className="btn">
                <span className="material-icons">account_circle</span>&nbsp;Sign In</Link>
              </li>
            </ul>
          </nav>
        </header>
        <aside id="mySidebar" className="side-bar">
          <h3>Check Our Categories</h3>
          <button className="side-bar-close-btn" onClick={closeAsideBar}>X</button>
          <ul>
            <li><Link to="#"><i className="material-icons">face</i><span className="icon-text">Shirt</span></Link></li>
            <li><Link to="#"><i className="material-icons">directions_run</i><span className="icon-text">Pants</span></Link></li>
            <li><Link to="#"><i className="material-icons">do_not_step</i><span className="icon-text">Shoes</span></Link></li>
          </ul>
        </aside>
        <main id="main" className="main">        
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" exact={true} component={ProductScreen} />      
          </div>
        </main>
        <footer className="footer">
          <div>Fest<span className="logo-break">rush</span> &copy; 2020 <br /> All Rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
