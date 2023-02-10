import React from "react"
import { useDispatch } from "react-redux"
// import { store } from "../Service/CounterContext";

export const Decrement = () => {
    // const obj = useContext(store);
    // let {num, setNum} = obj;
    let dispatch = useDispatch()


    const ClickMinus = () => {
        dispatch({
            type: 'Decrement',
            payload: 3
        })
    }

    return (
        <div>
            <button onClick={ClickMinus}>-</button>
        </div>
    )
}