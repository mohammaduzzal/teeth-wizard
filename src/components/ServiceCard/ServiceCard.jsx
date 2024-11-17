/* eslint-disable react/prop-types */

const ServiceCard = ({service}) => {
    // console.log(service);
 
    const {treatment,image,description,cost,id} = service

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            className="h-[200px]"
            alt={id} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {treatment}
            <div className="badge badge-secondary">$ {cost}</div>
          </h2>
          <p title={description}>{description.slice(0,100)}....</p>
          <div className="card-actions justify-end">
            <button className="badge badge-outline bg-primary text-white font-bold">Checkout More</button>
            
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;