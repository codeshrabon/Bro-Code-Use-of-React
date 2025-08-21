import PropTypes from 'prop-types'

function Lists(props){


    const categorys = props.category;
    const listOfItems = props.items;

    const listItems = listOfItems.map(item => <li key={item.id}>
                                                        {item.name}: &nbsp;
                                                        <b>{item.buyer}</b>
                                                        </li> );
        //listOfItems.sort((a,b) => a.name.localeCompare(b.name))
            
        return( <>
            <h2 className="list-category">{categorys}</h2>
            <ol className="list-items">{listItems}</ol>
        
        </> );



}
//setup a propTypes if someone use wrong data type 
Lists.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            buyer: PropTypes.string
        })
    )
}

Lists.defaultProps ={
    category : "Category",
    items :[],
}

export default Lists