import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminUsers = () => {
    const [users, setUser] = useState([]);
    const { authorizationToken } = useAuth();

    // Fetch all users
    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Error fetching user data");
        }
    };

    // Delete user function
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, { // Removed /delete
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            const result = await response.json();

            if (response.ok) {
                setUser((prevUsers) => prevUsers.filter((user) => user._id !== id)); // Update UI
                toast.success("User successfully deleted");
            } else {
                toast.error(result.message || "Failed to delete user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("An error occurred while deleting the user");
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <section className="admin-users-section">
            <div className="container">
                <h1>Admin User Data</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map(({ username, email, phone, _id }) => (
                                <tr key={_id}>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <Link to={`/admin/users/update/${_id}`}> Edit </Link>
                                    </td>
                                    <td>
                                        <button className="btn" onClick={() => deleteUser(_id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No users found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
