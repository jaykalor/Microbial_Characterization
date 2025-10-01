// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(() => {
//         try {
//             return localStorage.getItem('token') || "";
//         } catch (error) {
//             console.error("Error accessing localStorage:", error);
//             return "";
//         }
//     });

//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [services, setServices] = useState([]);

//     const authorizationToken = token ? `Bearer ${token}` : "";

//     // Store token securely in localStorage
//     const storeTokenInLS = (serverToken) => {
//         try {
//             setToken(serverToken);
//             localStorage.setItem("token", serverToken);
//         } catch (error) {
//             console.error("Error storing token:", error);
//         }
//     };

//     // Check if the user is logged in
//     const isLoggedIn = Boolean(token);
//     console.log("Is Logged in:", isLoggedIn);

//     // Logout function
//     const LogoutUser = () => {
//         try {
//             setToken("");
//             localStorage.removeItem("token");
//         } catch (error) {
//             console.error("Error removing token:", error);
//         }
//     };

//     // Fetch logged-in user data
//     const userAuthentication = async () => {
//         try {
//             setIsLoading(true);
//             const response = await fetch("http://localhost:5000/api/auth/user", {
//                 method: "GET",
//                 headers: {
//                     Authorization: authorizationToken,
//                 },
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("User Data:", data.userData);
//                 setUser(data.userData);
//             } else {
//                 console.error("Error: Unable to fetch user data, Status:", response.status);
//             }
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Fetch all services
//     const fetchServices = async () => {
//         try {
//             console.log("Authorization Token Before Request:", authorizationToken); // Debugging
    
//             const response = await fetch("http://localhost:5000/api/service", {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": authorizationToken, // Ensure token is included
//                 },
//             });
    
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Fetched Services:", data.services);
//                 setServices(data.services);
//             } else {
//                 const errorText = await response.text();
//                 console.error("Error fetching services, Status:", response.status, "Response:", errorText);
//             }
//         } catch (error) {
//             console.error("Services Frontend Error:", error);
//         }
//     };
    

//     // Fetch a single service by ID
//     const getServiceById = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/service/${id}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: authorizationToken,
//                 },
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Fetched Service:", data);
//                 return data;
//             } else {
//                 console.error(`Error: Service not found for ID ${id}`);
//             }
//         } catch (error) {
//             console.error(`Error fetching service with ID ${id}:`, error);
//         }
//     };

//     // Fetch data on component mount
//     useEffect(() => {
//         if (token) {
//             userAuthentication();
//         }
//         fetchServices();
//     }, [token]);

//     return (
//         <AuthContext.Provider value={{ 
//             isLoggedIn, 
//             storeTokenInLS, 
//             LogoutUser, 
//             user, 
//             services, 
//             authorizationToken, 
//             isLoading, 
//             fetchServices, 
//             getServiceById
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Custom hook for consuming AuthContext
// export const useAuth = () => {
//     return useContext(AuthContext);
// };

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        try {
            return localStorage.getItem('token') || "";
        } catch (error) {
            console.error("Error accessing localStorage:", error);
            return "";
        }
    });

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);

    const authorizationToken = token ? `Bearer ${token}` : "";

    // Store token securely in localStorage
    const storeTokenInLS = (serverToken) => {
        try {
            setToken(serverToken);
            localStorage.setItem("token", serverToken);
        } catch (error) {
            console.error("Error storing token:", error);
        }
    };

    // Logout function
    const LogoutUser = () => {
        try {
            setToken("");
            localStorage.removeItem("token");
        } catch (error) {
            console.error("Error removing token:", error);
        }
    };

    // Fetch logged-in user data
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            } else {
                console.error("Error fetching user data, Status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch all services
    const fetchServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/service", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setServices(data.services);
            } else {
                console.error("Error fetching services, Status:", response.status);
            }
        } catch (error) {
            console.error("Services Frontend Error:", error);
        }
    };

    useEffect(() => {
        if (token) {
            userAuthentication();
        }
        fetchServices();
    }, [token]);

    return (
        <AuthContext.Provider value={{ 
            isLoggedIn: Boolean(token), 
            storeTokenInLS, 
            LogoutUser, 
            user, 
            services, 
            authorizationToken, 
            isLoading, 
            fetchServices
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for consuming AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
