import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setEmployee] = useState();

    const updateName= () => {
        /* name = "Faysal";
        console.log(name); */

        setName("Faysal")
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleEmployedStatus = ()=> {
        setEmployee(!isEmployee);
    }



    return(

        <>
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Employee: {isEmployee ?"Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>
        </div>
        </>
    );


}

export default MyComponent