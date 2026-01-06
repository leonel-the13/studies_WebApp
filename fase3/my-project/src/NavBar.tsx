export default function NavBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 felx justify-between items-center py-4">
      <nav className="bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center px-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800 ">React</h1>
            <img
              src="./src/assets/react.svg"
              alt="react-logo"
              className=" h-10 w-10"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-800 hover:text-blue-500">
              About
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
