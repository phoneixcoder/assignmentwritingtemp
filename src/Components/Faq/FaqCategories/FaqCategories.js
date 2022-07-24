import React,{useState} from 'react';
import arrow from "../../assets/Faq/arrow1.png";
import header from "../../assets/Faq/faq.svg";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import "./faq.css";


const General = [
   { 
     id: 1,      
     Heading: 'General Questions',   
     Desc: 'Find the answers to your most asked question and understand the kind of work we do here at Assignment Writing Services. Know everything about our company, services and guarantees'
   }, 
  {
    id:2,
    Question: 'What is an Assignment Writing Service?',
    Answer: 'At Assignment Cure, we provide any writing assignment help that you may need for school, college, or work. We help you live your life, relax or utilise your time to work on something else without stressing about your homework or assignments.',
  },
  {
    id:3,
    Question: 'Why choose Assignment Cure?',
    Answer: 'Choose Assignment Cure’s Writing Services for High Quality Work, Competitive Speed, Hundred-Percent Authenticity and Relentless Support throughout the process.',
  },
  {
    id:4,
    Question: 'Are Assignment Writing Services legit/legal?',
    Answer: 'All our services are 100% legitimate. Most companies that provide assignment writing services are registered under the law, making it absolutely safe and legal to get Assignment help.',
  },
  {
    id:5,
    Question: 'How can a client place an order with Assignment Writing Services?',
    Answer: 'The steps to place an order with Assignment Help Services are reasonably straightforward. All orders are placed within seconds of you completing the form. Here is all you need to do – Just Place your order request through a description form and submit your deposit.',
  },
  {
    id:6,
    Question: 'Are your papers written even before placing an order?',
    Answer: 'All the papers are written from scratch. They are customised as per your needs from the paper, and so are completely unique. You can also send additional customisations like your teacher, lecture notes, personal suggestions, and our assignment help writers will follow suit.',
  },
  {
    id:7,
    Question: 'Do you copy your answers from the web or any other sources?',
    Answer: 'Assignment Cure’s writers never copy content from any sources or references. They ensure that you receive 100% original writing. Your completed assignments are run through various plagiarism checkers to ensure they are unique.',
  },
]

const Order = [
    {
        id:1,
        Header: 'Order & Delivery',
        Desc: 'Find all information concerning Order and Delivery here. All queries related to placing an order, selecting a writer, work of the system, and delivery are answered here.'
    },
    {
        id:2,
        Question: 'When will my assignment be ready?',
        Answer: 'Your assignment will be ready according to the deadline you will mention in the order form. We would prefer it as the writers would have more time to work on your homework and provide you with the best quality work. It will also give you time for revisions and assignment editing service, so we recommend placing the order well in advance.'
    },
    {
        id:3,
        Question: 'What is the bidding process for your assignment writing service?',
        Answer: 'The bidding process starts immediately after you fill the order form. The order form is visible to our whole database of professional writers, who read your requirements and submit requests to provide assignment writing service based on their qualifications. These requests are also called “bids”. In their bid, they include the stipulations of their work and the cost for it. You are free to check out each potential writer’s background. Contact them directly through our chat before hiring and determine which assignment helper suits you most'
    },
    {
        id:4,
        Question: 'What is the difference between bidding process and the "Best writer" service?',
        Answer: 'With the “Best Writer” option, our platform helps you choose an assignment helper from our database that fills in all of the requirements and instructions. So, users are automatically assigned to a writer of high ranking. While with bidding, prospective writers contact you for a chance to provide their assignment writing service.'
    },
    {
        id:5,
        Question: 'Is it possible to check the draft of my assignment before the deadline?',
        Answer: 'With our progressive delivery service, you can check the first draft of your assignment even sooner. This is an excellent assignment writing service option if you need to hand in a draft before the real deadline.'
    },
    {
        id:6,
        Question: 'How will the paper be delivered to me? Will I receive the paper over email?',
        Answer: 'You will receive a notification via email once your assignment writing service is done. After this, just log in and download your paper from the "List of uploaded files by writer" section.'
    },
    {
        id:7,
        Question: 'What should I do if a writer misses the deadline that I mentioned for assignment help?',
        Answer: 'Our writers always try to complete the deadline earlier than expected but if for some reason you’ve faced such an issue, you can always request a refund.'
    },
    {
        id:8,
        Question: 'What if I want something to be changed in my assignment for university?',
        Answer: 'If you have spotted mistakes in your assignment for university then you should immediately request a revision. Revisions are free of charge so you can ask as many as you want. Please release funds to the writer only when you are done with your revisions. Or, you can also download the file and make any edits you find necessary.'
    },
    

]

