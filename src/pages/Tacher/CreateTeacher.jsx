import { useState } from "react";
import { createData } from "../api/AxiousRequest";
import Swal from "sweetalert2";
function CreateTeacher() {
    const [fdata, setfdata] = useState({
        Teacher_Name: "",
        Phone_Number: "",
        Address: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Fix typo: preventDeafault -> preventDefault
        const data = JSON.stringify({ data: fdata });

        const response = await createData({
            url: "teachers",
            data: data


        });


        if (response &&
            response.attributes &&
            response.attributes.Teacher_Name == fdata.Teacher_Name) {
            Swal.fire({
                icon: "success",
                title: "Data has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            setfdata({
                Teacher_Name: "",
                Phone_Number: "",
                Adress: ""
            })



        };
    }
    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Create Teacher</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 shadow p-4 rounded bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                name="Teacher_Name"
                                className="form-control"
                                id="name"
                                placeholder="Enter teacher's name"
                                value={fdata.Teacher_Name}
                                onChange={(e) =>
                                    setfdata({
                                        ...fdata,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="num" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="Phone_Number"
                                className="form-control"
                                id="num"
                                placeholder="Enter phone number"
                                value={fdata.Phone_Number}
                                onChange={(e) =>
                                    setfdata({
                                        ...fdata,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                name="Address"
                                className="form-control"
                                id="address"
                                placeholder="Enter address"
                                value={fdata.Adress}
                                onChange={(e) =>
                                    setfdata({
                                        ...fdata,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default CreateTeacher;
