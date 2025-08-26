/* React hooks = a special function that allowa functional components
                to use React features without writing class components 
                (useState, useEffect, useContext, useReducer, useCallback... more)


                useState() = A React hook that allows the creation of a stateful(value can change overtime) variable 
                and a setter function to update its values in the Virtual DOM.
                [name, setName]

                onChange() = this is an event handler method. this is used
                primarily with from elements ex. <input> <testarea> <select> <radio>
                trigger a function every time the value of the input changes.

 */


import CounterComponent from "./UseOfHooks/CounterComponent"
import MyComponent from "./UseOfHooks/MyComponent"
import OnlineCartSystem from "./UseOfHooks/OnlineCartSystem"


function UseHooksApp(){

    return(
        <>

        {/* this is use on onClick function to see the value changes in real time  */}
        <OnlineCartSystem />

        {/* we use hooks to implement in different section with out defining extra component  */}
        {/* <CounterComponent /> */}
        
        {/* here we show how we use hooks in different opinion */}
        {/* <MyComponent />  */}
        </>
    )

}

export default UseHooksApp