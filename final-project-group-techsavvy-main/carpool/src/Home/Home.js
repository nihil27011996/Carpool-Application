import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
import './Home.css';
import img from '../Images/home5.jpeg';


const Home = () =>{

    return(
        
  

        <div className='main'>
             <div>
             <img className='home5' src={img} style={{ width: "100%" }}  alt="logo"/>
                {/* <h1 >
                    Ride Share
                </h1>
                 */}
              
               
                <h2>
                <Link to ='/login'>
             <button className='car'>
                Car Pool It !
            </button>
                </Link>
            </h2>
            </div>
            {/* <div className='logos'>
            <img className='logos1' src='/images/safety.png' alt="logo"/>
            <img className='logos2' src='/images/privacy.png' alt="logo"/>
            <img className='logos3' src='/images/security.png' alt="logo"/>

            </div> */}
          
            
            {/* <div>
                <img className='home4' src='/images/home4.png' alt="logo"/>
                
            </div>  */}
        </div> 
      
            
    );

  
};
export default Home;