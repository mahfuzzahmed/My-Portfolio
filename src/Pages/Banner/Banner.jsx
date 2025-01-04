import myImage from "../../assets/my.jpg"
const Banner = () => {
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={myImage}
                    className="max-w-sm md:max-w-lg rounded-lg shadow-2xl" />
                <div className="space-y-5 mr-5">
                    <p className="text-green-400 font-bold">Hi, my name is</p>
                    <h1 className="text-5xl font-extrabold text-gray-700">Mahfuj Ahmed.</h1>
                    <h1 className="text-5xl font-extrabold">A passionate web developer</h1>
                    <p className="py-5 text-gray-800 font-semibold">
                        "I’m a BBA student turned web developer, passionate about crafting <br /> responsive, user-friendly websites and transforming creative ideas into <br />functional digital solutions."
                    </p>
                    <button className="btn btn-outline font-extrabold">Download Resume</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;