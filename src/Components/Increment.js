import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
// import { store } from '../Service/CounterContext';
import * as actions from '../Redux/Actions/action'

export const Increment = () => {
    // let {num, setNum} = useContext(store);
    const dispatch = useDispatch();

    // console.log(actions.inc);

    const ClickPlus = () => {
        //indi bu funksiya reducer-a emrler gondermelidi. action objecti ile.
        // bunuda sade dilde desek dispetcer Dispatch yerine yetirir.
        // ve dispatch-e action-ni gonderirik
        dispatch({
            type: actions.inc, // yeni bu action.type bas versin
            payload: 3
        })
    }

    return (
        <div>
            <button onClick={ClickPlus}>+</button>
        </div>
    )
}

