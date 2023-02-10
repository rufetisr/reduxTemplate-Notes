import { Increment } from "./Increment"
import { Decrement } from "./Decrement"
import { useSelector } from "react-redux"
// import { store } from "../Redux/store"
// import { useState, useContext } from "react";
// import {store} from '../Service/CounterContext'

export const Counter = () => {
    // const store = useSelector(store => store) //men birdefelik rootRedcuer object-nin icindeki counter i de goture bilerem.
    const counter = useSelector(store => store.counter) // bele
    // console.log(store); // bu object store-a gonderdiyim rootReducer-i elebil return edir, hemin counter prop-u da icinde olacaq ve hecne action yerine yetirmediyim ucun 0 olacaq.
    // useSelector ile store-daki state-leri read ede bilerik,
    return (
        <>
            <h1>Counter</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Increment />
                <span style={{ marginLeft: '10px', marginRight: '10px' }}>{counter}</span>
                <Decrement />
            </div>
        </>
    )
}

