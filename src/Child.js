import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>Bootcamp Urdu Class 5 State Management Assignment submitted by Muhammad Javaid Nawab</h1>
            <h2>Github Repository : https://github.com/Mjavaidnawab/session5</h2>
            <h3>Surge URL : http://javaidnawab-state-context-usereducer.surge.sh/</h3>
            <br/>
            <h2>This is first Child using Counter Context</h2>
            <h4>Counter Value is : {counterValue[0]}</h4>
            <button onClick={()=>{counterValue[1] (++counterValue[0])}}>Increment Context</button>
            <br/>
            </div>
)

}
export default Child;