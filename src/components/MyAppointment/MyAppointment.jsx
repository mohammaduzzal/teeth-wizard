import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAppointment = () => {

    const {user} = useContext(AuthContext)
    const [saveLocalData, setSaveLocalData] = useState([])

    useEffect(()=>{
        const localData = localStorage.getItem('appointment')

        let saveData = []
    if(localData){
        saveData = JSON.parse(localData)
    }
    const userData = saveData.filter((data)=> data.email === user?.email)
    setSaveLocalData(userData);
    },[user?.email])
    return (
        <div>
            {
                saveLocalData.map((data,idx) => <h2 key={idx}>{data.email}</h2>)
            }
        </div>
    );
};

export default MyAppointment;