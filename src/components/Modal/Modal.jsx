import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


// eslint-disable-next-line no-unused-vars
const Modal = () => {
    
    const handleSubmit = e =>{
        e.preventDefault()
        // console.log(e); 
       
        const fName = e.target.fName.value;
        const lName = e.target.lName.value;
        const email = e.target.email.value;
   
        const info = {
            fName,lName,email
        }
        let data = []
        const localData = localStorage.getItem('appointment')
        if(localData){
            data = JSON.parse(localData)
           
        }
        data.push(info)
        localStorage.setItem('appointment', JSON.stringify(data))
    }



    return (
        //        {/* Open the modal using document.getElementById('ID').showModal() method */}
        // <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form onSubmit={handleSubmit}>
                    <div>
                        First name
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" name="fName" /> <br />
                        Last name
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" name="lName"/> <br />
                        Email 
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" name="email"  /> <br />
                        Phone number
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" name="number"/> <br />
                        Appointment date
                        <input
                            type="date"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" name="date" /> <br />
                        Address
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" name="address" />
                    </div>
                    <button className="btn btn-primary" type="submit">Make Appointment</button>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;