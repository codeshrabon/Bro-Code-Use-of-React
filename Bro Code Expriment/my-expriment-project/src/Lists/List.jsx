function List(){
    const fruits = [{id:10,name:"banana", buyer:"canada"},
         {id:11,name:"apple" , buyer: "USA"}, 
         {id:12,name :"mango", buyer: "sauth africa"}, 
         {id:13,name :"orange", buyer: "austrelia"}, 
         {id:14,name: "pinapple", buyer: "china"}, 
         {id:15,name: "guava", buyer: "uganda"}]


        /* To sort those data */
        fruits.sort((a,b) => a.name.localeCompare(b.name)) /* in alphabetical order */
        fruits.sort((a,b) => b.name.localeCompare(a.name)) /* in reverse alphabetical order */
    const fruitItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.buyer}</li> );
    
    return(
        <ol>{fruitItem}</ol>
    );
}

export default List