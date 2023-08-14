const Shimmer = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="h-72 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 flex justify-center items-center">
        <span className="text-3xl text-white animate-pulse">Building...</span>
      </div>

      <div className="flex flex-wrap mt-8 gap-x-7 gap-y-12 mx-14">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-72 h-56 mt-5 bg-gray-200 rounded-md p-4 shadow-md animate-pulse"
          >
            <div className="w-full h-40 bg-gray-300 rounded-md"></div>
            <div className="mt-2 w-40 h-5 bg-gray-300 rounded-md"></div>
            <div className="mt-2 w-56 h-5 bg-gray-300 rounded-md"></div>
            <div className="flex mt-2 space-x-4">
              {[...Array(3)].map((_, subIndex) => (
                <div
                  key={subIndex}
                  className="w-10 h-5 bg-gray-300 rounded-md"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
