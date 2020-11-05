import './Style/style.css';
import './Style/homescreen.css';
import './Style/side-bar.css';
import product_image from './images/p2.jpg';

function App() {
  return (
    <div class="grid-container">
        <header class="header">
          <nav>
              <div class="brand">
                  <button onclick="openAsideBar()">
                      &#9776;
                  </button>
              </div>
              <div id="brand_name">Fest<span class="logo-break">rush</span></div>
              <ul class="navbar">
                  <li><a herf="shopping-cart.html" class="btn">Cart</a></li>
                  <li><a herf="sign-in.html" class="btn">
                      <span class="material-icons">account_circle</span>&nbsp;Sign In</a>
                  </li>
              </ul>                    
          </nav>
        </header>
        <aside id="mySidebar" class="side-bar">
            <h3>Check Our Categories</h3>
            <button class="side-bar-close-btn" onclick="closeAsideBar()">X</button>
            <ul>
                <li><a href="#"><i class="material-icons">face</i><span class="icon-text">Shirt</span></a></li>
                <li><a href="#"><i class="material-icons">directions_run</i><span class="icon-text">Pants</span></a></li>
                <li><a href="#"><i class="material-icons">do_not_step</i><span class="icon-text">Shoes</span></a></li>
            </ul>
        </aside>
        <main id="main" class="main">
          <div class="content">
            <ul class="products">
              <li>
                  <div class="product">
                      <img class="product-image" src={product_image} alt="product" />                                
                      <div class="product-name"><a href="product.html">Om Namo Shivaya</a></div>
                      <div class="product-brand">Obscurus Apparels</div>
                      <div class="product-price">$33</div>
                      <div class="product-ratings">4.4 Stars (11 reviews)</div>                                
                  </div>
              </li>
              <li>
                  <div class="product">
                      <img class="product-image" src={product_image} alt="product" />                                
                      <div class="product-name"><a href="product.html">Om Namah Shivaya</a></div>
                      <div class="product-brand">Obscurus Apparels</div>
                      <div class="product-price">$33</div>
                      <div class="product-ratings">4.4 Stars (11 reviews)</div>                                
                  </div>
              </li>
              <li>
                  <div class="product">
                      <img class="product-image" src={product_image} alt="product" />                                
                      <div class="product-name"><a href="product.html">Om Namah Shivaya</a></div>
                      <div class="product-brand">Obscurus Apparels</div>
                      <div class="product-price">$33</div>
                      <div class="product-ratings">4.4 Stars (11 reviews)</div>                                
                  </div>
              </li>                 
              <li>
                  <div class="product">
                      <img class="product-image" src={product_image} alt="product" />                                
                      <div class="product-name"><a href="product.html">Om Namah Shivaya</a></div>
                      <div class="product-brand">Obscurus Apparels</div>
                      <div class="product-price">$33</div>
                      <div class="product-ratings">4.4 Stars (11 reviews)</div>                                
                  </div>
              </li>
            </ul>
          </div>
        </main>
        <footer class="footer">
          <div>Fest<span class="logo-break">rush</span> &copy; 2020 <br/> All Rights Reserved</div>
        </footer>    
        </div>
  );
}

export default App;
