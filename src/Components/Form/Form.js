import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import upload from "../../assets/Forms/upload.svg";
import axios from "axios";
import "./Dropbox.css";
import "./Form.css";
import back from "../../assets/Quote/back.svg";

const Form = () => {
  const [sliderValue, setSliderValue] = useState("5000");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [deadline, setDeadline] = useState("");
  // const [wordCount, setWordCount] = useState("");
  const [fileUri, setFileUri] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  //Dropbox

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const onChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
    console.log(selectedFile.name);
  };

  const handleSliderOnChange = (event) => {
    setSliderValue(event.target.value);
    const sliderValue = document.querySelector(".slider-value--text");
    //  setEmail(event.target.value)}
    sliderValue.style.left = event.target.value / 100 + "%";
  };

  let submitForm = async (event) => {
    event.preventDefault();
    console.log("Submit");
    let formData = new FormData();
    let datetime = new Date();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("country", country);
    formData.append("subject", subject);
    formData.append("deadline", deadline);
    formData.append("word_count", sliderValue);
    formData.append("additional_instructions", additionalComments);

    formData.append("document", selectedFile);

    await axios.post(
      "https://murmuring-dawn-52316.herokuapp.com/assignment/orders/make-order/",
      formData
    );
  };

  return (
    <>
      <div className="form-section">
        <div className="form-text">
          <a href="/">
            <img src={back} alt="" className="backButton" />
          </a>
          <h1 className="form-text--heading">We Are Here To Help</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="text-details">
              <div className="name input-box">
                <label className="input-label">Full Name</label>
                <input
                  className="input-box--data"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="email input-box">
                <label className="input-label">Email Address</label>
                <input
                  className="input-box--data"
                  type="text"
                  placeholder="Email Address"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mobile-number input-box">
                <label className="input-label">Contact Number</label>
                <div className="mobile-input">
                  <select
                    className="form-select input-box--data --country"
                    id="inputGroupSelect01"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {/* <option defaultValue="...">...</option> */}
                    <option value="India">+91</option>
                    <option value="Pakistan">+92</option>
                    <option value="USA">+01</option>
                  </select>
                  <input
                    className="input-box--data --mobile"
                    type="text"
                    placeholder="Enter Your Phone Number"
                    required
                    name="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
              </div>
              <div className="deadline input-box">
                <label className="input-label">Deadline</label>
                <input
                  className="input-box--data"
                  type="date"
                  placeholder="-Select Date-"
                  required
                  name="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              <div className="subject input-box">
                <label className="input-label">Subject</label>
                <input
                  className="input-box--data"
                  type="text"
                  placeholder="Enter Subject"
                  required
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="institute input-box">
                <label className="input-label">Institute</label>
                <input
                  className="input-box--data"
                  type="text"
                  placeholder="Enter Institute"
                  required
                  name="institute"
                />
              </div>
            </div>
            <div className="extra--margin">
              <h3 className="input--heading">Word Count</h3>
              <div className="container-input-range">
                <div className="slider-value">
                  <span className="slider-value--text">{sliderValue}</span>
                </div>
                <div className="field">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={sliderValue}
                    step="100"
                    onChange={handleSliderOnChange}
                    required
                    name="words"
                  />
                </div>
                <div className="value">
                  <span>0</span>
                  <span>2000</span>
                  <span>4000</span>
                  <span>6000</span>
                  <span>8000</span>
                  <span>10000</span>
                </div>
              </div>
            </div>
            <div className="container d-flex flex-row justify-content-between align-items-center">
              <div className="extra--margin dropbox-main">
                <h3 className="input--heading">Upload Assignement</h3>
                <section className="main-dropbox">
                  <div
                    className="drop-zone"
                    {...getRootProps({ className: "dropzone" })}
                  >
                    <input
                      required
                      {...getInputProps()}
                      name="filename"
                      onChange={onChangeFile}
                    />
                    <div className="drop-box-details">
                      <img src={upload} alt="logo" />
                      <p className="dropbox-text">Upload Files from Device</p>
                    </div>
                  </div>
                  <ul className="fileName">{files}</ul>
                </section>
              </div>
              <div className="extra--margin input-main">
                <h3 className="input--heading">Additional Instructions</h3>
                <textarea
                  className="additional-textarea"
                  placeholder="Enter The Instructions For The Expert"
                  name="addinfo"
                  value={additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="submit-button">
              <button className="submit" onClick={(event) => submitForm(event)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
