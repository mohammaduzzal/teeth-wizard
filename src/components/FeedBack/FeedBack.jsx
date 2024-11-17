/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FeedBack = ({ feedbackData }) => {
    console.log(feedbackData);
    return (
        <>
        <h2 className="font-bold text-xl mt-5">Happy Client</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                feedbackData.map((feed, idx) => (
                    <div key={idx} className="card  bg-base-100  shadow-xl">
                        <div className="p-6">
                            <div className="flex justify-between items-center">
                                <img src={feed.userImg}
                                    className="w-12 h-11 rounded-full "
                                    alt="" />
                                <h2 className="card-title ml-2">{feed.name}</h2>
                                <p>{new Date().toLocaleDateString()}</p>
                            </div>
                            <p>{feed.review}</p>
                            
                            <div className="card-actions justify-end items-center">
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
        </>
    );
};

export default FeedBack;