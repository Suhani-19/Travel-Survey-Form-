import React from "react";
import { requiredfield } from "./MultiForm";
import "../App.css"



function Page1({ nextStep, handleChange, formData }) {
  return (
    <div className="page-container">
      <div className="content-box form-box">
        <h2>Personal Information</h2>

<label>What is your name?</label>
        <input
          name="Name"
          placeholder="Name"
          value={formData.Name}
          onChange={handleChange}
          className="input-line"
          required
        />
        <br></br>
        <br></br>

<label>How old are you?</label>
        <input
          name="Age"
          placeholder="Age"
          value={formData.Age}
          onChange={handleChange}
          className="input-line"
          required
        />
        <br></br>
        <br></br>

<label>Date of Birth</label>
        <input
          name="DOB"
          placeholder="Date of Birth"
          value={formData.DOB}
          onChange={handleChange}
          className="input-line"
          required
        />
        <br></br>
        <br></br>

<label>Nationality</label>
        <input
          name="Nationality"
          placeholder="Nationality"
          value={formData.Nationality}
          onChange={handleChange}
          className="input-line"
          required
        />
        <br></br>
        <br></br>

        <label>
          Marital Status:
          <select
            name="MaritalStatus"
            value={formData.MaritalStatus}
            onChange={handleChange}
            className="input-line"
          >
            <option value="">-- Select --</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Widower">Widower</option>
          </select>
        </label>
        <br></br>
        <br></br>

<label>Occupation</label>
        <input
          name="Occupation"
          placeholder="Occupation"
          value={formData.Occupation}
          onChange={handleChange}
          className="input-line"
          required
        />
        <br></br>
        <br></br>

        <label style={{ marginTop: "15px" }}>Upload ID Proof:</label>
        <input
          type="file"
          accept="image/*"
          name="IDProof"
          onChange={handleChange}
          className="input-line"
          style={{ marginBottom: "20px" }}
        />
        <br></br>
        <br></br>

        <h2 style={{ marginTop: "30px" }}>Travel Experience</h2>

        <label>
          Did you travel for leisure, business, family matters or volunteering purposes?
        </label>
        <input
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="input-line"
        />
        <br></br>
        <br></br>

        <label>
          What type of travel experience were you seeking? Relaxing/Adventurous/Cultural/Food
        </label>
        <input
          type="text"
          name="ExperienceType"
          value={formData.ExperienceType}
          onChange={handleChange}
          className="input-line"
        />
        <br></br>
        <br></br>

        <label>
          What primarily encouraged you to book for this travel?
        </label>
        <input
          type="text"
          name="Motivation"
          value={formData.Motivation}
          onChange={handleChange}
          className="input-line"
        />
        

        <br /><br />
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default Page1;
