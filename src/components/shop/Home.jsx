import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { Link } from "react-router-dom";
import { Prev } from "react-bootstrap/esm/PageItem";
import Loader from "../loader/loader";
import useGetProduct from "../hooks/useGetProduct";

const Home = () => {
  const [products, loading, error] = useGetProduct();

  return (
    <>
      <Loader loading={loading} error = {error}>
        <div id="product-item">
          {products.map((products) => {
            return (
              <div className="singelCard">
                <Card>
                  <img variant="top" src={products.image} />
                  <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <p> {products.category}</p>

                    <p>
                      {" "}
                      <sup>EGP</sup> {products.price} <sup>00</sup>{" "}
                    </p>
                    <p> Rate : {products.rating.rate}</p>
                    <Link to={`/home/${products.id}`} className="primary">
                      View details
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Loader>
    </>
  );
};

export default Home;
