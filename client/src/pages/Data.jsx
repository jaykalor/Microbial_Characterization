import { useAuth } from "../store/auth";

export const Data = () => {
    const { services = [] } = useAuth();  // Fetch services data

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div>
                <h2 className="main-heading1">Micro-organism</h2>
            </div>

            <div className="container grid grid-three-cols">
                {services.length > 0 ? (
                    services.map((curElem, index) => {
                        const { discovered_by, date_of_cause, name, description, image } = curElem;
                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img 
                                        src={image || "default-image.jpg"} // Use the actual image URL or a default placeholder
                                        alt={Image } 
                                        width="150" 
                                        height="100" 
                                    />
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