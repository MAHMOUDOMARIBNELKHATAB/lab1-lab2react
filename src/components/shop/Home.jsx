import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";
import {Link } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <>

      <div id="product-item">
        {products?.map((products) => {
          return (
            <div className="singelCard">
              <Card>
                <img variant="top" src={products.image} />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <p> {products.category}</p>

                  <p> <sup>EGP</sup> {products.price} <sup>00</sup> </p>
                  <p> Rate : {products.rating.rate}</p>
                  <Link to={`/home/${products.id}`}className="primary">View details</Link> 
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
