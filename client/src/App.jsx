  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import { Home } from "./pages/Home";
  import { About } from "./pages/About";
  import { Contact } from "./pages/Contact";
  import { Service } from "./pages/Service";
  import { Data } from "./pages/Data";
  import { Microorganism } from "./pages/Micro-organism";
  import { MicroorganismDetails } from "./pages/MicroorganismDetails";
  import { Vaccination } from "./pages/Vaccination";
  import { Casestudy } from "./pages/Case-study";
  import { Register } from "./pages/Register";
  import { Login } from "./pages/Login";
  import { Logout } from "./pages/Logout";
  import { Profile } from "./pages/Profile";
  import { Navbar } from "./components/Navbar";
  import { Error } from "./pages/Error";
  import { AdminLayout } from "./components/layouts/Admin-Layout";
  import { AdminUsers } from "./pages/Admin-Users";
  import { AdminContacts } from "./pages/Admin-Contacts";
  import { AdminUpdate } from "./pages/Admin-Update";

  const App = () => {
    return <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/info" element={<Data/>} />
          <Route path="/register" element={<Register />} />
          <Route>
                <Route path="/micro-organism" element={<Microorganism />} />
                <Route path="/:name" element={<MicroorganismDetails />} />
          </Route>
          <Route path="/vaccination" element={<Vaccination />} />
          <Route path="/case-study" element={<Casestudy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<Error />}/>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="users/update/:id" element={<AdminUpdate />} />
            <Route path="contacts" element={<AdminContacts/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>;
  };

  export default App;