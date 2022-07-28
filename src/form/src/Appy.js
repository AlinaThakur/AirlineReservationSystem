import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { AddUser, RemoveUser } from "./actions/index";
import ChildCom from "./ChildCom";

function Appy() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.counter);
 
  
  return (
    <>
      <div className="container">
        <h1>
          <ChildCom header="Add user/Remove user">
           <p>Using Redux</p>
           </ChildCom>
           </h1>
        {/* <h2>{num}</h2> */}
       <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(RemoveUser())}
          >
          <button> - </button>
          </a>
            <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
            onChange={(e) =>(e.target.value)}
             />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(AddUser())}
          >
            <button> + </button>
          </a>
       </div>
      </div>
    </>
  );
}

export default Appy;
