import React, { useEffect, useState } from 'react';
// import { getStoredCart } from '../../utilities/fakedb';
import FashionProductCard from '../FashionProductCard/FashionProductCard';



    
const FashionProducts = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("https://mocki.io/v1/65089873-4536-4902-b349-dd04f462a1e9")
    fetch('./fashion.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   //getStoredCart from fakeDb
  //   if (products.length) {
  //     const savedCart = getStoredCart();
  //     for (const id in savedCart) {
  //       const cartProduct = products.find(product => product.id === id);
  //       console.log(id, cartProduct);
  //     }
  //   }
  // }, [products])
  
    return (
        <section className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 thumbnail-img text-md-start text-sm-center mt-4">
            <img className="" src="https://s3.envato.com/files/263247617/male%20fashion%20accessories%20img%20prvw.jpg" alt="" />
          </div>
          <div className="col-md-8">
            <div className="row">
              {products.map((product) => (
                <FashionProductCard key={product.id} product={product} handleAddToCart={props.handleAddToCart}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default FashionProducts;