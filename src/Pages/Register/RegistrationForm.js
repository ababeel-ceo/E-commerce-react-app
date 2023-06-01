import './RegistrationForm.css'
import RegImage from '../../Assets/Images/reg.jpg'
export default function RegistrationForm(){
    return (
        <div className="reg-container"> 
            <div className="row mx-1 p-0">
                <div className="col-md-6">
                    <img src={RegImage} alt=""  className='reg-img'/>
                </div>
                <div className="col-md-6 reg-form-container">
                    <h1 className=''>Create Account</h1>
                    <form action="" className='form'>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Smith"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Mobile number</label>
                            <input type="tel" pattern="[0-9]{10}" max-length='10' placeholder="134567890" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="********"/>
                        </div>
                        <button className="btn btn-primary mt-2">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}