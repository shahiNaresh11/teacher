import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <nav className="d-flex justify-content-center bg-red p-3 shadow-sm rounded">
            <ul className="nav gap-4">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-dark">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link text-dark">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link text-dark">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/teacher" className="nav-link text-dark">Teacher</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Sidebar;
