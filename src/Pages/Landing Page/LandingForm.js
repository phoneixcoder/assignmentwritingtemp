import React, { useState } from "react";
import "./LandingForm.css";
import upload from "../../assets/Landing/upload.svg";
import { useDropzone } from "react-dropzone";
const LandingForm = () => {
  //States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [deadline, setDeadline] = useState("");
  const [subject, setSubject] = useState("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [selectedFile, setSelectedFile] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const onChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
    console.log(selectedFile.name);
  };
  return (
    <>
      <div className="landing-form">
        <form action="" method="post" className="landing-form--content">
          <div className="container d-flex flex-row align-items-center justify-content-between d-flex flex-row align-items-center justify-content-between">
            <div className="landing-input-box">
              <label className="landing-input-label">Full Name</label>
              <input
                className="landing-input-box--data"
                type="text"
                placeholder="Enter Name"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="landing-input-box">
              <label className=" landing-input-label">Email Address</label>
              <input
                className="landing-input-box--data"
                type="text"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Number Input */}

          <div className="landing-input-box">
            <label className=" landing-input-label" style={{ marginLeft: 15 }}>
              Contact Number
            </label>
            <div
              className="container d-flex flex-row"
              style={{ marginLeft: 5 }}
            >
              <select
                className="form-select landing-input-box--data --landing-country"
                id="inputGroupSelect01"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {/* <option defaultValue="...">...</option> */}
                <option value="India">+91</option>
                <option value="Pakistan">+92</option>
                <option value="USA">+01</option>
              </select>
              <input
                className="landing-input-box--data --landing-mobile mx-3"
                type="text"
                placeholder="Enter Your Phone Number"
                name="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          {/* Deadline */}

          <div className="landing-input-box">
            <label className=" landing-input-label" style={{ marginLeft: 15 }}>
              Deadline
            </label>
            <input
              className="landing-input-box--data"
              style={{ marginLeft: 15, width: 535 }}
              type="date"
              placeholder="-Select Date-"
              name="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* Input institution and subject */}
          <div className="container d-flex flex-row align-items-center justify-content-between">
            <div className="landing-subject landing-input-box">
              <label className=" landing-input-label">Subject</label>
              <input
                className="landing-input-box--data"
                type="text"
                placeholder="Enter Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="landing-institute landing-input-box">
              <label className=" landing-input-label">Institute</label>
              <input
                className="landing-input-box--data"
                type="text"
                placeholder="Enter Institute"
                name="institute"
              />
            </div>
          </div>
          {/* Dropbox and word count */}
          <div className="container d-flex flex-row" style={{ marginTop: 18 }}>
            <div className="landing-word-count-container d-flex flex-column" style={{ marginLeft: 15 }}>
              <label className=" landing-input-label">Wordcount</label>
              <label class="landing-container landing-input-label" style={{ marginTop: 8 }}>
                No Wordcount
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
              <div className="landing-word-counter">
                <button
                  className="landing-counter --landing-left-counter"
                  onClick={() => {
                    var temp = wordCount - 1;
                    setWordCount(temp);
                  }}
                >
                  -
                </button>
                <input
                  className="landing-input-box--data landing-counter--input"
                  type="number"
                  placeholder={wordCount}
                  name="wordCount"
                  value={wordCount}
                  onChange={(e) => {
                    setWordCount(e.target.value);
                  }}
                />
                <button
                  className="landing-counter --landing-right-counter"
                  onClick={() => {
                    var temp = wordCount + 1;
                    setWordCount(temp);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="landing-dropbox-main" style={{ marginLeft: 15 }}>
              <label className="landing-input-label">Upload Assignment</label>
              <section className="landing-main-dropbox">
                <div
                  className="landing-drop-zone"
                  {...getRootProps({ className: "landing-dropzone" })}
                >
                  <input
                    {...getInputProps()}
                    name="filename"
                    onChange={onChangeFile}
                  />
                  <div className="landing-drop-box-details">
                    <img src={upload} alt="logo"/>
                    <p className="landing-dropbox-text" style={{ marginLeft: 17.78, marginTop: 15}}>Upload Files</p>
                  </div>
                </div>
                <ul className="landing-fileName">{files}</ul>
              </section>
            </div>
          </div>
          <div className="landing-input-box" >
            <label className=" landing-input-label" style={{ marginLeft: 15 }}>
              Additional Instruction
            </label>
            <textarea
              className="landing-input-box--data landing-text-area"
              type="text"
              name="additionalInstruction"
              style={{ marginLeft: 15 }}
            />
          </div>
          <div className="container d-flex flex-row justify-content-center">
            <buttton className="landing-submit" type= "submit">Submit</buttton>
          </div>
        </form>
      </div>
    </>
  );
};

export default LandingForm;
