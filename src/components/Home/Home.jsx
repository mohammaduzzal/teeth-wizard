import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";


const Home = () => {
    const services = useLoaderData()
    // console.log(services);
    const {serviceData, feedbackData} =services
    
    return (
        <div>
            <div className="w-11/12 mx-auto">
            <Banner></Banner>
            </div>
            <div className="w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {
                serviceData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
               }
            </div>
            <button className="btn btn-primary block mx-auto">
            <NavLink to='/treatment'>Show More</NavLink>
            </button>
            <div className="w-11/12 mx-auto">
            {
                <FeedBack feedbackData={feedbackData}></FeedBack>
            }
            </div>
            
        </div>
    );
};

export default Home;