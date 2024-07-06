import bgHome from "../images/bgHome.jpg";
import Navbar from "../components/Navbar";
import {useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
        <figure className="bg-red-400 flex flex-col relative ">
          <img className="absolute object-cover top-0 left-0 h-[780px] w-full " src={bgHome}></img>
          <div className="gap-4 w-4/5 h-fit sm:w-[570px] md:w-[700px] absolute top-40 left-14 sm:top-44">
            <h1 className="text-[40px] font-bold text-gray-700 md:text-[60px]">Fresh Flowers</h1>
            <h4 className="text-pink-600 text-[25px] md:text-[40px]">Natural & Beautiful Flowers</h4>
            <p className="md:text-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, autem omnis est veritatis ut consequatur fuga modi
              corporis sapiente voluptate quo, velit hic porro expedita saepe,
              laboriosam voluptatem tempore possimus!
            </p>
            <br/>
            <button className="bg-gray-700 rounded-3xl text-white font-bold pl-7 pr-7 pt-3 pb-3 lg:text-[20px] hover:bg-pink-500"
            onClick={()=>{navigate("/products")}}>Shop Now</button>
          </div>
        </figure>
    </div>
  );
}

export default HomePage;
