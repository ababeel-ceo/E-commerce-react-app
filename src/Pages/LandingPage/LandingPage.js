
import "./LandingPage.css";
import m1 from '../../Assets/Images/slide1.jpg'
import m2 from '../../Assets/Images/slide2.jpg'
import p1 from '../../Assets/Images/p1.jpg'; 
import p2 from '../../Assets/Images/p2.jpg'; 
import p3 from '../../Assets/Images/p3.jpg'; 
import p4 from '../../Assets/Images/p4.jpg'; 
import p5 from '../../Assets/Images/p5.jpg'; 
import p6 from '../../Assets/Images/p6.jpg';  

export default function LandingPage() {
  const productImgList = [p1,p2,p3,p4,p5,p6,p4,p3,p1,p6];

  return (
    <div> 
      <div className="landing-container">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >   
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <img src={m1} class="d-block w-100 " alt="No Image Found " />
             
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src={m2} class="d-block w-100 " alt="No Image Found" /> 
            </div>
           
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section className="content-section p-4">
        <h3 className="">DEAL OF THE DAY</h3>
        
        <div className="card-wrapper">
        {productImgList.map((product,i)=>
          <div className="card-container p-3"> 
            <div key={i} className="img-container">
                <img src={product} alt="" />
            </div>
            <div className="caption-container">
                <span className=" d-block fs13 badge bg-info text-dark">Upto 18% off </span>
                <span className="fs15">Juicer Mixer Grinder from Top Brands</span>
            </div>
          </div>  )}
        </div>
       
      </section>
    </div>
  );
}
