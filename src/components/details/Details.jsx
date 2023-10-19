import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css"
import Button from 'react-bootstrap/Button';


const Details = () => {

  const param = useParams();
  const [product,setProduct] = useState({})


const getSingleProduct = () => {

  return fetch(`https://fakestoreapi.com/products/${param.id}`)
  .then(res=>res.json())
  .then(json=>setProduct(json))
}

useEffect (()=> {
  getSingleProduct()
}, [])

return (


  <div className="singleProduct">
    <div className="product-img" >

<img src={product.image} alt="" />
    </div>
    <div className="product-details">

      <h2>{product.title}</h2>
      <h4> {product.category}</h4>
      <p>{product.description}</p>
      <h5> <sup>EGP</sup> {product.price} <sup>00</sup> </h5>
      <h6> Rate : {product.rating?.rate}</h6>

      <Button variant="primary" >Add to cart</Button>


    </div>
  </div>

  















  );
};

export default Details
