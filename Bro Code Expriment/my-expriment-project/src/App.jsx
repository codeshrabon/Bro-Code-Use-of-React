import Header from './UseOfComponent/Header.jsx'
import Footer from './UseOfComponent/Footer.jsx'
import Food from './UseOfComponent/Food.jsx'
import Card from './CardComponents/Card.jsx'
import Student from './UseOfProps/Student.jsx'
import UserGreeting from './UseOfGreeting/UserGreeting.jsx'

function App() {
  return(
    <>
      {/* <Header />
      <Food />
      <Footer /> */}
      {/* now we use card components to see something new  */}
      {/* <Card /> */}
      
      {/* Use of props in function */}
      {/* <Student name = "Faysal Ahmed" age= {25} isStudent ={true}/>
      <Student name = "Shrabon Ahmed" age= {45} isStudent ={false}/>
      <Student name = "Russell Ahmed" age= {15} isStudent ={true}/>
      <Student name = "Multan Ahmed" age= {20} isStudent ={false}/>
      <Student name = "Andu Bandu"/> */}

      {/* Use of props in function */}

      <UserGreeting isLoggedIn={false} userName = "Faysal" />

    </>
  )
}

export default App
