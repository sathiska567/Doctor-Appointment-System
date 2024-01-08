import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import ApplyDoctor from "./Pages/ApplyDoctor";
import ViewPlayer from "./Pages/AcceptPlayer";
import NotificationPage from "./Pages/NotificationPage";
import Doctors from "./Pages/admin/Doctor";
import ApplyPlayerDetails from "./Pages/ApplyPlayerDetails";
import Shuffle from "./Components/Shuffle/Shuffle";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
                <HomePage />
            </ProtectedRoute>
          } />


          {/* admin dashboad
          <Route path="/view-player" element={
            <ProtectedRoute>
                <ViewPlayer/>
            </ProtectedRoute>
          } /> */}

          {/* player dashboad */}
          <Route path="/apply-doctor" element={
            <ProtectedRoute>
                <ApplyDoctor />
            </ProtectedRoute>
          } />


          {/* Applying player details */}
          <Route path="/details" element={
            <ProtectedRoute>
                <ApplyPlayerDetails/>
            </ProtectedRoute>
          } />

         {/* All user Login */}
          <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
          } />
          
          {/* All user registration */}
          <Route path="/register" element={
             <PublicRoute>
               <Register />
             </PublicRoute>
          } />


          {/* Doctor notification */}
          <Route path="/get-all-notification" element={
             <ProtectedRoute>
               <Doctors />
             </ProtectedRoute>
          } />

          {/* Shuffle the items */}
          <Route path="/shuffle" element={
             <ProtectedRoute>
                <Shuffle />
             </ProtectedRoute>
          } />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;