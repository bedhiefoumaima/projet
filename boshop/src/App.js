import React from "react";
import data from "./data";

function App() {
  return (
    <div classname="grid-container">
        <header classname="row">
         <div>
             <a classname="brand" href="index.html">BOSHOP</a>
         </div>
         <div>
             <a href="cart.html">Cart</a>
             <a href="signin.html">Sign In</a>
         </div>
        </header>

        <main>
            <div> 
              <div classname="row center">
                {
                  data.products.map(product=> (
              
                    <div key ={product.id}classname="card">
                    <a href={`/product/${product.id}`}>
  *                    <img classname="medium" src= {product.image} alt= {product.title} />
                    </a>
                    <div classname="card-body">
                    <a href={`/product/${product.id}`}>
                        <h2>{product.title}</h2>
                      </a>
                      <div classname="rating">
                        <span> <i classname="fa fa-star"></i> </span>
                        <span> <i classname="fa fa-star"></i> </span>
                        <span> <i classname="fa fa-star"></i> </span>
                        <span> <i classname="fa fa-star"></i> </span>
                        <span> <i classname="fa fa-star"></i> </span>
                      </div>
                      <div classname="price">${product.price}</div>
                   </div> 
                   </div>
                   
  
                  )
                    )
                }
               </div>
               </div>
               
          </main>
        <footer classname="row center">
         All right reserved
        </footer>

    </div>
    
  ) ;
}

export default App;
  