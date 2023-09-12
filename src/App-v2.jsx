import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./assets/GlobalStyles";
import AppLayout from "./components/ui/AppLayout";
import Bookings from "./pages/Bookings";
// import { useEffect } from "react";
// import { getRooms } from "./services/apiRooms";
import Rooms from "./pages/Rooms";


function App() {
  /**
   * testing supabase
   useEffect(function () {
     getRooms().then((data) => console.log(data));
   }, []); 
   */
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="rooms" element={<Rooms />} />
            {/* <Route path="users" element={<Users />} /> */}
            {/* <Route path="settings" element={<Settings />} /> */}
            {/* <Route path="account" element={<Account />} /> */}
          </Route>
          {/* <Route path="login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 