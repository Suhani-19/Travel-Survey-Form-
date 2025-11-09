import React from "react";
import { requiredfield } from "./MultiForm";
import "../App.css"



function Page2({ nextStep, prevStep, handleChange,formData}) {
    return(
        <div className="page-container">
            <div className="content-box form-box">
                <h2>Transportation</h2>

                <label>What was the mode of transport you used?</label>
                <input type="text" name="TransportMode" value={formData.TransportMode} onChange={handleChange}/>
                <br></br>
                
                <label>How much did cost influence your transport choice?</label>
                <input type="text" name="TransportCost" value={formData.TransportCost} onChange={handleChange}/>
                <br></br>

                <label>Was your transport covinient and punctual?</label>
                <input type="text" name="TransportConvinience" value={formData.TransportConvinience} onChange={handleChange}/>
                <br></br>

                <label>Do you like travelling by yourself or you prefer an outgoing, warm and unhibited crowd?</label>
                <input type="text" name="TransportCrowd" value={formData.TransportCrowd} onChange={handleChange}/>
                <br></br>

                <h2 className="accomodation-heading">Accomodation Preferences</h2>

                <label>What type of accomodation did you opt for? Hotel/Motel/Hostel/Resort/B&b/Vacation Rental/Guest House/Inn/Farmstay/Glamping/Eco-Lodge/ApartHotel/Cabin</label>
                <input type="text" name="AccomodationType" value={formData.AccomodationType} onChange={handleChange}/>
                <br></br>

                <label>Were you influenced by online reviews when selecting lodging?</label>
                <input type="text" name="AccomodationReviews" value={formData.AccomodationReviews} onChange={handleChange}/>
                <br></br>

                <label>What on-site amenities do you usually go for?</label>
                <input type="text" name="AccomodationAmenities" value={formData.AccomodationAmenities} onChange={handleChange}/>
                <br></br>

                <label>Is complementary breakfast your must have in your package deal?</label>
                <input type="text" name="AccomodationBreakfast" value={formData.AccomodationBreakfast} onChange={handleChange}/>
                <br></br>

                <label>How much of your budget was allocated for the accomodation?</label>
                <input type="text" name="AccomodationBudget" value={formData.AccomodationBudget} onChange={handleChange}/>
                <br></br>

                <label>Did you book directly through accomodation or via a third-party site?</label>
                <input type="text" name="BookingMethod" value={formData.BookingMethod} onChange={handleChange}/>
                <br></br>

                <div style={{ marginTop: "30px" }}>
                <button onClick={prevStep} className="form-button" style={{ marginRight: "10px", backgroundColor: "#6c757d" }}>Back</button>
                <button onClick={nextStep} className="form-button">Next</button>
                </div>
                </div>
                </div>
                );
            }


export default Page2;