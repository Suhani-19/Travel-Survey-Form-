import React, { useState } from "react";
import "../App.css"

function Page5({ nextStep, prevStep, handleChange, formData, setFormData }) {
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showBlogInput, setShowBlogInput] = useState(false);
  const [showBestMemoryInput, setShowBestMemoryInput] = useState(false);
  const [showPlaylistInput, setShowPlaylistInput] = useState(false);

  return (
    <div className="page-container">
      <div className="content-box form-box">
        <h2>Reminiscence</h2>

        <label>Would you like to upload a few memorable travel photos?</label>
        <select
          onChange={(e) => setShowImageUpload(e.target.value === "Yes")}
          style={{ display: "block", marginTop: "8px" }}
        >
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {showImageUpload && (
          <>
            <label style={{ marginTop: "10px" }}>Upload Image(s):</label>
            <input
              type="file"
              name="TravelPhotos"
              accept="image/*"
              multiple
              onChange={(e) =>
    handleChange({
      target: {
        name: "TravelPhotos",
        value: Array.from(e.target.files), 
      },
    })
  }
            />
          </>
        )}

        <label>Do you have a travelling Blog/Vlog?</label>
        <select
          onChange={(e) => setShowBlogInput(e.target.value === "Yes")}
          style={{ display: "block", marginTop: "8px" }}
        >
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {showBlogInput && (
          <>
            <label style={{ marginTop: "10px" }}>Blog/Vlog Link:</label>
            <input
              type="url"
              name="BlogOrVlog"
              value={formData.BlogOrVlog}
              onChange={handleChange}
              placeholder="https://yourtravelblog.com"
            />
          </>
        )}

        <label>Did you collect any souvenirs or keepsakes??</label>
        <input
          type="text"
          name="Souvenirs"
          value={formData.Souvenirs}
          onChange={handleChange}
        />
        <br></br>

        <label>Would you like to share some funny moments from your trip?</label>
        <input
          type="text"
          name="FunnyMoments"
          value={formData.FunnyMoments}
          onChange={handleChange}
        />
        <br></br>

        <label>Did you learn anything new about yourself or the world?</label>
        <input
          type="text"
          name="LessonsLearned"
          value={formData.LessonsLearned}
          onChange={handleChange}
        />
        <br></br>

        <label>What was your favourite out of all the food you tried?</label>
        <input
          type="text"
          name="FavouriteFood"
          value={formData.FavouriteFood}
          onChange={handleChange}
        />
        <br></br>

        <label>How did you like the culture? Did you take part in any local community activities?</label>
        <input
          type="text"
          name="Culture"
          value={formData.Culture}
          onChange={handleChange}
        />
        <br></br>

        <label>Did you have any cultural experience where you nearly got cancelled?</label>
        <input
          type="text"
          name="CultureShock"
          value={formData.CultureCancelled}
          onChange={handleChange}
        />
        <br></br>

        <label>Would you like to share your best memory from this trip?</label>
        <select
          onChange={(e) => setShowBestMemoryInput(e.target.value === "Yes")}
          style={{ display: "block", marginTop: "8px" }}
        >
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {showBestMemoryInput && (
          <>
            <label>Your Best Memory:</label>
            <input
              type="text"
              name="BestMoment"
              value={formData.BestMoment}
              onChange={handleChange}
            />
          </>
        )}

        <label>Would you like to share your travel playlist?</label>
        <select
          onChange={(e) => setShowPlaylistInput(e.target.value === "Yes")}
          style={{ display: "block", marginTop: "8px" }}
        >
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {showPlaylistInput && (
          <>
            <label>Playlist Link:</label>
            <input
              type="url"
              name="TravelPlaylist"
              value={formData.TravelPlaylist}
              onChange={handleChange}
              placeholder="https://open.spotify.com/..."
            />
          </>
        )}

        <label>Would you recommend this trip to others?</label>
        <input
          type="text"
          name="WouldYouRecommend"
          value={formData.WouldYouRecommend}
          onChange={handleChange}
        />
        <br></br>

        <label>What would you do differently on your next trip?</label>
        <input
          type="text"
          name="ChangesNextTime"
          value={formData.ChangesNextTime}
          onChange={handleChange}
        />

     <div className="form-group">
  <input 
  type="checkbox"
   id="consent" 
   checked={formData.consent || false}
    onChange={(e) =>
      setFormData({ ...formData, consent: e.target.checked })
    }
  />
  <label htmlFor="consent">
    <span className="required">*</span>I consent to the collection and use of my data for educational and analytical purposes.
  </label>
</div>

         <div style={{ marginTop: "30px" }}>
          <button onClick={prevStep} className="form-button" style={{ marginRight: "10px", backgroundColor: "#6c757d" }}>Back</button>
          <button onClick={nextStep} className="form-button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Page5;
