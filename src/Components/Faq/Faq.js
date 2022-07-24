import React,{useRef, useState} from 'react';
import arrowIcon from "../../assets/Faq/arrow1.png";
import chevron from "../../assets/Faq/arrow.png";
import header from "../../assets/Faq/faq.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./faq.css";

const faq = [
  {
    id:1,
    Question: 'What is an Assignment Writing Service?',
    Answer: 'At Assignment Cure, we provide any writing assignment help that you may need for school, college, or work. We help you live your life, relax or utilise your time to work on something else without stressing about your homework or assignments.',
  },
  {
    id:2,
    Question: 'Why choose Assignment Cure?',
    Answer: 'Choose Assignment Cure’s Writing Services for High Quality Work, Competitive Speed, Hundred-Percent Authenticity and Relentless Support throughout the process.',
  },
  {
    id:3,
    Question: 'Are Assignment Writing Services legit/legal?',
    Answer: 'All our services are 100% legitimate. Most companies that provide assignment writing services are registered under the law, making it absolutely safe and legal to get Assignment help.',
  },
  {
    id:4,
    Question: 'How can a client place an order with Assignment Writing Services?',
    Answer: 'The steps to place an order with Assignment Help Services are reasonably straightforward. All orders are placed within seconds of you completing the form. Here is all you need to do – Just Place your order request through a description form and submit your deposit.',
  },
  {
    id:5,
    Question: 'Are your papers written even before placing an order?',
    Answer: 'All the papers are written from scratch. They are customised as per your needs from the paper, and so are completely unique. You can also send additional customisations like your teacher, lecture notes, personal suggestions, and our assignment help writers will follow suit.',
  },
  {
    id:6,
    Question: 'Do you copy your answers from the web or any other sources?',
    Answer: 'Assignment Cure’s writers never copy content from any sources or references. They ensure that you receive 100% original writing. Your completed assignments are run through various plagiarism checkers to ensure they are unique.',
  },
];

const FaqComponent = () => {

  /*For Search Filter and Bottom Arrow*/
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered]   = useState("");
  const [NoOfFaq,setNoOfFaq]            = useState(3);
  const [arrow,setArrow]                = useState("arrow");  

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = faq.filter((value) => {
      const result = value.Question.toLowerCase().includes(
        searchWord.toLowerCase()
      );
      return result;
    });

    // console.log(result);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  
  const showMore = ()=>{
    setNoOfFaq(NoOfFaq =>NoOfFaq+=3)
    if(NoOfFaq>=faq.length){
      setNoOfFaq(faq.length)
      setArrow("hide-arrow");
    }
  }
  

  return (
    <div className="faq-container">
      <div className="faq-block-1">
        <div className="faq-header">
          <img src={header} alt="header" className="faq-bg-header" />
          <h1>FAQ's</h1>
        </div>
        <h4>Have Any Questions?</h4>

        <div className="search-container">
          <input
            className="input"
            type="text"
            placeholder="Search Any Question"
            value={wordEntered}
            onChange={handleFilter}
          />
          {wordEntered.length === 0 ? (
            <SearchIcon className="search-icon" />
          ) : (
            <CloseIcon className="search-icon" onClick={clearInput} />
          )}
        </div>
      </div>

      <div className='faq-block-2'>
      {filteredData.length===0?
         faq.slice(0,NoOfFaq).map((data,index)=>{
          return (
            <Accordion key={index} data={data}/>    
         )}) :

         filteredData.map((data,index)=>{
          return (
            <Accordion key={index} data={data}/>   
          )})       
      }
        <img src={arrowIcon} className={`${arrow}`} alt="arrow" onClick={showMore}/>      
      </div>
    </div>
  );
};

const Accordion = ({data,index})=> {
  
  const [active,setActive] = useState("");
  const [height,SetHeight] = useState("0px");
  const [rotate,SetRotate] = useState("chevron");

  const content = useRef(null);

  const toggleFaq=()=>{
    setActive(active===""?"active":"");
    SetHeight(active==="active"?"0px":`${content.current.scrollHeight}px`);
    SetRotate(active==="active"?"chevron":"chevron rotate")
  }

  return (
      <div key={index} className='faq-section' >
         <div className={`faq-section-header ${active}`} onClick={toggleFaq}>
           <img src={chevron} className={`${rotate}`} alt="chevron" />
           <h3>{data.Question}</h3>
         </div> 
        
         <div className='faq' ref={content} style={{maxHeight: `${height}`}}>
          <p>{data.Answer}</p>
         </div>
      </div> 
  );
}


export default FaqComponent;
