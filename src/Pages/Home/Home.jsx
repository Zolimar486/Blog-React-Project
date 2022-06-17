import './home.css';
import Header from '../../Components/Header/Header.jsx';
import Posts from '../../Components/Posts/Posts';
import SideBar from '../../Components/Sidebar/SideBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';



export default function Home(){
 const [posts, setPosts] = useState([]);
 const {search}= useLocation();


 useEffect(() => {
   const fetchPosts= async()=> {
     const res = await axios.get('/posts' + search);
     setPosts(res.data)
     
     
   }
   fetchPosts();
 },[search])
  
    return(
       <>
          <Header />
          <div className='wrapper'>
             <Posts posts={posts} />
             <SideBar />
            </div> 
      </>
        
    
    );
}