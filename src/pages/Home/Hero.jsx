import { Link } from "react-router-dom";
import PRP from "../../assets/vid.mp4";

const Hero = () => {
  return (
    <div className="h-[90vh] px-8 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-grey to-black">
      <div className="col-span-1 md:col-span-1">
        <div className="flex flex-col h-full">
          <div className="mt-20">
            <h1 className="font-bold font-sans-600 text-blue text-left text-7xl ml-12 mb-5">
              Empowering{" "}
              <span className="text-pink">Africa's Media Landscape </span>
              <span className="hidden">With PRP</span>
            </h1>
            <p className="text-white text-left text-lg ml-12">
              Revolutionize the way news is disseminated across Africa with PRP.{" "}
              <span className="inline-block" />
              Our platform empowers communication professionals, enhances media
              engagement and ensures access to credible information.
            </p>
          </div>
          <div className="mt-12 ml-12 flex justify-start space-x-5">
            <Link to="/signup">
              <button className="rounded-[10px] bg-blue p-2 px-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <p className="text-white ">Join Now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-1">
        <video
          className="w-full h-full object-cover rounded-md mt-5 max-h-[85vh]" // Adjusted styles
          autoPlay
          loop
          muted
        >
          <source src={PRP} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
