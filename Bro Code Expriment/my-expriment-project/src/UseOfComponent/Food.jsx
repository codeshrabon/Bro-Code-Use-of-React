function Food(){
    const food1 = 'Orange'
    const food2 = 'Apple'
    return (
        <ul>
            <li>Banana</li>
            <li>{food1.toLocaleUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food