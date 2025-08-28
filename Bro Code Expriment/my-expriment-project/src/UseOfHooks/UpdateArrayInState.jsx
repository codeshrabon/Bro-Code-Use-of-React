import React, {useState} from "react";

function UpdateArrayInState(){
const [foods, setFood] = useState(["Apple", "Orange", "Banana"]);

function handleFoodChange(){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood(f => [...f, newFood]);
    console.log(newFood)
    

}

// we delete element by index number
function handleRemoveFood(index){
    setFood(foods.filter((_, i) => i !== index));

}
    return(
        <>
        <h4>Update Array in State</h4>
        <div>
            <h4>List of Food Items</h4>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput"
        placeholder="Enter food name" />
        <button onClick={handleFoodChange}>Add</button>
        </div>
        
        </>
    );
}

export default UpdateArrayInState