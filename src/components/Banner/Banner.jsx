import logo from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={logo}
      className=" rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Bringing Confidence to Your Smile</h1>
      <p className="py-6 text-gray-500">
      We are dedicated to providing personalized and gentle dental care to ensure your smile stays bright and healthy.
      </p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;