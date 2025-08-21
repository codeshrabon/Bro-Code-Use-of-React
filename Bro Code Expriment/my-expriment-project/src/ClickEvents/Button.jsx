function Button(){

    // a callback arrow function
    const handleClick = () => console.log("Hey whats up");

    // template string ${expression} of string 
    const handleClick2 = (name) => console.log(`${name} Stop it`);

    return (
        <>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => handleClick2("Faysal")}>Click me and watch</button>
        </>
    );

}

export default Button