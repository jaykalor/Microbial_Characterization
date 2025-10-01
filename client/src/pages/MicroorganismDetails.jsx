import { useParams } from "react-router-dom";

const microorganismData = [
    {
        "name": "Influenza virus",
        "date_of_cause": "1933",
        "discovered_by": "Richard Shope (in pigs) and later human flu identified",
        "disease_emergence": "Ancient times",
        "vaccination": "Seasonal flu vaccine",
        "description": "Influenza viruses cause seasonal flu, a contagious respiratory illness that can lead to mild to severe symptoms. Annual vaccination is recommended to prevent infection and complications.",
        "image": "/images/Influenza_virus.jpeg"
    },
    {
        "name": "Hepatitis B virus",
        "date_of_cause": "1965",
        "discovered_by": "Baruch Blumberg",
        "disease_emergence": "Ancient times",
        "vaccination": "Hepatitis B vaccine",
        "description": "Hepatitis B virus (HBV) causes hepatitis B, an infection affecting the liver. Chronic HBV infection can lead to liver cirrhosis or cancer. Vaccination is an effective preventive measure.",
        "image": "/images/Hepatitis_B_virus.jpeg"
    },
    {
        "name": "SARS-CoV-2",
        "date_of_cause": "2019",
        "discovered_by": "Chinese scientists",
        "disease_emergence": "December 2019",
        "vaccination": "Pfizer, Moderna, Covaxin, Sinovac, etc.",
        "description": "SARS-CoV-2 is the coronavirus responsible for COVID-19, a global pandemic causing respiratory illness. Vaccination programs worldwide aim to control its spread and severity.",
        "image": "/images/SARS_CoV_2.jpeg"
    }
];

export const MicroorganismDetails = () => {
    const { name } = useParams(); // Get URL parameter
    const formattedName = name.replace(/ /g, ' '); // Convert '-' back to spaces

    const microorganism = microorganismData.find(
        (item) => item.name.toLowerCase() === formattedName.toLowerCase()
    );

    if (!microorganism) {
        return <h2>Microorganism Not Found</h2>;
    }

    return (
        <div className="microorganism-details">
            <h2>{microorganism.name}</h2>
            <img src={microorganism.image} alt={microorganism.name} width="250" />
            <p><strong>Discovered by:</strong> {microorganism.discovered_by}</p>
            <p><strong>Date of Cause:</strong> {microorganism.date_of_cause}</p>
            <p><strong>Disease Emergence:</strong> {microorganism.disease_emergence}</p>
            <p><strong>Vaccination:</strong> {microorganism.vaccination}</p>
            <p><strong>Description:</strong> {microorganism.description}</p>
        </div>
    );
};