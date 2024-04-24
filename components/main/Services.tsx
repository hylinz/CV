export const ServicesPage = () => {
  return (
<section className="flex w-full h-full flex-col items-center justify-center lg-px-10 py-10">
  <div className="w-full flex items-center justify-center">
    <h2 className="text-2xl md:text-5xl font-bold">Stuff</h2>
  </div>
  <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full max-w-screen-lg my-5">
    <div className="bg-gray-300 rounded shadow-lg flex items-center justify-center hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300">Grid Item 1</div>
    <div className="bg-gray-300 rounded shadow-lg flex items-center justify-center hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300">Grid Item 2</div>
    <div className="bg-gray-300 rounded shadow-lg flex items-center justify-center hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300">Grid Item 3</div>
    <div className="bg-gray-300 rounded shadow-lg flex items-center justify-center hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300">Grid Item 4</div>
  </div>
</section>

  );
};

export default ServicesPage;
