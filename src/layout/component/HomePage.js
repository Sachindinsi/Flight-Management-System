// import Slider from 'react-touch-drag-slider'
// import images from './Images';
import s from './slide1.png'
import s1 from './slide.png'
function HomePage()
{
    return(

        
        <div className="container-fluid"  >
     <div className="row align-items-start">
         <div className="col-5 my-4 ">
             
       <p style={{ content:'close-quote'}}>  Airline reservation systems (ARS) are systems that allow an airline to sell their inventory (seats). It contains information on schedules and fares and contains a database of reservations (or passenger name records) and of tickets issued (if applicable). ARSs are part of passenger service systems (PSS), which are applications supporting the direct contact with the passenger.

ARS eventually evolved into the computer reservations system (CRS). A computer reservation system is used for the reservations of a particular airline and interfaces with a global distribution system (GDS) which supports travel agencies and other distribution channels in making reservations for most major airlines in a single system.</p>
         </div>
    
         <div className="col-4  ">
   <img src={process.env.PUBLIC_URL + '/logo1.jpg'} height={500} alt="logo"></img>
         </div>
         </div>

         <div className="row-fluid">
            
      
             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={s1} height={250} width={1150} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img src={s} height={250} width={1150} alt="Second slide"/>
    </div>
    {/* <div class="carousel-item">
      <img src={process.env.PUBLIC_URL + '/slide.png'} height={250} width={1150} alt="Third slide"/>
    </div> */}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">

     <span class="carousel-control-prev-icon" aria-hidden="true"></span>

    <span class="sr-only">Previous</span>

  </a>

  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">

    <span class="carousel-control-next-icon" aria-hidden="true"></span>

    <span class="sr-only">Next</span>

  </a>

</div>
                   
         </div>
         </div>
               
    );
}
export default HomePage;
