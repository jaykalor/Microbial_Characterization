// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { toast } from "react-toastify";

// export const AdminUpdate = () => {
//     const [data, setData] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         isActive: true, // New field for activation status
//     });

//     const params = useParams();
//     const { authorizationToken } = useAuth();

//     // Fetch single user data
//     const getSingleUserData = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
//                 method: "GET",  
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: authorizationToken,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to fetch user data");
//             }

//             const userData = await response.json();
//             setData(userData); 
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//             toast.error("Failed to load user data");
//         }
//     };

//     useEffect(() => {
//         getSingleUserData();
//     }, [params.id]);

//     // Handle input changes
//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // Handle user update
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
//                 method: "PATCH", 
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: authorizationToken,
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 toast.success("User updated successfully!");
//             } else {
//                 toast.error("Failed to update user.");
//             }
//         } catch (error) {
//             console.error("Error updating user:", error);
//             toast.error("An error occurred.");
//         }
//     };

//     // Handle activation status update
//     const handleStatusChange = async (status) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/admin/users/status/${params.id}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: authorizationToken,
//                 },
//                 body: JSON.stringify({ isActive: status }),
//             });

//             if (response.ok) {
//                 setData((prevData) => ({ ...prevData, isActive: status }));
//                 toast.success(`User ${status ? "activated" : "deactivated"} successfully!`);
//             } else {
//                 toast.error("Failed to update user status.");
//             }
//         } catch (error) {
//             console.error("Error updating user status:", error);
//             toast.error("An error occurred.");
//         }
//     };

//     return (
//         <section className="section-contact">
//             <div className="contact-content container">
//                 <h1 className="main-heading">Update User Data</h1>
//             </div>

//             <div className="container grid grid-two-cols">
//                 <section className="section-form">
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label htmlFor="username">Username</label>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 id="username"
//                                 autoComplete="off"
//                                 value={data.username}
//                                 onChange={handleInput}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 autoComplete="off"
//                                 value={data.email}
//                                 onChange={handleInput}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="phone">Mobile</label>
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 id="phone"
//                                 autoComplete="off"
//                                 value={data.phone}
//                                 onChange={handleInput}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <button type="submit">Update</button>
//                         </div>
//                     </form>

//                     {/* Activate / Deactivate Buttons */}
//                     <div style={{ marginTop: "10px" }}>
//                         {data.isActive ? (
//                             <button 
//                                 style={{ background: "red", color: "white", marginRight: "10px" }} 
//                                 onClick={() => handleStatusChange(false)}
//                             >
//                                 Deactivate
//                             </button>
//                         ) : (
//                             <button 
//                                 style={{ background: "green", color: "white" }} 
//                                 onClick={() => handleStatusChange(true)}
//                             >
//                                 Activate
//                             </button>
//                         )}
//                     </div>
//                 </section>
//             </div>
//         </section>
//     );
// };
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = ({ isServiceUpdate = false, isAdmin }) => {
    const [data, setData] = useState(
        isServiceUpdate
            ? { title: "", description: "" } // Service update fields
            : { username: "", email: "", phone: "", isActive: true } // User update fields
    );

    const params = useParams();
    const { authorizationToken } = useAuth();

    // Fetch data (User or Service based on isServiceUpdate)
    const fetchData = async () => {
        try {
            const endpoint = isServiceUpdate
                ? `http://localhost:5000/api/services/${params.id}`
                : `http://localhost:5000/api/admin/users/${params.id}`;

            const response = await fetch(endpoint, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authorizationToken}`,
                },
            });

            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to load data");
        }
    };

    useEffect(() => {
        fetchData();
    }, [params.id]);

    // Handle input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission (Update user or service)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const endpoint = isServiceUpdate
                ? `http://localhost:5000/api/services/${params.id}`
                : `http://localhost:5000/api/admin/users/update/${params.id}`;

            const method = isServiceUpdate ? "PUT" : "PATCH"; // PUT for services, PATCH for users

            const response = await fetch(endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authorizationToken}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success(`${isServiceUpdate ? "Service" : "User"} updated successfully!`);
            } else {
                toast.error(`Failed to update ${isServiceUpdate ? "service" : "user"}.`);
            }
        } catch (error) {
            console.error("Error updating:", error);
            toast.error("An error occurred.");
        }
    };

    // Handle activation/deactivation of a user
    const handleStatusChange = async (status) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/users/status/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authorizationToken}`,
                    },
                    body: JSON.stringify({ isActive: status }),
                }
            );

            if (response.ok) {
                setData((prevData) => ({ ...prevData, isActive: status }));
                toast.success(`User ${status ? "activated" : "deactivated"} successfully!`);
            } else {
                toast.error("Failed to update user status.");
            }
        } catch (error) {
            console.error("Error updating user status:", error);
            toast.error("An error occurred.");
        }
    };

    // Handle service edit
    const editService = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/services/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authorizationToken}`,
                },
                body: JSON.stringify({
                    title: data.title,
                    description: data.description,
                }),
            });

            if (response.ok) {
                toast.success("Service updated successfully!");
                fetchData(); // Refresh data
            } else {
                toast.error("Failed to update service.");
            }
        } catch (error) {
            console.error("Error updating service:", error);
            toast.error("An error occurred.");
        }
    };

    // Handle service delete
    const deleteService = async () => {
        if (window.confirm("Are you sure you want to delete this service?")) {
            try {
                const response = await fetch(`http://localhost:5000/api/services/${params.id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${authorizationToken}`,
                    },
                });

                if (response.ok) {
                    toast.success("Service deleted successfully!");
                    // Redirect or refresh data
                } else {
                    toast.error("Failed to delete service.");
                }
            } catch (error) {
                console.error("Error deleting service:", error);
                toast.error("An error occurred.");
            }
        }
    };

    return (
        <section className="admin-update-section">
            <div className="container">
                <h1 className="main-heading">{isServiceUpdate ? "Update Service" : "Update User"}</h1>
            </div>

            <div className="container grid grid-two-cols">
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        {isServiceUpdate ? (
                            <>
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        autoComplete="off"
                                        value={data.title}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        autoComplete="off"
                                        value={data.description}
                                        onChange={handleInput}
                                        required
                                    ></textarea>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="off"
                                        value={data.username}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="off"
                                        value={data.email}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Mobile</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="off"
                                        value={data.phone}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <button type="submit">Update</button>
                        </div>
                    </form>

                    {!isServiceUpdate && (
                        <div style={{ marginTop: "10px" }}>
                            {data.isActive ? (
                                <button style={{ background: "red", color: "white" }} onClick={() => handleStatusChange(false)}>
                                    Deactivate
                                </button>
                            ) : (
                                <button style={{ background: "green", color: "white" }} onClick={() => handleStatusChange(true)}>
                                    Activate
                                </button>
                            )}
                        </div>
                    )}
                </section>
            </div>

            {isAdmin && isServiceUpdate && data.title && (
    <div className="admin-buttons">
        <button onClick={editService}>✏️ Edit</button>
        <button onClick={deleteService}>🗑️ Delete</button>
    </div>
)}
        </section>
    );
};