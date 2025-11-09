import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Review";
import axios from "axios";

function MultiForm() {
  const [currentStep, setCurrentStep] = useState(1);


  const [formData, setFormData] = useState({
    // Page 1
    Name: "", Age: "", DOB: "", Nationality: "", MaritalStatus: "", Occupation: "", IDProof: "", purpose: "", ExperienceType: "", Motivation: "",

    // Page 2
    TransportMode: "", TransportCost: "", TransportConvinience: "", TransportCrowd: "",
    AccommodationType: "", AccomodationReviews: "", AccomodationAmenities: "", AccomodationBreakfast: "", AccomodationBudget: "", BookingMethod: "",

    // Page 3
    destinationChoice: "", DestinationWeather: "", socialmedia: "", TravelPattern: "",
    TotalBudget: "", FoodBudget: "", TravelInsurance: "", TripDuration: "", ActivitiesBudget: "", ShoppingSlurge: "", UnexpectedCosts: "",

    // Page 4
    CompanionType: "", ActivityChoices: "", InfluenceOnBudget: "",
    FirstAid: "", PoliticalStability: "", EncounterHealthIssues: "",

    // Page 5
    TravelPhotos: "", BlogOrVlog: "", Souvenirs: "", FunnyMoments: "", LessonLearned: "", FavouriteFood: "", Culture: "", CulturalShock: "", BestMoment: "", TravelPlaylist: "", WouldYouRecommend: "", ChangesNextTime: "",
    
    //Consent
    consent: false
  });

  const handleNext = () => {
  // Let's say consent is required on Page 5
  if (currentStep === 5 && !formData.consent) {
    alert("Please agree to the terms before proceeding.");
    return;
  }
  setCurrentStep((prev) => prev + 1);
};

  const handleChange = (e) => {
    const { name, type, value, files, checked } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSaveDraft = () => {
    localStorage.setItem("travelFormDraft", JSON.stringify(formData));
    alert("Draft saved locally!");
  };

  const handleSubmit = async () => {
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post("http://localhost:5000/submit-form", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Form submitted successfully!");
      setCurrentStep(1);

      // Reset formData
      setFormData({
        Name: "", Age: "", DOB: "", Nationality: "", MaritalStatus: "", Occupation: "", IDProof: "",
        purpose: "", ExperienceType: "", Motivation: "",
        TransportMode: "", TransportCost: "", TransportConvinience: "", TransportCrowd: "",
        AccommodationType: "", AccomodationReviews: "", AccomodationAmenities: "", AccomodationBreakfast: "", AccomodationBudget: "", BookingMethod: "",
        destinationChoice: "", DestinationWeather: "", socialmedia: "", TravelPattern: "",
        TotalBudget: "", FoodBudget: "", TravelInsurance: "", TripDuration: "", ActivitiesBudget: "", ShoppingSlurge: "", UnexpectedCosts: "",
        CompanionType: "", ActivityChoices: "", InfluenceOnBudget: "",
        FirstAid: "", PoliticalStability: "", EncounterHealthIssues: "",
        TravelPhotos: "", BlogOrVlog: "", Souvenirs: "", FunnyMoments: "", LessonLearned: "", FavouriteFood: "", Culture: "", CulturalShock: "", BestMoment: "", TravelPlaylist: "", WouldYouRecommend: "", ChangesNextTime: "",
        Consent: false
      });
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Error submitting form");
    }
  };

  const steps = {
    1: <Page1 formData={formData} handleChange={handleChange} nextStep={nextStep} />,
    2: <Page2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />,
    3: <Page3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />,
    4: <Page4 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />,
    5: <Page5 formData={formData} setFormData={setFormData} handleChange={handleChange} nextStep={handleNext} prevStep={prevStep} />,
    6: <Page6 formData={formData} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} handleSaveDraft={handleSaveDraft} />
  };

  return (
    <div className="form-container">
      {steps[currentStep]}
    </div>
  );
}

export const fieldLabels = {
Name: "What is your name?",
  Age: "How old are you?",
  DOB: "Date of Birth",
  Nationality: "Nationality",
  MaritalStatus: "Marital Status",
  Occupation: "Occupation",
  IDProof: "Upload ID Proof",
  purpose: "Purpose of travel (leisure, business, etc.)",
  ExperienceType: "Type of experience you were seeking",
  Motivation: "What encouraged you to book this travel?",
  TransportMode: "Mode of transport used",
  TransportCost: "How much did cost influence your transport choice?",
  TransportConvinience: "Was your transport convenient and punctual?",
  TransportCrowd: "Do you prefer solo or crowd travel?",
  AccomodationType: "Type of accommodation opted for",
  AccomodationReviews: "Were you influenced by reviews?",
   AccomodationAmenities: "What on-site amenities do you go for?",
  AccomodationBreakfast: "Is complementary breakfast a must-have?",
  AccomodationBudget: "Budget allocated for accommodation",
  BookingMethod: "How did you book your accommodation?",
  destinationChoice: "How did you first learn about the destination you chose?",
  DestinationWeather: "How important was the weather in your decision making??",
  socialmedia: "Did social media influence your decision?",
  TravelPattern:"Do you travel to same places or do you like to visit new places?" ,
  TotalBudget: "What was your overall travel budget?",
  FoodBudget: "How much did you spend on food & dining?",
  TravelInsurance: "Did you purchase travel Insurance?",
  TripDuration: "Do you usually take short trips or long trips?",
  ActivitiesBudget: "How much of your budget did you allocate for activities & experiences?",
  ShoppingSlurge: "Did you slurge on shopping and souvenirs?",
  UnexpectedCosts: "Were there any unexpected costs during the trip?",
  CompanionType: "Did you travel Solo/ With others/ Family/ Friends/ Some community?",
  ActivityChoices: "Did travelling with others affected your destination/ activity choices?",
  InfluecneOnBudget:"How budget was influenced by travelling with others?",
  FirstAid:"What items did you pack for your travel first-aid",
  PoloticalStability:"Did political stability in your chosen destination concern you?",
  EncounterHealthIssues:"Did you encounter any health issues during your trip?",
  TravelPhotos: "Would you like to upload a few memorable travel photos?",
  BlogOrVlog:"Do you have a travelling Blog/Vlog?",
  Souvenirs: "Did you collect any souvenirs or keepsakes?",
  FunnyMomnets: "Would you like to share some funny moments from your trip?",
  LessonsLearned: "Did you learn anything new about yourself or the world?",
  FaouriteFood:"What was your favourite out of all the food you tried?",
  Culture:"How did you like the culture? Did you take part in any local community activities?",
  CultureShock:"Did you have any cultural experience where you nearly got cancelled?",
  BestMoment:"Would you like to share your best memory from this trip?",
  TravelPlaylist:"Would you like to share your travel playlist?",
  WouldYouRecommend: "Would you recommend this trip to others?",
  ChangesNextTime: "What would you do differently on your next trip?",
};

export const requiredFields = [
  "Name", "Age", "Nationality", "purpose", "ExperienceType", "Motivation", "TransportMode", "AccomodationType", "destinationChoice", "TotalBudget", "FoodBudget", "TripDuration", "UnexpectedCosts", "CompanionType", "ActivityChoices","FirstAid", "PoliticalStability", "EncounterHealthIssues", "TravelPhotos", "BlogOrPhoto", "TravelTakeout",  "FavouriteFood", "Culture", "BestMemory"];

export default MultiForm;
