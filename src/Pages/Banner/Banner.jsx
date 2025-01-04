import myImage from "../../assets/my.jpg"
const Banner = () => {
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={myImage}
                    className="max-w-sm md:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-6xl font-bold">Front End Developer</h1>
                    <p className="py-6 ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Download Resume</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;