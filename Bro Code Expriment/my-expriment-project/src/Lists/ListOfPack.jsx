function ListOfPack(){

    const listOfFruits = [{id: 1,name : "mango", calories: 50},
                            {id: 2,name :"guava", calories: 30}, 
                            {id: 3,name :"pinapple", calories: 52}, 
                            {id: 4,name :"apple", calories: 110}, 
                            {id: 5,name :"jack fruit", calories: 239}, 
                            {id: 6,name :"banana", calories: 34}, 
                            {id: 7,name :"papaya", calories: 67}]
    listOfFruits.sort((a,b) => a.name.localeCompare(b.name));
    const fruitList = listOfFruits.map(fruit => <li key= {fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    return (<ol>{fruitList}</ol>);

}

export default ListOfPack