const Writer = [
    {
        id:1,
        Header:'Writers Information',
        Desc:'Get to know more about our writers better. Understand the people responsible for the quality of your papers and make an informed decision.'
    },
    {
        id:2,
        Question:'Who will write my assignment for university?',
        Answer:'A team of professional writers and editors work on your orders. All the applicants complete tests and written tasks before their join our team. If the writer passes everything, we check their personal information, credentials and allow them to work for us as your assignment writing service help.'
    },
    {
        id:3,
        Question:'Can I communicate with my assignment help online ?',
        Answer:'Yes, you can communicate with the assignment help online writer via chat. This is our exclusive feature designed to help customers in getting acquainted with their writers and learning about their skills and experience.'
    },
    {
        id:4,
        Question:'Can I share files with my assignment helper?',
        Answer:'Yes. In fact, you should share additional files to help your assignment helper to follow the instructions. Cooperation is a key to success. Share all the needed lectures, sources and materials that you can.'
    },
    {
        id:5,
        Question:'Could you choose a Online Assignment Writing Help for me?',
        Answer:'Yes, just choose the “Best Writer” option at our portal. For a small extra fee, our platform will select the writer who suits your Assignment Help requirements and instructions well.'
    },
]


const Quality  = [
    {
        id:1,
        Header: 'Quality & Satisfaction',
        Desc: 'This section comprises answers to all the queries concerning the quality of your paper.  Here’s what to do if you are not satisfied with the paper delivered to you.'
    },
    {
        id:2,
        Question:'Is Assignment Cure’s quality guaranteed?',
        Answer:'Assignment Cure’s writers provide you with the best quality service.  All of them undergo a strict screening for qualifications and requirement testing to ensure a high-quality paper. They are only paid once you are satisfied with the quality. Pro Tip – Make sure to include as many instructions as you can to ensure that the writer writes your paper well.'
    },
    {
        id:3,
        Question:'Is a top grade guaranteed with my Assignment Writing Service?',
        Answer:'We cannot guarantee grades, but we can assure the quality of your paper. We will ensure that the writer will work according to the instructions but the final marks are not within our control.'
    },
    {
        id:4,
        Question:'What should I do if I am not satisfied with my assignment for university?',
        Answer:'Here’s what you can do in such a case – 1) Ask your Assignment Helper to make revisions. 2) Request another writer without any additional charge. 3) Ask for a refund.'
    },
    {
        id:5,
        Question:'How do I know that my assignment for university is 100% original and plagiarism-free?',
        Answer:'We have our own FREE plagiarism checker. You can make use of this application to verify that no portion of your assignment has been lifted from any online source or from another completed assignment in our database.'
    },
]

const Pricing = [
    {
        id:1,
        Header:'Pricing & Payment',
        Desc:'Find the answers to all frequently asked questions about payment and pricing here.'
    },
    {
        id:2,
        Question:'How is the price of my essay writing service determined?',
        Answer:'The price of each assignment for university depends on multiple factors: 1) Firstly, the kind of work that needs to be done. The price will be determined based on the intensity of the workload. 2) The deadline. The price will depend on the time we have to complete the assignment. You can expect a higher cost for shorter deadlines.3) The number of pages in your assignment.'
    },
    {
        id:3,
        Question:'How can I pay for my online Assignment Help ?',
        Answer:'You can pay with the most convenient option available to you – Visa, Mastercard, AmEx, Discover, whatever you like.'
    },
    {
        id:4,
        Question:'Can I pay for the assignment writing service in parts?',
        Answer:'Paying in parts is not an option available. You need to top up your balance with an amount equivalent to the service you are seeking as a mandate. However, the writer does not get paid until you are fully satisfied. The amount for their assignment help will be released only after you approve the paper received.'
    },
    {
        id:5,
        Question:'Is your assignment writing service free?',
        Answer:'No, sorry. The service is not free. Our service is paid because we provide custom high-quality papers.'
    },
    {
        id:6,
        Question:'How does your payment method of putting money on balance, and then releasing it works?',
        Answer:'All our users create an account on Assignment Cure’s platform and deposit funds. These funds stay in your account until your assignment is completed. In case the assignment doesn’t satisfy you then ask for a free revision. You won’t be charged until you are satisfied with your assignment.'
    },
    {
        id:7,
        Question:'How to get a refund if the assignment writing service was unsatisfactory?',
        Answer:'We assess refund requests on a case-by-case basis. We may even require documented proof that the quality of your order is low (e.g., scanned copy of your instructor’s feedback, plagiarism report, etc.). You paper will then go under investigation by our Quality Assurance Department (QA). If the mistakes are found to be genuine then, we will refund an amount comparable to the percentage of incorrect content in the paper.'
    },
    {
        id:8,
        Question:'Is my Online Assignment Help payment secure?',
        Answer:'Yes, your Online Assignment Help payment is 100% secure. Our company uses encrypted connections with security protocols (SSL) to protect your credit card data. All the information you provide is used solely for billing purposes, receiving and control of payment.'
    },
]

