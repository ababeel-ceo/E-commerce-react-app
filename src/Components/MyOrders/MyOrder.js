
import './MyOrder.css';
import { useSelector } from 'react-redux';
export default function MyOrder(){
    const subTabs = useSelector(state=>state.tabs.subTabs);
    const activeSubTab = useSelector(state=>state.tabs.activeSubTab);
    const handleTapClick=()=>{
        
    }
   
    return(
        <div className="container-fluid">
            <h3 className='fs-bold mt-4'>Your Orders</h3>
            
            <div className='subtabs bg-blue'>
                <ul >
                {subTabs.map((tab,i)=>{
            
                    return(
                        <li onClick={()=>handleTapClick(tab)} className={activeSubTab === tab.name ?'fs-bold active-tab ':'fs-bold curs'} key={i}>{tab.displayName}</li>    
                    )
                    
                })}
                </ul>
                <div className="bottombar"></div>
            </div>
        </div>
    )
}