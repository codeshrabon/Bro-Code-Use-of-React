function Lists(props){


    const listOfItems = props.items;

    const listItems = listOfItems.map(item => <li key={item.id}>
                                                        {item.name}: &nbsp;
                                                        <b>{item.buyer}</b>
                                                        </li> );

        return( <ol>{listItems}</ol> );



}

export default Lists