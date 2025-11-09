// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Components/Home";
// import MultiForm from "./MultiForm/MultiForm";
// import FinalSubmit from "./Components/FinalSubmit";
// import Thankyou from "./Components/Thankyou";

// function App() {
//   return (
//     <Router>
//       <Routes>
        
//         <Route path="/" element={<Home />} />

//         <Route path="/form" element={<MultiForm />} />

//         <Route path="/final-submit" element={<FinalSubmit />} />

//         <Route path="/thankyou" element={<Thankyou />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MultiForm from "./MultiForm/MultiForm";
import FinalSubmit from "./Components/FinalSubmit";
import Thankyou from "./Components/Thankyou";


function App() {
  return (
    <Router>
   <div style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#f8f8f8",
        borderBottom: "1px solid #ccc",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)"
      }}>
        <img
          src= "/images.jpeg"
          alt="icon"
          style={{ width: "50px", height: "50px", marginRight: "15px"}}
        />
        <h1 style={{ margin: 0, fontSize: "1.8rem", color: "#333" }}>
          Travel Experience Form Survey
        </h1>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<MultiForm />} />
        <Route path="/final-submit" element={<FinalSubmit />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
