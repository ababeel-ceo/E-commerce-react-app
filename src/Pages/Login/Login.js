import './Login.css'
import loginPic from '../../Assets/Images/login.jpg'; 
export default function Login(){ 
    return(
       <div className='container-fluid con'>
        
            
                <div className="col-md-6">
                    <div className="container-fluid">
                        <div className='img-con'>
                            <img src={loginPic} alt="" />
                        </div>
                    </div>
                   
                </div>
                <div className="col-md-6 ">
                    
                    <div className='lg-form '>
                    <h3 className='text-center pb-4'>Sign-in </h3>
                        <input type="text " className='frm-control' placeholder='username'/>
                        <input type="text " className='frm-control' placeholder='Password'/>
                        <button className='frm-control lg-btn'>Login</button>
                    </div>
                   
                </div>

            
       </div>
    )
}