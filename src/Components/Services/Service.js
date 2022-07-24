import React,{useState} from "react";
import "../Services/Service.css";
import people from "../../assets/Services/people.svg";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const ServiceCard = [
  {
    id:1,
    icon: people,
    title: 'Narrative Essay Writing Service',
    description: "A story is the focus of a narrative essay. Most of the time, this is a story about something you've personally gone through. You can express yourself in a more personal and creative way with this form of essay. Writing a narrative essay requires an understanding of the art of storytelling, as well as an understanding of the proper narrative organization. The majority of the time, they're given in University composition courses or high school English classes. Our team has experts from various fields that can write great Narrative Essay Writing. We believe in the quality that is offered all the time to the students."
  },
  {
    id:2,
    icon:  people ,
    title: 'Narrative Essay Writing Service',
    description: "A story is the focus of a narrative essay. Most of the time, this is a story about something you've personally gone through. You can express yourself in a more personal and creative way with this form of essay. Writing a narrative essay requires an understanding of the art of storytelling, as well as an understanding of the proper narrative organization. The majority of the time, they're given in University composition courses or high school English classes. Our team has experts from various fields that can write great Narrative Essay Writing. We believe in the quality that is offered all the time to the students."
  },
  {
    id:3,
    icon: people  ,
    title: 'Narrative Essay Writing Service',
    description: "A story is the focus of a narrative essay. Most of the time, this is a story about something you've personally gone through. You can express yourself in a more personal and creative way with this form of essay. Writing a narrative essay requires an understanding of the art of storytelling, as well as an understanding of the proper narrative organization. The majority of the time, they're given in University composition courses or high school English classes. Our team has experts from various fields that can write great Narrative Essay Writing. We believe in the quality that is offered all the time to the students."
  },
  {
    id:4,
    icon: people,
    title: 'Narrative Essay Writing Service',
    description: "A story is the focus of a narrative essay. Most of the time, this is a story about something you've personally gone through. You can express yourself in a more personal and creative way with this form of essay. Writing a narrative essay requires an understanding of the art of storytelling, as well as an understanding of the proper narrative organization. The majority of the time, they're given in University composition courses or high school English classes. Our team has experts from various fields that can write great Narrative Essay Writing. We believe in the quality that is offered all the time to the students."
  },
]


const Services = () => {

  const [desc,setDesc] = useState("service-card-no-discription");

  const showDesc =()=>{
      setDesc("service-card-description");
    }
  const hideDesc =() =>{
      setDesc("service-card-no-description");
  }


  return (
      <div className="container-fluid services-section"> 
        <div className="service-header">
          <h3 className="services-title">
            Need Help With Your Essays? Check Out Assignment Writing Services!
          </h3>
        </div>

          <div className="description-container">
            <div className="services-desc">
              <p className="services-desc-p">
              In simple terms, an essay is a short piece of writing on a particular subject or topic. 
              Even though it is a short piece of writing and it is simple to write, writing an 
              essay is not easy. We offer a great Essay Writing Service to our clients so that 
              they can make this simple thing more easy. At Assignment Writing Services, 
              we offer a great Essay Writing Service that provides the clients with good quality essays 
              that make your work look genuine and marks fetching. Our team of 
              experts who work and Write Essay are deep workers who research deeply on the topics of your essay. 
              </p>
              <p className="services-desc-p">
              The Online Essay Writing Service that we provide is one of the best 
              in the segment and ensures to be on time. Once the students avail our 
              Online Essay Writing Service they can be at ease. Essays play a key role in 
              ensuring that your scores in the class as well in your major is essentially well. 
              Essays also improve the beauty of your resume. 
              All these things are important for a University Student.
              </p>
            </div>
          </div>

        <div className="container-fluid ">
          <div className="row">
             <div className="services-card-header">
                <h3 className="services-card-header-h3">Types of Essays writing services we provide</h3>
             </div> 
            
            <div className="col-10 mx-auto services-cards-container">
             {ServiceCard.map((data,index)=>{
                return(
                  <div key={index} className="service-cards">

                  <div className="service-card" onMouseLeave={hideDesc} onMouseEnter={showDesc}>
                    <div className="service-card-img">
                      <img src={data.icon} alt="people" />
                    </div>
                    <div className="service-card-title">
                        <h6>{data.title}</h6>
                    </div>
                  </div>

                  <div className={`${desc}`}>
                      <ArrowDropUpIcon className="arrow-up"/>
                       <p>{data.description}</p> 
                  </div>
                  
                  </div>
                )
             })} 
            </div>
          </div>
        </div>
      </div>
  );
};

export default Services;
