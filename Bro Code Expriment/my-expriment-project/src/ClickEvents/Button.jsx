function Button(){

    // a callback arrow function
    const handleClick = () => console.log("Hey whats up");

    // template string ${expression} of string 
    const handleClick2 = (name) => console.log(`${name} Stop it`);

    // count how many time the button has been clicked 
    let count = 0;

    const handleChicl3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);

        }else{
            console.log(`${name} stop clicking me`);
        }
    }


    return (
        <>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => handleClick2("Faysal")}>Click me and watch</button>
        <button onClick={() => handleChicl3("Faysal")}>Click and see</button>
        </>
    );

}

export default Button