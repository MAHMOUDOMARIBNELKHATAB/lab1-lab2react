import { useEffect , useState } from "react"
import axios from "axios";


const useGetProduct = () =>{
    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(false)

    useEffect(() => {
        const getProducts = async ()=> {
          setLoading(true)
          try{
            const res = await axios.get('https://fakestoreapi.com/products')
            setProducts ((Prev) => {
              return [...Prev ,...res.data]
            })
  
            setLoading(false)
          }
           catch (error){ 
             setError('Network server error ')
              setLoading(false)
  
          }
      
        };
        getProducts()
      
    }, []);


    return  [ products, loading, error]

    

}

export default useGetProduct