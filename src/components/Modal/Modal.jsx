

const Modal = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(e);
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
                            className="input input-bordered input-primary w-full max-w-xs" name="email" /> <br />
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