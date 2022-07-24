import React,{useState} from 'react';
import "../Reviews/Review.css";


const Review = () => {


  const [NoOfReview,setNoOfReview] = useState(5);

  const showMore = ()=>{
    setNoOfReview(NoOfReview =>NoOfReview+=5)
    if(NoOfReview>review.length){
      setNoOfReview(review.length)
    }
  }



  return (
    <div>
      <div className="bigbox">
        <div className="smallbox">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="my-5 container header_containerabout ">
                <h3 className="text-center headService">Reviews</h3>
              </div>
            </div>

            <div className="container-fluid ">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row gy-4">


{review.slice(0,NoOfReview).map((data,i)=>(
               <div className="col-sm-10 col-md-10 col-lg-10 col-10 mx-auto borderreview ">
               <div id="review-card">
                 <div className="reviewtop">
                   <h1 className="best">{data.title}</h1>
       
                   <p className="bestrate">{data.rating}</p>
                 </div>
                 <div className="card-body secdiv">
                   <p>
                       {data.para}
                    
                   </p>
                   <p className="customerid">
                     {data.cid}
                     <br />
                     {data.date}
                   </p>
                 </div>
               </div>
             </div>  
        ))}
                  </div>
                  <div className="reviewbtn">
                  <button className="btn morereview" onClick={showMore}>Show more reviews</button>
                 </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const review = [
  {
    id:1,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:2,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:3,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:4,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:5,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:6,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:7,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:8,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:9,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:10,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
  {
    id:11,
    title: 'Best Services!',
    para: 'Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way',
    rating:'⭐⭐⭐⭐⭐',
    cid:"customer-5190024 (3 orders)",
    date:"July 16,2022"
  },
 
]
export default Review;
