// import { useAuth } from "../store/auth";
// import { useState } from "react";
// import { toast } from "react-toastify";

// export const Service = () => {
//     const { services = [], fetchServices, authorizationToken } = useAuth(); // Get services and token
//     const [editingService, setEditingService] = useState(null);
//     const [updatedData, setUpdatedData] = useState({});

//     // Handle input change
//     const handleChange = (e) => {
//         setUpdatedData((prevData) => ({
//             ...prevData,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     // Update service
//     const handleUpdate = async (serviceId, updatedData) => {
//         try {
//             const token = localStorage.getItem("token");
//             if (!token) {
//                 console.error("No token found. Please log in.");
//                 return;
//             }
    
//             const response = await fetch(`http://localhost:5000/api/service/${serviceId}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },
//                 body: JSON.stringify(updatedData),
//             });
    
//             if (response.ok) {
//                 console.log("Service updated successfully!");
//             } else {
//                 const errorResponse = await response.json();
//                 console.error("Failed to update service. Status:", response.status, "Response:", errorResponse);
//             }
//         } catch (error) {
//             console.error("Update error:", error);
//             //toast.success("Successfully Update");
//             //toast.error("Update cancel");
//         }
//     };
    
    

//     // Delete service
//     const handleDelete = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/service/${id}`, {
//                 method: "DELETE",
//                 headers: {
//                     Authorization: authorizationToken,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error(`Failed to delete service. Status: ${response.status}`);
//             }

//             await fetchServices(); // Refresh services after delete
//         } catch (error) {
//             console.error("Delete failed", error);
//             toast.success("Delete Succesfully");
//         }
//     };

//     return (
//         <section className="section-services">
//             <div className="container">
//                 <h1 className="main-heading">Services</h1>
//             </div>
//             <div>
//                 <h2 className="main-heading1">Micro-organism</h2>
//             </div>

//             <div className="container grid grid-three-cols">
//                 {services.length > 0 ? (
//                     services.map(({ _id, discovered_by, date_of_cause, name, description, image }) => (
//                         <div className="card" key={_id}>
//                             <div className="card-img">
//                                 <img 
//                                     src={image || "default-image.jpg"} 
//                                     alt={`Image of ${name}`} 
//                                     width="150" 
//                                     height="100" 
//                                 />
//                             </div>

//                             <div className="card-details">
//                                 {editingService === _id ? (
//                                     <>
//                                         <input name="name" defaultValue={name} onChange={handleChange} />
//                                         <input name="discovered_by" defaultValue={discovered_by} onChange={handleChange} />
//                                         <input name="date_of_cause" defaultValue={date_of_cause} onChange={handleChange} />
//                                         <textarea name="description" defaultValue={description} onChange={handleChange}></textarea>
//                                         <button onClick={() => handleUpdate(_id)}>Save</button>
//                                         <button onClick={() => setEditingService(null)}>Cancel</button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className="grid grid-two-cols">
//                                             <p>{discovered_by || "Unknown"}</p>
//                                             <p>{date_of_cause || "N/A"}</p>
//                                         </div>
//                                         <h2>{name || "Service Name"}</h2>
//                                         <p>{description || "No description available."}</p>
//                                         <button onClick={() => setEditingService(_id)}>Edit</button>
//                                         <button onClick={() => handleDelete(_id)}>Delete</button>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="no-data">No services available.</p>
//                 )}
//             </div>
//         </section>
//     );
// };

import { useAuth } from "../store/auth";
import { useState } from "react";
import { toast } from "react-toastify";

export const Service = () => {
    const { services = [], fetchServices, authorizationToken } = useAuth();
    const [editingService, setEditingService] = useState(null);
    const [updatedData, setUpdatedData] = useState({});

    // Handle input change
    const handleChange = (e) => {
        setUpdatedData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    // Update service
    const handleUpdate = async (serviceId) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("No token found. Please log in.");
                return;
            }
    
            const response = await fetch(`http://localhost:5000/api/service/${serviceId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                toast.success("Service updated successfully!");
                fetchServices(); // Refresh data after update
                setEditingService(null);
            } else {
                const errorResponse = await response.json();
                toast.error(`Failed to update service: ${errorResponse.message}`);
            }
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Update failed.");
        }
    };

    // Delete service
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Authentication required.");
                return;
            }

            const response = await fetch(`http://localhost:5000/api/service/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to delete service. Status: ${response.status}, Response: ${errorText}`);
            }

            toast.success("Service deleted successfully!");
            fetchServices(); // Refresh services after delete
        } catch (error) {
            console.error("Delete failed", error);
            toast.error("Failed to delete service.");
        }
    };

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
                    services.map(({ _id, discovered_by, date_of_cause, name, description, image }) => (
                        <div className="card" key={_id}>
                            <div className="card-img">
                                <img 
                                    src={image || "default-image.jpg"} 
                                    alt={`Image of ${name}`} 
                                    width="150" 
                                    height="100" 
                                />
                            </div>

                            <div className="card-details">
                                {editingService === _id ? (
                                    <>
                                        <input name="name" defaultValue={name} onChange={handleChange} />
                                        <input name="discovered_by" defaultValue={discovered_by} onChange={handleChange} />
                                        <input name="date_of_cause" defaultValue={date_of_cause} onChange={handleChange} />
                                        <textarea name="description" defaultValue={description} onChange={handleChange}></textarea>
                                        <button onClick={() => handleUpdate(_id)}>Save</button>
                                        <button onClick={() => setEditingService(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <div className="grid grid-two-cols">
                                            <p>{discovered_by || "Unknown"}</p>
                                            <p>{date_of_cause || "N/A"}</p>
                                        </div>
                                        <h2>{name || "Service Name"}</h2>
                                        <p>{description || "No description available."}</p>
                                        <button onClick={() => setEditingService(_id)}>Edit</button>
                                        <button onClick={() => handleDelete(_id)}>Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-data">No services available.</p>
                )}
            </div>
        </section>
    );
};