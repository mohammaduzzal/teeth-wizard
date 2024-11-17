import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointment from "../components/MyAppointment/MyAppointment";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: async()=> {
                    const servicesRes = await fetch('/Service.json')
                    const serviceData = await servicesRes.json()

                    const feedbackRes = await fetch('/HappyClient.json')
                    const feedbackData = await feedbackRes.json()

                    return{serviceData, feedbackData}
                }
            },
            {
                path:'/treatment',
                element:<AllTreatments></AllTreatments>,
                loader: ()=> fetch('/Service.json')
            },
            {
                path:'/appointment',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
        ]
    },
])


export default router