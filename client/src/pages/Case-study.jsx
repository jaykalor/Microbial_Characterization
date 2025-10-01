import { useState } from "react";
//import "./CaseStudy.css"; // Importing CSS for styling

export const Casestudy = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const caseStudies = [
    { id: "tuberculosis", name: "Tuberculosis", pdf: "/images/tuberculosis.pdf", img: "/images/Mycobacterium_tuberculosis.jpeg" },
    { id: "H1N1", name: "H1N1 Influenza", pdf: "/images/H1N1.pdf", img: "/images/Influenza_virus.jpeg" },
    { id: "Corona_vaccine", name: "Corona Vaccine", pdf: "/images/Corona_vaccine.pdf", img: "/images/Corona_vaccine.jpeg" },
    { id: "Polio", name: "Polio", pdf: "/images/polio_case.pdf", img: "/images/polio.jpeg" },
    { id: "HIV", name: "HIV/AIDS", pdf: "/images/HIV.pdf", img: "/images/HIV.jpeg" }
  ];

  return (
    <div className="case-study-container">
      {caseStudies.map((study) => (
        <div key={study.id} className="case-study-card" onClick={() => setSelectedPDF(study.pdf)}>
          <img src={study.img} alt={study.name} className="case-study-image" />
          <h3 className="case-study-title">{study.name}</h3>
          <button className="view-pdf-btn">View Case Study</button>
        </div>
      ))}

      {/* Modal for PDF Viewer */}
      {selectedPDF && (
        <div className="modal">
          <iframe src={selectedPDF} title="Case Study PDF"></iframe>
          <span className="close-btn" onClick={() => setSelectedPDF(null)}>&times;</span>
        </div>
      )}
    </div>
  );
};

// import { useState, useEffect } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// //import "pdfjs-dist/build/pdf.worker.entry";

// export const Casestudy = () => {
//   const [selectedPDF, setSelectedPDF] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [pdfText, setPdfText] = useState("");

//   const caseStudies = [
//     { id: "tuberculosis", name: "Tuberculosis", pdf: "/images/tuberculosis.pdf", img: "/images/Mycobacterium_tuberculosis.jpeg" },
//     { id: "H1N1", name: "H1N1 Influenza", pdf: "/images/H1N1.pdf", img: "/images/Influenza_virus.jpeg" },
//     { id: "Corona_vaccine", name: "Corona Vaccine", pdf: "/images/Corona_vaccine.pdf", img: "/images/Corona_vaccine.jpeg" },
//     { id: "Polio", name: "Polio", pdf: "/images/polio_case.pdf", img: "/images/polio.jpeg" },
//     { id: "HIV", name: "HIV/AIDS", pdf: "/images/HIV.pdf", img: "/images/HIV.jpeg" }
//   ];

//   const loadPdfText = async (pdfUrl) => {
//     try {
//       const loadingTask = pdfjsLib.getDocument(pdfUrl);
//       const pdf = await loadingTask.promise;
//       let textContent = "";

//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const text = await page.getTextContent();
//         textContent += text.items.map((item) => item.str).join(" ") + " ";
//       }

//       setPdfText(textContent);
//     } catch (error) {
//       console.error("Error loading PDF text:", error);
//       setPdfText("Unable to load text from this PDF.");
//     }
//   };

//   useEffect(() => {
//     if (selectedPDF) {
//       loadPdfText(selectedPDF);
//     }
//   }, [selectedPDF]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div className="case-study-container">
//       {caseStudies.map((study) => (
//         <div key={study.id} className="case-study-card">
//           <img src={study.img} alt={study.name} className="case-study-image" />
//           <h3 className="case-study-title">{study.name}</h3>
//           <button className="view-pdf-btn" onClick={() => setSelectedPDF(study.pdf)}>View Case Study</button>
//         </div>
//       ))}

//       {/* Modal for PDF Viewer with Search */}
//       {selectedPDF && (
//         <div className="modal">
//           <input
//             type="text"
//             placeholder="Search in PDF"
//             value={searchQuery}
//             onChange={handleSearch}
//             className="search-bar"
//           />
//           <iframe src={selectedPDF} title="Case Study PDF"></iframe>
//           <span className="close-btn" onClick={() => setSelectedPDF(null)}>&times;</span>

//           {/* Display search results */}
//           <div className="search-results">
//             {searchQuery &&
//               (pdfText.toLowerCase().includes(searchQuery.toLowerCase()) ? (
//                 <p>Found occurrences in text!</p>
//               ) : (
//                 <p>No matches found.</p>
//               ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
