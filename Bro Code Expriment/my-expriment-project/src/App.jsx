import Header from './UseOfComponent/Header.jsx'
import Footer from './UseOfComponent/Footer.jsx'
import Food from './UseOfComponent/Food.jsx'
import Card from './CardComponents/Card.jsx'
import Student from './UseOfProps/Student.jsx'
import UserGreeting from './UseOfGreeting/UserGreeting.jsx'
import List from './Lists/List.jsx'
import ListOfPack from './Lists/ListOfPack.jsx'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [active,setActive] = useState("Home")
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
        {/* Using conditional rendaring */}
      {/* <UserGreeting isLoggedIn={false} userName = "user" /> */}

      {/* <List /> */}
      {/* Uses all sort of rendering from sort to keep the data align */}
      {/* <ListOfPack /> */}

      {/* <Router>
        <div>
          <h1>Welcome to home page</h1>

          <nav>
            <ul>
              <li><Link to="/Header">Header</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path='/Header' element={<Header />}></Route>
          </Routes>
        </div>
      </Router> */}

      <Router>
      <div>
        <h1>Welcome to Home Page</h1>
        
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/Header">Header</Link></li>
            <li><Link to="/footer">Footer</Link></li>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/card">Card</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/greeting">Greeting</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/listofpack">ListOfPack</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Home Page Content</h2>} />
          <Route path="/Header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/food" element={<Food />} />
          <Route path="/card" element={<Card />} />
          
          <Route path="/greeting" element={<UserGreeting isLoggedIn={false} userName="user" />} />
          <Route path="/list" element={<List />} />
          <Route path="/listofpack" element={<ListOfPack />} />
        </Routes>
        
      </div>
    </Router>

    </>
  )
}

export default App
