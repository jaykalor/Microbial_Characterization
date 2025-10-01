import { useNavigate } from "react-router-dom";

export const Vaccination = () => {
    const navigate = useNavigate();
    
    const vaccinations = [
        {
            Vaccine_name: "BCG vaccine",
            discovered_on: "18 July 1921",
            discovered_by: "Calmette and Guérin",
            disease_name: "Mycobacterium tuberculosis",
            disease_emergence: "Ancient times",
            description: "Bacille Calmette-Guérin (BCG) is a vaccine for tuberculosis (TB) disease. This vaccine is not generally used in the United States. The vaccine can cause a false-positive TB skin test reaction.",
            image: "/images/BCG_vaccine.jpeg"
        },
        {
            Vaccine_name: "Smallpox vaccine",
            discovered_on: "1796",
            discovered_by: "Dr. Edward Jenner",
            disease_name: "Variola virus",
            disease_emergence: "Ancient times",
            description: "The smallpox vaccine protects people from smallpox by helping their bodies develop immunity to smallpox. The vaccine is made from a virus called vaccinia, which is a poxvirus similar to smallpox, but less harmful.",
            image: "/images/Smallpox_vaccine.jpeg"
        },
        {
            Vaccine_name: "Tetanus toxoid vaccine (TT)",
            discovered_on: "1890",
            discovered_by: "Emil von Behring",
            disease_name: "Clostridium tetani",
            disease_emergence: "Ancient times",
            description: "Tetanus Toxoid is used to prevent tetanus (also known as lockjaw). Tetanus is a serious illness that causes convulsions (seizures) and severe muscle spasms that can be strong enough to cause bone fractures of the spine. Tetanus causes death in 30 to 40 percent of cases.",
            image: "/images/Tetanus_toxoid_vaccine_(TT).jpeg"
        },
        {
            Vaccine_name: "RTS,S (Mosquirix) vaccine",
            discovered_on: "1987",
            discovered_by: "GlaxoSmithKline",
            disease_name: "Plasmodium falciparum",
            disease_emergence: "Ancient times",
            description: "RTS,S/AS01 (Mosquirix®) is a vaccine against malaria caused by P. falciparum. In phase 3 trials, RTS,S/AS01 showed vaccine efficacy against P. falciparum malaria and was at least as effective as seasonal malaria chemoprevention in children, with an acceptable safety and tolerability profile.",
            image: "/images/RTS,S_(Mosquirix)_vaccine.jpeg"
        },
        {
            Vaccine_name: "Plague vaccine",
            discovered_on: "1897",
            discovered_by: "Waldemar Haffkine",
            disease_name: "Yersinia pestis",
            disease_emergence: "Ancient times",
            description: "The plague vaccine licensed for use in the United States is prepared from Y. pestis organisms grown in artificial media, inactivated with formaldehyde, and preserved in 0.5% phenol.",
            image: "/images/Plague_vaccine.jpeg"
        },
        {
            Vaccine_name: "Hepatitis B vaccine",
            discovered_on: "1981",
            discovered_by: "Blumberg and Millman",
            disease_name: "Hepatitis B virus",
            disease_emergence: "Ancient times",
            description: "Hepatitis B vaccine recombinant is used to prevent infection by the hepatitis B virus. The vaccine works by causing your body to produce its own protection (antibodies) against the disease.",
            image: "/images/Hepatitis_B_vaccine.jpeg"
        },
        {
            Vaccine_name: "Seasonal flu vaccine",
            discovered_on: "1942",
            discovered_by: "Thomas Francis and Jonas Salk",
            disease_name: "Influenza virus",
            disease_emergence: "Ancient times",
            description: "Influenza vaccines, colloquially known as flu shots or the flu jab, are vaccines that protect against infection by influenza viruses.",
            image: "/images/Seasonal_flu_vaccine.jpeg"
        },
        {
            Vaccine_name: "Covaxin",
            discovered_on: "31 January 2022",
            discovered_by: "Bharat Biotech",
            disease_name: "SARS-CoV-2 (Covid-19, Corona Virus)",
            disease_emergence: "December 2019",
            description: "It is a vaccine with no sub-zero storage, no reconstitution requirement, and ready-to-use liquid presentation in multi-dose vials, stable at 2-8°C.",
            image: "/images/covaxin.jpg"
        },
        {
            Vaccine_name: "Polio",
            discovered_on: "1955",
            discovered_by: "Jonas Salk",
            disease_name: "Poliomyelitis (polio)",
            disease_emergence: "Late 19th century",
            description: "Poliovirus vaccine is an active immunizing agent used to prevent poliomyelitis (polio). It works by causing your body to produce its own protection (antibodies) against the virus that causes polio.",
            image: "/images/Polio_vaccine.jpeg"
        }
    ];

    return (
        <section className="section-vaccination">
            <div className="container">
                <h1 className="main-heading">Vaccinations</h1>
            </div>

            <div className="container grid grid-three-cols">
                {vaccinations.length > 0 ? (
                    vaccinations.map((vaccine, index) => {
                        const { Vaccine_name, discovered_by, discovered_on, description, image } = vaccine;
                        return (
                            <div className="card" key={index} onClick={() => navigate(`/vaccination/${Vaccine_name.replace(/\s+/g, '-').toLowerCase()}`)} style={{ cursor: 'pointer' }}>
                                <div className="card-img">
                                    <img src={image} alt={Vaccine_name} width="150" height="100" />
                                </div>
                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{discovered_by || "Unknown"}</p>
                                        <p>{discovered_on || "N/A"}</p>
                                    </div>
                                    <h2>{Vaccine_name || "Vaccine Name"}</h2>
                                    <p>{description || "No description available."}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="no-data">No vaccinations available.</p>
                )}
            </div>
        </section>
    );
};
