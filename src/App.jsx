import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/HeadFooter/Header';
import Footer from './Components/HeadFooter/Footer';
import Home from './Pages/Home';
import Mobiles from './Pages/Mobiles';
import Accessories from './Pages/Accessories';
import Electronics from './Pages/Electronics';
import AdminLogin from './Pages/Admin/Login';
import ProtectedRoute from './Components/ProtectedRoute';  // Adjust path as needed
import PublicOnlyRoute from './Components/PublicOnlyRoute';
import AddCarousel from './Pages/Admin/Add/AddCarousel';
import SessionManager from './Components/SessionManager';
import EditCarousel from './Pages/Admin/Edit/EditCarousel';
import AddBestSeller from './Pages/Admin/Add/AddBestSeller';
import EditBestSeller from './Pages/Admin/Edit/EditBestSeller';
import AddMobile from './Pages/Admin/Add/AddMobile';
import EditMobile from './Pages/Admin/Edit/EditMobile';
import AddAccessory from './Pages/Admin/Add/AddAccessory';
import EditAccessory from './Pages/Admin/Edit/EditAccessory';

function App() {


  return (
    <Router>
      <SessionManager />
      <div className="min-h-screen flex flex-col text-white">
        <Header />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/electronics" element={<Electronics />} />

          <Route path="/admin/edit/mobiles/:id" element={
              <ProtectedRoute>
                <EditMobile />
              </ProtectedRoute>
          } />
          <Route path="/admin/edit/accessories/:id" element={
              <ProtectedRoute>
                <EditAccessory />
              </ProtectedRoute>
          } />
          <Route path="/admin/edit/electronics/${id}" element={
              <ProtectedRoute>
                {/* <EditElectronics /> */}
              </ProtectedRoute>
          } />
          <Route path="/admin/edit/carousel/:id" element={
              <ProtectedRoute>
                <EditCarousel />
              </ProtectedRoute>
          } />
          <Route path="/admin/edit/bestseller/:id" element={
              <ProtectedRoute>
                <EditBestSeller />
              </ProtectedRoute>
          } />
          

          <Route path="/admin/add/mobiles" element={
              <ProtectedRoute>
                <AddMobile />
              </ProtectedRoute>
          } />
          <Route path="/admin/add/accessories" element={
              <ProtectedRoute>
                <AddAccessory />
              </ProtectedRoute>
          } />
          <Route path="/admin/add/electronics" element={
              <ProtectedRoute>
                {/* <EditElectronics /> */}
              </ProtectedRoute>
          } />
          <Route path="/admin/add/carousel" element={
              <ProtectedRoute>
                <AddCarousel />
              </ProtectedRoute>
          } />
          <Route path="/admin/add/bestseller" element={
              <ProtectedRoute>
                <AddBestSeller />
              </ProtectedRoute>
          } />



          <Route path="/admin/login" element={
            <PublicOnlyRoute>
              <AdminLogin />
            </PublicOnlyRoute>
          } />
          </Routes>

        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
