import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getData } from "../api/AxiousRequest";

function TeacherList() {
    const [list, setlist] = useState([]);


    const getListTeacher = async () => {
        const data = await getData("teachers");
        setlist(data);
    }

    useEffect(() => {
        getListTeacher();
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1>List of Teachers</h1>
                        <Link to="/create-teacher" className="btn btn-info d-flex align-items-center">
                            <FaPlus /> New Teacher
                        </Link>
                    </div>

                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">SN</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {list.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.attributes.Teacher_Name}</td>
                                        <td>{item.attributes.Phone_Number}</td>
                                        <td>{item.attributes.Address}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TeacherList;
