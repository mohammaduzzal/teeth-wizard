import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const AllTreatments = () => {
    const services = useLoaderData()
    return (
        <div className="w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {
         services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
               }
        </div>
    );
};

export default AllTreatments;