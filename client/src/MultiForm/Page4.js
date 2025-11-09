import React from "react";
import { requiredfield } from "./MultiForm";
import "../App.css"


function Page4({ nextStep, prevStep, handleChange,formData}) {
    return(
        <div className="page-container">
            <div className="content-box form-box">
                <h2>Travel Companions</h2>
                <label>Did you travel Solo/ With others/ Family/ Friends/ Some community?</label>
                <input type="text" name="CompanionType" value={formData.CompanionType} onChange={handleChange}/>
                <br></br>

                <label>Did travelling with others affected your destination/ activity choices?</label>
                <input type="text" name="ActivityChoices" value={formData.ActivityChoices} onChange={handleChange}/>
                <br></br>

                <label>How budget was influenced by travelling with others?</label>
                <input type="text" name="InfluenceOnBudget" value={formData.InfluenceOnBudget} onChange={handleChange}/>
                <br></br>

                <h2 className="accomodation-heading">Safety & Health Concerns</h2>

                <label>What items did you pack for your travel first-aid</label>
                <input type="text" name="FirstAid" value={formData.FirstAid} onChange={handleChange}/>
                <br></br>

                <label>Did political stability in your chosen destination concern you?</label>
                <input type="text" name="PoliticalStability" value={formData.PoliticalStability} onChange={handleChange}/>
                <br></br>

                <label>Did you encounter any health issues during your trip?</label>
                <input type="text" name="EncounterHealthIssues" value={formData.EncounterHealthIssues} onChange={handleChange}/>
                 
                 <div style={{ marginTop: "30px" }}>
                 <button onClick={prevStep} className="form-button" style={{ marginRight: "10px", backgroundColor: "#6c757d" }}>Back</button>
                 <button onClick={nextStep} className="form-button">Next</button>
                </div>
                </div>
                </div>
                );
            }

export default Page4;