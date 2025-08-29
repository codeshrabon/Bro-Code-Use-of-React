// we are updating array of objects in state 

import { useState } from "react";

function UpdateArrayOfObjects(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleCarChange(){
        // new array for new data 
        const newCars = {year:carYear, make:carMake, model:carModel};

        setCars(c => [...c, newCars]);

        /* after input is done we like to clear the the input  */
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

        console.log(newCars);

    }

    function handleRemoveCar(index){
        // we use filter method and use updater function 
        // inside filter we have element and index which we use as i , 
        // if i !==index it will remove the element 
        // there is no use of element so we use undescore to ignore it....
        setCars(c => c.filter((element,i) => i !==index))

    }

    function handleCarYearChange(e){
        setCarYear(e.target.value);

        
    }

    function handleCarMakeChange(e){
        setCarMake(e.target.value);

    }

    function handleCarModelChange(e){
        setCarModel(e.target.value);
    }


return(
    <>
    <div>
        <h4>Updating Array of Objects in state</h4>
        <h4>List of Car Objects</h4>

        {/* create car order lists */}
        <ul>
            {/* time to use array element with map method to complete input and show  
            cars array interact with map and seperate the array elements(car) and with index 
            using key to keep track of indexs and every index indicate each elements */}
            {cars.map((car, index) => 
            /* to remove the data from the list of array we use onClick callback evenet handler 
                inside list component using index but here is the catch 
                in calback method we need index in the argument 
                so to interact with the callback use arrow function
            */
                                <li key={index} onClick={()=> handleRemoveCar(index)}>
                                    {car.year} {car.make} {car.model}
                                </li>
                                )}
        </ul>

        {/* Three inputs */}
        <input type="number" id="carYearInput" value={carYear}  onChange={handleCarYearChange}/> <br />
        <input type="text" id="carMakeInput" value={carMake}  onChange={handleCarMakeChange} placeholder="Enter car make"/> <br />
        <input type="text" id="carModelInput" value={carModel}  onChange={handleCarModelChange} placeholder="Enter car model"/>
        <br />
        <button onClick={handleCarChange}>Add Car</button>
    </div>
    </>
);
}

export default UpdateArrayOfObjects