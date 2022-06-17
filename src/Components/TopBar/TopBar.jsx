import './topbar.css';
import {Link} from 'react-router-dom';
import { Context } from '../../context/Context';
import {useContext} from 'react'

export default function TopBar(){
    const {user, dispatch}= useContext(Context)
    const PF= "http://localhost:5000/images/"

    const handleLogout = ()=> {
         dispatch({type:"LOGOUT"})
    }
    return(
        <div className='top'>
           <div className='topleft'>
               <i className='top-icons fab fa-facebook-square '></i>
               <i className='top-icons fab fa-twitter-square'></i>
               <i className='top-icons fab fa-instagram-square'></i>
           </div>
           <div className='topcenter'>
               <ul className='top-list'>
                
                   <li className='top-items'>
                       <Link className ="link1" to="/" >HOME</Link>
                    </li>
                   
                   <li className='top-items'><Link className="link1" to="/">ABOUT</Link></li>
                   <li className='top-items'><Link className="link1" to="/quiz">QUIZ</Link> </li>
                   
                   <li className='top-items' ><Link className="link1" to="/write">WRITE</Link> </li>
                   
                   <li className='top-items' onClick={handleLogout} > 
                       {user && "LOGOUT"}
                   </li>
                
               </ul>
           </div>
           <div className='topright'>
               {
                user ? (
                    <Link to='/settings'>
                    <img
              className="topImg"
              src={ PF + user.profilePic}
              alt=""
            />
            </Link>
             ) : (
                 <ul className="top-list">
                 <li className="top-items">
                 <Link className="link1" to="/login">LOGIN</Link>
                </li>
                  <li className="top-items">
                 <Link className ="link1" to="/register">REGISTER</Link>
                 </li>
                 </ul>
             )
               }
         
               <i className='top-search fas fa-search'></i>
           </div>
        </div>
    )
}