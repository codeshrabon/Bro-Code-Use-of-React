/* React hooks = a special function that allowa functional components
                to use React features without writing class components 
                (useState, useEffect, useContext, useReducer, useCallback... more)


                useState() = A React hook that allows the creation of a stateful(value can change overtime) variable 
                and a setter function to update its values in the Virtual DOM.
                [name, setName]
 */


import MyComponent from "./UseOfHooks/MyComponent"


function UseHooksApp(){

    return(
        <>
        <MyComponent /> 
        </>
    )

}

export default UseHooksApp