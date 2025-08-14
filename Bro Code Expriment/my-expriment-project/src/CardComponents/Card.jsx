import FaysalPicture from './Faysal Ahmed.png'

function Card(){
    return(
        <div className='card'>
            <img className='card-image' src={FaysalPicture} alt="Profile_Pic" /> 
            <h2 className='card-title'>Faysal Ahmed</h2>
            <p className='card-text'>I am a Java developer with Springboot framework</p>
        </div>
    );

}

export default Card