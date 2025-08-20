import Lists from "./Lists/Lists"
function Apps(){

    const fruit = [
            {id:10,name:"banana", buyer:"canada"},
            {id:11,name:"apple" , buyer: "USA"}, 
            {id:12,name :"mango", buyer: "sauth africa"}, 
            {id:13,name :"orange", buyer: "austrelia"}, 
            {id:14,name: "pinapple", buyer: "china"}, 
            {id:15,name: "guava", buyer: "uganda"}];

            return(
                <Lists items={fruit} category="Fruits" />
            );
}

export default Apps