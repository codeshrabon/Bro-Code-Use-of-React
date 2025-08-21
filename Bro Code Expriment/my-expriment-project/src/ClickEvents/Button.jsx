function Button(){

    // a callback arrow function
    const handleClick = () => console.log("Hey whats up");

    // template string ${expression} of string 
    const handleClick2 = (name) => console.log(`${name} Stop it`);

    // count how many time the button has been clicked 
    let count = 0;

    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);

        }else{
            console.log(`${name} stop clicking me`);
        }
    }

    // event parameter 
    /* const handleClick4 = (e) => console.log(e); */
    // using the textxontent inside the e parameter
    const handleClick4 = (e) => e.target.textContent= "OUCH";
    


    return (
        <>
        <button onClick={handleClick}>Click me</button><br />
        <button onClick={() => handleClick2("Faysal")}>Click me and watch</button><br />
        <button onClick={() => handleClick3("Faysal")}>Click and see</button><br />
        <button onClick={(e) => handleClick4(e)}>Event handler one click</button><br />
        <button onDoubleClick={(e) => handleClick4(e)}>Event handler doble click</button>
            {/* onClick is for one time click 
                if we use onDoubleClick we need to press two time
            */}
        </>
    );

}

export default Button