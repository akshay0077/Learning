import React from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { incNumber,decNumber } from "./actions";

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment and Decrement Counter App</h1>
        <h3>using React Redux</h3>

        <div className="quality">
          <button onClick={dispatch(decNumber())}>-</button>
          <input type="text" name="quality" value={myState} />
          <button onClick={dispatch(incNumber())}>+</button>
        </div>
      </div>
    </>
  );
};

export default App;
