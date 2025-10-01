// import { useEffect, useState } from "react";
// import { useAuth } from "../store/auth";
// //import "../index.css"; // Ensure CSS is included

// export const Profile = () => {
//   const [user, setUser] = useState(null);
//   const auth = useAuth(); // Ensure correct access to auth functions

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // Retrieve token properly
//         const token = localStorage.getItem("token");

//         if (!token) {
//           console.error("No authentication token found.");
//           return;
//         }

//         const response = await fetch("http://localhost:5000/api/auth/profile", {
//           method: "GET",
//           headers: {
//             "Authorization": `Bearer ${token}`,  // Ensure proper formatting
//             "Content-Type": "application/json",
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setUser(data);
//         } else {
//           console.error("Error fetching profile data:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (!user) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-image">
//           <img src="/images/profile.png" alt="Profile" />
//         </div>
//         <div className="profile-details">
//           <p><strong>Username:</strong> {user.username}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone}</p>
//           <p><strong>Password:</strong> ********</p>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No authentication token found.");
          return;
        }

        const response = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error("Error fetching profile data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  // Function to mask email
  const maskEmail = (email) => {
    const [name, domain] = email.split("@");
    return `${name[0]}***@${domain}`;
  };

  // Function to mask phone
  const maskPhone = (phone) => {
    return phone.length >= 4 ? `${phone.slice(0, 2)}******${phone.slice(-2)}` : phone;
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src="/images/profile.png" alt="Profile" />
        </div>
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {maskEmail(user.email)}</p>
          <p><strong>Phone:</strong> {maskPhone(user.phone)}</p>
          <p><strong>Password:</strong> ********</p>
        </div>
      </div>
    </div>
  );
};
