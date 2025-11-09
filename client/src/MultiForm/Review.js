import React from "react";
import { fieldLabels } from "./MultiForm";
import "../App.css"


function Page6({ formData, prevStep, handleSubmit, handleSaveDraft }) {
  const requiredFields = ["Name", "Age", "Nationality", "purpose", "ExperienceType", "Motivation", "TransportMode", "AccomodationType", "destinationChoice", "TotalBudget", "FoodBudget", "TripDuration", "UnexpectedCosts", "CompanionType", "ActivityChoices","FirstAid", "PoliticalStability", "EncounterHealthIssues", "TravelPhotos", "BlogOrPhoto", "TravelTakeout",  "FavouriteFood", "Culture", "BestMemory"];

  const missingFields = requiredFields.filter((field) => !formData[field]);

  return (
    <div className="form-box">
      <h2>Review</h2>
      <p>Please review your responses before submitting the form.</p>

      {/* {missingFields.length > 0 && (
        <div style={{ backgroundColor: "#ffe0e0", padding: "10px", marginBottom: "15px", border: "1px solid red", borderRadius: "5px" }}>
          <strong>⚠ Missing Required Fields:</strong>
          <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
            {missingFields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </div>
      )} */}


      <div style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "20px" }}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={{ marginBottom: "10px" }}>
            <strong>{fieldLabels[key] || key}:
              {requiredFields.includes(key) && <span style={{ color: "red" }}> *</span>}:
            </strong>
            <div style={{ paddingLeft: "10px" }}>
              {/* Image/ File field preview */}
              {key === "IDProof" && value && typeof value === "object" && value.name ? (
                <span>{value.name}</span>
              ) : (
                value || <em style={{ color: "#999" }}>Not provided</em>
              )}
            </div>
          </div>
        ))}
      </div>

      
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={prevStep}
          className="form-button"
          style={{ marginRight: "10px", backgroundColor: "#6c757d" }}
        >
          Back
        </button>

        <button
          onClick={handleSaveDraft}
          className="form-button"
          style={{ marginRight: "10px", backgroundColor: "#007bff" }}
        >
          Save as Draft
        </button>

        <button
          onClick={handleSubmit}
          className="form-button"
          disabled={missingFields.length > 0}
          style={{ backgroundColor: missingFields.length > 0 ? "#ccc" : "#28a745", cursor: missingFields.length > 0 ? "not-allowed" : "pointer" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Page6;
