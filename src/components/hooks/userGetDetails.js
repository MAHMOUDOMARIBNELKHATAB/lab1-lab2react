import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserGetDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(res.data);
        setProduct((prev) => {
          return { ...prev, ...res.data };
        });
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [id]);

  return [product];
};

export default UserGetDetails;