const Account = [
    {
        id:1,
        Header:'Account Security',
        Answer:'All your account security will be answered here. Find answers to all your queries here and manage your account information without any hassle.'
    },
    {
        id:2,
        Question:"Does anybody see your customer's personal info?",
        Answer:'Your personal information is kept confidential and your personal info will not be disclosed under any circumstances. Even your assignment help writer won’t have any of your information.'
    },
    {
        id:3,
        Question:'Could my teacher find out that I’ve used this assignment writing service?',
        Answer:'We keep our clients anonymous so there is no way they will find out. All our customers have a unique ID that hides their personal names to maintain confidentiality.'
    },
    {
        id:4,
        Question:'Can other users see the details of my assignment writing service order?',
        Answer:'No, only you and the writer can see your assignment writing service order details.'
    },
    {
        id:5,
        Question:'How can I delete my assignment cure account entirely?',
        Answer:'Please contact our Support Team if you wish to delete your assignment cure account. You can delete your whole account at any time. If you delete your account, it will cease to exist and even the Support Team will not be able to retrieve it. If you want to use our service again, you must create a new account.'
    },
    {
        id:6,
        Question:'What if I forgot my assignment cure account’s password?',
        Answer:'In such a case, just press the “Forgot password’ button. The new password will be sent to your email, which you will be able to use for logging into your assignment cure account.'
    },
]

const FaqCategories = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [NoOfFaq,setNoOfFaq] = useState(3);
 
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = faq.filter((value) => {
      const result = value.Question.toLowerCase().includes(searchWord.toLowerCase());
      return result
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
    if(NoOfFaq>faq.length){
      setNoOfFaq(faq.length)
    }
  }


  return (
    <div className='faq-container'>
      <div className='faq-block-1'>
      
      <div className='faq-header'>
        <img src={header} alt="header" className='faq-bg-header' />
        <h1>FAQ's</h1>
      </div>
        <h4>Have Any Questions?</h4>
        
        
        <div className='search-container'>
        <input 
            className='input'
            type="text"
            placeholder='Search Any Question'
            value={wordEntered}
            onChange={handleFilter}
         />
         {wordEntered.length === 0 ? (
            <SearchIcon className='search-icon'/>
          ) : (
             <CloseIcon className='search-icon' onClick={clearInput}/>
          )}
        </div>
      </div>

      <div className='faq-block-2'>
      {filteredData.length==0?
        
         faq.slice(0,NoOfFaq).map((data,idx)=>{
          return (
            <div key={idx} className='faq-content'>
              <hr className='faq-hr'/>
              <div className='faq'>
                <h3>{data.Question}</h3>
                <p>{data.Answer}</p>
              </div>
            </div>    
         )}) :

         filteredData.map((data,idx)=>{
          return (
            <div key={idx} className='faq-content'>
              <hr className='faq-hr'/>
              <div className='faq'>
                <h3>{data.Question}</h3>
                <p>{data.Answer}</p>
              </div>
            </div>    
          )})       
      }
        <img src={arrow} className='arrow' alt="arrow" onClick={showMore}/>      
      </div>


    </div>
   )
}

export default FaqCategories;