import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointment from "../components/MyAppointment/MyAppointment";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

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
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: async ({params})=> {
                    const res = await fetch('/Service.json')
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData

                }
            },
        ]
    },
])


export default router