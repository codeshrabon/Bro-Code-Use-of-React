import React, {useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("#b78686ff");

    function handleColorChange(e){
        setColor(e.target.value)
    }

    return(
        <>
        <div className="color-picker-container">
            <h3>Color Picker</h3>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Seleted Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange} />

        </div>
        </>
    );

}

export default ColorPicker;