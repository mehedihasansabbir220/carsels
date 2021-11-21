import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AllCars from './pages/AllCars/AllCars';
import Dashbord from './pages/Dashbord/Dashbord';
import UserOrder from './pages/Dashbord/UserOrder/UserOrder';
import AddNewCar from './pages/Header/AddNewCar/AddNewCar';
import Home from './pages/Home/Home/Home';

// initializeFirebase()
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userOrder" element={<UserOrder />} />
          <Route path="/allcars" element={<AllCars />} />
          <Route element={<RequireAuth />}>
            <Route path="/addnewcar" element={<AddNewCar />} />
            <Route path="/dashborad" element={<Dashbord />} />
          </Route>
        </Routes>

      </AuthProvider>


      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addnewcar" element={<AddNewCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}

    </div>
  );
}

export default App;
