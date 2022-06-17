import SideBar from '../../Components/Sidebar/SideBar';
import './single.css';
import SinglePost from '../../Components/SinglePost/SinglePost';


export default function Single(){
    return(
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    )
}