import { useState } from "react";
import './counter.css'
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { increment ,decrement } from "../../redux/slice/counterSlice";
import { useDispatch } from "react-redux";
 
const About = () => { 
  const dispatch = useDispatch()

  const counterGlobalState = useSelector(store => store.counter); 
  console.log(counterGlobalState.counter);

  const handelIncrement =() => {
    dispatch(increment())

  }
  const handeldecrement =() => {
    dispatch(decrement())

  }

    return (
      <div  className="counter"> 
        Counter App 
        <div> 
          {counterGlobalState.counter} 
        </div> 
        <div className="buttons"> 
        <Button onClick={handelIncrement}  variant="primary">Increment</Button>{' '}

        <Button   onClick={handeldecrement}   variant="danger">Decrement</Button>{' '}

        
        </div> 
      </div> 
    ) 
  };
  
  export default About;
  