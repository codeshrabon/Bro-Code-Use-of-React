// using react hook useState(), the function onClick() method
/* onChange() = this is an event handler method. this is used
                primarily with from elements ex. <input> <testarea> <select> <radio>
                trigger a function every time the value of the input changes.
 */
import React, {useState} from "react";


function OnlineCartSystem(){
    const [name, setName] = useState("guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("")


    function handleNameChange (event) {
        setName(event.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleSHippingChange(e){
        setShipping(e.target.value);
    }
    return(
        <>
        <h4>Online Cart System</h4>
        <input value={name} onChange={handleNameChange} type="text" />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity > 0 ? quantity : !quantity}</p>
        
        <textarea value={comment} onChange={handleCommentChange} 
        placeholder="Enter delivery instruction"></textarea>
        <p>Comment: {comment}</p>

        <select name="payment-options" id="payment-options"
        value={payment} onChange={handlePaymentChange}>
            <option value="">Select Payment</option>
            <option value="Visa">Visa</option>
            <option value="Master Card">Master Card</option>
            <option value="American Express">American Express</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value= "Pick up"
            checked={shipping ==="Pick up"} onChange={handleSHippingChange}/>

            Pick Up
        </label>
        
        <label>
            <input type="radio" value="Delivery"
            checked={shipping === "Delivery"} onChange={handleSHippingChange}/>

            Delivery
        </label>
        <p>Shipping: {shipping}</p>
        
        </>
    );

}

export default OnlineCartSystem