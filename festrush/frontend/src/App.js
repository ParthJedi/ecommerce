import './Style/style.css';
import './Style/homescreen.css';
import './Style/side-bar.css';
import data from './data';


function App() {

  const openAsideBar = () => {
    document.querySelector('.side-bar').classList.add('open');
  };

  const closeAsideBar = () => {
    document.querySelector('.side-bar').classList.remove('open');
  };

  return (
    <div class="grid-container">
      <header class="header">
        <nav>
          <div class="brand">
            <button onClick={openAsideBar}>
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
        <button class="side-bar-close-btn" onClick={closeAsideBar}>X</button>
        <ul>
          <li><a href="#"><i class="material-icons">face</i><span class="icon-text">Shirt</span></a></li>
          <li><a href="#"><i class="material-icons">directions_run</i><span class="icon-text">Pants</span></a></li>
          <li><a href="#"><i class="material-icons">do_not_step</i><span class="icon-text">Shoes</span></a></li>
        </ul>
      </aside>
      <main id="main" class="main">
        <div class="content">
          <ul class="products">
            {
              data.products.map(product => {
                return (
                  <li>
                    <div class="product">
                      <img class="product-image" src={product.image} alt="product" />
                      <div class="product-name"><a href="product.html">{product.name}</a></div>
                      <div class="product-brand">{product.brand}</div>
                      <div class="product-price">${product.price}</div>
                      <div class="product-ratings">{product.rating} Stars (from {product.reviewsCount} reviews)</div>
                    </div>
                  </li>
                );
              })
            }

          </ul>
        </div>
      </main>
      <footer class="footer">
        <div>Fest<span class="logo-break">rush</span> &copy; 2020 <br /> All Rights Reserved</div>
      </footer>
    </div>
  );
}

export default App;
