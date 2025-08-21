import Lists from "./Lists/Lists"
function Apps(){

    const fruit = [
            {id:1,name:"banana", buyer:"canada"},
            {id:2,name:"apple" , buyer: "USA"}, 
            {id:3,name :"mango", buyer: "sauth africa"}, 
            {id:4,name :"orange", buyer: "austrelia"}, 
            {id:5,name: "pinapple", buyer: "china"}, 
            {id:6,name: "guava", buyer: "uganda"}
        ];
    
    const vegetables = [
            {id:7, name:"potatos", buyer:"USA"},
            {id:8,name:"cucumber" , buyer: "Canada"}, 
            {id:9,name :"ladyfingers", buyer: "North africa"}, 
            {id:10,name :"Red chili", buyer: "Belgium"}, 
            {id:11,name: "paper", buyer: "Malesiya"}, 
            {id:12,name: "carrots", buyer: "Africa"}
        ];

            return(

                <>
                {/* Here is a catch if we dont want to use tenary operator 
                    we can also use && operation ... cause data is always true 
                */}
                {fruit.length > 0 && <Lists items={fruit} category="Fruits" /> }
               {vegetables.length > 0 && <Lists items={vegetables} category="Vegetables" />}

               {/* We need to add some default prompts incase we dont have data  */}
                </>
                
            );
}

export default Apps