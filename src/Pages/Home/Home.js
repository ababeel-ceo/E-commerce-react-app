import { useSelector } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import Navbar from '../Navbar/Navbar';
import Profile from "../../Components/Profile/Profile";
import MyOrder from "../../Components/MyOrders/MyOrder";
import './Home.css'
export default function Home() {
  const activeTab = useSelector(state => state.tabs.activeTab);

  return (
  <>
    <div className="nav-container">
      <Navbar />
    </div>  
    <div className="landpage-container ">
      {(activeTab === 'landingpage' && <LandingPage />) || 
       (activeTab === 'profile' && <Profile/>)||
       (activeTab === 'myorders' && <MyOrder/> )}
    </div>
    </>
  );
}
