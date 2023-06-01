import './Navbar.css';
import logo from '../../Assets/Images/logo1.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../Store/globalStore';
export default function Navbar(){
    const dispatch = useDispatch(setActiveTab);
    const handleTab=(tabName)=>{
        dispatch(setActiveTab(tabName));
    }
    const navigate = useNavigate();
    return(
       <div className="navbar-container nav nav-bar">
            <div className="logo">
                <img src={logo} alt="" />
                <label htmlFor="">SA Bazaar</label>
            </div>
            <div className="search-bar">
                <input className='search-b' type="search" placeholder='Search...'/>
                <button className=' btn-search'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="links">
                <ul>
                    <li className='active-tab' onClick={()=>handleTab('landingpage')}>Home</li>
                    <li onClick={()=>handleTab('myorders')}>Returns & Orders</li> 
                    <li onClick={()=>navigate("/login")}>Login</li>
                </ul>
            </div>
            <div className="goto">
                    <div className="icon-links">
                        <span><i class="fa-regular fa-user"></i></span>
                        <span>Profile</span>
                    </div>
                    <div className="icon-links">
                    <span><i class="fa-regular fa-user"></i></span>
                        <span>Bag</span>
                    </div>
            </div>
       </div>
    )
}