
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Homepage from './pages/Homepage';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import CreateTeacher from './pages/Tacher/CreateTeacher';
import TeacherList from './pages/Tacher/TeacherList';
function App() {


  return (

    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/teacher" element={<TeacherList />} />
        <Route path="/create-Teacher" element={<CreateTeacher />} />


      </Routes>
    </BrowserRouter>



  )
}
export default App
