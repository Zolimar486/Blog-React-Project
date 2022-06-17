import './sidebar.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function SideBar(){
    const[cats, setCats]= useState([])

    useEffect(()=> {
        const getCats= async()=>{
            const res= await axios.get('/categories');
            setCats(res.data);
        };
        getCats();
    },[])


    return(
        <div className='side-bar'>
            <div className='sidebarItem'>
             <span className='sidebarTitle'>ABOUT ME</span>
             <img src='https://media-exp1.licdn.com/dms/image/C5603AQH2kfzJgjz0VQ/profile-displayphoto-shrink_200_200/0/1516929363488?e=1658966400&v=beta&t=zg0hODkW-Ddlf70ShMtT4W_q1tqZRwe2yAARBnawaxE' alt=""/>
             <p>I'm a Petroleum Engineer who learned how to use the Html, Css, Js, and React technology in order just to build and deploy this Blog, which is focused on the Life of an oil field, this blog contains suitable information to be used for new Engineers.
             </p>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c) =>  (
                     
                     <Link className="link1" to={`/?cat=${c.name}`}>
                     <li className='sidebarListItems'>{c.name}</li>
                     
                      </Link>
                    
                ))}
              
             
            </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW ME</span>
                <div className='sidebarSocial'>
                <i className='sidebarIcon fab fa-facebook-square '></i>
               <i className='sidebarIcon fab fa-twitter-square'></i>
               <i className='sidebarIcon fab fa-instagram-square'></i> 
                </div>
            </div>
        </div>
    )
}