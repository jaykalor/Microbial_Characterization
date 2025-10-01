import { useNavigate } from "react-router-dom";

export const Microorganism = () => {
    const navigate = useNavigate();
    const services = [
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
        },
        {
            "name": "Yersinia pestis",
            "date_of_cause": "1894",
            "discovered_by": "Alexandre Yersin",
            "disease_emergence": "Ancient times",
            "vaccination": "Plague vaccine (rarely used today)",
            "description": "Yersinia pestis is a bacterium that causes plague, including bubonic plague. Historically, it led to deadly pandemics like the Black Death.",
            "image": "/images/Yersinia_pestis.jpeg"
        },
        {
            "name": "Human Immunodeficiency Virus (HIV)",
            "date_of_cause": "1983",
            "discovered_by": "Luc Montagnier and Robert Gallo",
            "disease_emergence": "20th century",
            "vaccination": "No effective vaccine available yet",
            "description": "HIV attacks the immune system, leading to Acquired Immunodeficiency Syndrome (AIDS). It spreads through blood, sexual contact, and from mother to child.",
            "image": "/images/Human_Immunodeficiency_Virus (HIV).jpeg"
        },
        {
            "name": "Mycobacterium tuberculosis",
            "date_of_cause": "1882-03-24",
            "discovered_by": "Robert Koch",
            "disease_emergence": "Ancient times",
            "vaccination": "BCG vaccine",
            "description": "Mycobacterium tuberculosis causes tuberculosis (TB), a contagious disease affecting the lungs. It spreads through airborne droplets.",
            "image": "/images/Mycobacterium_tuberculosis.jpeg"
        },
        {
            "name": "Clostridium tetani",
            "date_of_cause": "1884",
            "discovered_by": "Arthur Nicolaier",
            "disease_emergence": "Ancient times",
            "vaccination": "Tetanus toxoid vaccine (TT)",
            "description": "Clostridium tetani produces a neurotoxin causing tetanus (lockjaw), leading to muscle stiffness and spasms. Vaccination is essential for prevention.",
            "image": "/images/Clostridium_tetani.jpeg"
        },
        {
            "name": "Variola virus",
            "date_of_cause": "18th century",
            "discovered_by": "Edward Jenner",
            "disease_emergence": "Ancient times",
            "vaccination": "Smallpox vaccine",
            "description": "The Variola virus caused smallpox, a severe infectious disease with high mortality rates. It was eradicated in 1980 through global vaccination efforts.",
            "image": "/images/Variola_virus.jpeg"
        },
        {
            "name": "Treponema pallidum",
            "date_of_cause": "1905-03-03",
            "discovered_by": "Fritz Schaudinn and Erich Hoffmann",
            "disease_emergence": "Prehistoric era",
            "vaccination": "No vaccine, treated with penicillin",
            "description": "Treponema pallidum is a spiral-shaped bacterium that causes syphilis, a sexually transmitted infection (STI). If untreated, it can cause severe complications.",
            "image": "/images/Treponema_pallidum.jpeg"
        },
        {
            "name": "Plasmodium falciparum",
            "date_of_cause": "1880",
            "discovered_by": "Alphonse Laveran",
            "disease_emergence": "Ancient times",
            "vaccination": "RTS,S (Mosquirix) vaccine",
            "description": "Plasmodium falciparum is a protozoan parasite that causes the most severe form of malaria. It is transmitted by Anopheles mosquitoes.",
            "image": "/images/Plasmodium_falciparum.jpeg"
        }
    ];
    

    return (
        <section className="section-services">
            <div className="container">            
                <h1 className="main-heading">Micro-organisms</h1>
            </div>

            <div className="container grid grid-three-cols">
                {services.length > 0 ? (
                    services.map((curElem, index) => {
                        const { discovered_by, date_of_cause, name, description, image } = curElem;
                        return (
                            <div className="card" key={index} onClick={() => navigate(`/micro-organism/${name.replace(/\s+/g, '-').toLowerCase()}`)}
                            style={{ cursor: "pointer" }}>
                                <div className="card-img">
                                    <img src={image} alt={name} width="150" height="100" />
                                </div>

                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{discovered_by || "Unknown"}</p>
                                        <p>{date_of_cause || "N/A"}</p>
                                    </div>
                                    <h2>{name || "Service Name"}</h2>
                                    <p>{description || "No description available."}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="no-data">No services available.</p>
                )}
            </div>
        </section>
    );
};
