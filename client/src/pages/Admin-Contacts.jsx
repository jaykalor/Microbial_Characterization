// import { useEffect, useState } from "react";
// import { useAuth } from "../store/auth";
// import { toast } from "react-toastify";

// export const AdminContacts = () => {
//     const [contactData, setContactData] = useState([]);
//     const { authorizationToken } = useAuth();

//     // Fetch all contacts
//     const getContactsData = async () => {
//         try {
//             const response = await fetch("http://localhost:5000/api/admin/contacts", {
//                 method: "GET",
//                 headers: {
//                     Authorization: authorizationToken,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to fetch contacts");
//             }

//             const data = await response.json();
//             console.log("Contacts Data:", data);
//             setContactData(data);
//         } catch (error) {
//             console.error("Error fetching contacts:", error);
//             toast.error("Error fetching contacts");
//         }
//     };

//     // Delete contact
//     const deleteContactById = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/admin/contacts/${id}`, { // Fixed endpoint
//                 method: "DELETE",
//                 headers: {
//                     Authorization: authorizationToken,
//                 },
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 setContactData((prevContacts) => prevContacts.filter((contact) => contact._id !== id)); // Update UI
//                 toast.success("Contact Deleted Successfully");
//             } else {
//                 toast.error(result.message || "Failed to delete contact");
//             }
//         } catch (error) {
//             console.error("Error deleting contact:", error);
//             toast.error("An error occurred while deleting the contact");
//         }
//     };

//     useEffect(() => {
//         getContactsData();
//     }, []);

//     return (
//         <section className="admin-contact-section">
//             <div className="container">
//                 <h1>Admin Messages</h1>
//             </div>
//             <div className="container admin-table">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Message</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {contactData.length > 0 ? (
//                             contactData.map(({ username, email, message, _id }) => (
//                                 <tr key={_id}>
//                                     <td>{username}</td>
//                                     <td>{email}</td>
//                                     <td>{message}</td>
//                                     <td>
//                                         <button className="btn" onClick={() => deleteContactById(_id)}>
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="4">No contacts found.</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </section>
//     );
// };

import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
    const [contactData, setContactData] = useState([]);
    const { authorizationToken } = useAuth();

    // Fetch all contacts
    const getContactsData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch contacts");
            }

            const data = await response.json();
            console.log("Contacts Data:", data);
            setContactData(data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("Error fetching contacts");
        }
    };

    // Delete contact
    const deleteContactById = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/${id}`, { // Fixed endpoint
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            const result = await response.json();

            if (response.ok) {
                setContactData((prevContacts) => prevContacts.filter((contact) => contact._id !== id)); // Update UI
                toast.success("Contact Deleted Successfully");
            } else {
                toast.error(result.message || "Failed to delete contact");
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
            toast.error("An error occurred while deleting the contact");
        }
    };

    useEffect(() => {
        getContactsData();
    }, []);

    return (
        <section className="admin-contact-section">
            <div className="container">
                <h1>Admin Messages</h1>
            </div>
            <div className="container admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactData.length > 0 ? (
                            contactData.map(({ username, email, message, _id }) => (
                                <tr key={_id}>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>
                                        <textarea 
                                            readOnly 
                                            value={message} 
                                            className="message-textarea"
                                        />
                                    </td>
                                    <td>
                                        <button className="btn" onClick={() => deleteContactById(_id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No contacts found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
