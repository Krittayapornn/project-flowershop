import bgHome from "../images/bgHome.jpg";

function HomePage() {
  return (
    <div>
      <nav className="bg-gray-300 drop-shadow-lg sm:h-[70px] h-[100px]">
        <div className="w-3/4 sm:h-[70px] h-auto m-auto text-black flex items-center flex-col justify-between sm:flex-row">
          <div className="flex gap-3">
            <h1 className="text-3xl">FlowerShop </h1>
            <div className="text-3xl text-pink-600 font-light">o</div>
          </div>
          <div className="flex flex-col list-none sm:flex-row text-xl">
            <li className="hover:bg-pink-200 rounded-sm p-4 sm:ml-4 hover:text-pink-500 cursor-pointer">
              Rerister
            </li>
            <li className="hover:bg-pink-200 rounded-sm p-4 sm:ml-4 hover:text-pink-500 cursor-pointer">
              Login
            </li>
          </div>
        </div>
        <div className="bg-yellow-400 mt-[20px] sm:mt-3">
          <img src={bgHome}></img>
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
