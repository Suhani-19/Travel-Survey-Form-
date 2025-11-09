import React from "react";
import { requiredfield } from "./MultiForm";
import "../App.css"


function Page3({ nextStep, prevStep, handleChange,formData}) {
    return(
        <div className="page-container">
            <div className="content-box form-box">
                <h2>Destination Selection</h2>
                <label>How did you first learn about the destination you chose?</label>
                <input type="text" name="destinationChoice" value={formData.destinationChoice} onChange={handleChange}/>
                <br></br>

                <label>How important was the weather in your decision making?</label>
                <input type="text" name="DestinationWeather" value={formData.DestinationWeather} onChange={handleChange}/>
                <br></br>

                <label>Did social media influence your decision?</label>
                <input type="text" name="socialmedia" value={formData.socialmedia} onChange={handleChange}/>
                <br></br>

                <label>Do you travel to same places or do you like to visit new places?</label>
                <input type="text" name="TravelPattern" value={formData.TransportPattern} onChange={handleChange}/>
                <br></br>

                <h2 className="accomodation-heading">Budget Expenditure</h2>

                <label>What was your overall travel budget?</label>
                <input type="text" name="TotalBudget" value={formData.TotalBudget} onChange={handleChange}/>
                <br></br>

                <label>How much did you spend on food & dining?</label>
                <input type="text" name="FoodBudget" value={formData.FoodBudget} onChange={handleChange}/>
                <br></br>

                <label>Did you purchase travel Insurance?</label>
                <input type="text" name="TravelInsurance" value={formData.TravelInsurance} onChange={handleChange}/>
                <br></br>

                <label>Do you usually take short trips or long trips?</label>
                <input type="text" name="TripDuration" value={formData.TripDuration} onChange={handleChange}/>
                <br></br>

                <label>How much of your budget did you allocate for activities & experiences?</label>
                <input type="text" name="ActivitiesBudget" value={formData.ActivitiesBudget} onChange={handleChange}/>
                <br></br>

                <label>Did you slurge on shopping and souvenirs?</label>
                <input type="text" name="ShoppingSlurge" value={formData.ShoppingSlurge} onChange={handleChange}/>
                <br></br>

                <label>Were there any unexpected costs during the trip?</label>
                <input type="text" name="UnexpectedCosts" value={formData.UnexpectedCosts} onChange={handleChange}/>
                <br></br>

                <div style={{ marginTop: "30px" }}>
                 <button onClick={prevStep} className="form-button" style={{ marginRight: "10px", backgroundColor: "#6c757d" }}>Back</button>
                 <button onClick={nextStep} className="form-button">Next</button>
                </div>
                </div>
                </div>
                );
            }

export default Page3;