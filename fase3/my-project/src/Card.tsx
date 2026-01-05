export default function Card() {
  return (
    <div className="felx justify-center items-center min-h-screen bg-gray-100">
      <div className=" bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <img
          src="./src/assets/react.svg"
          alt="reac-logo"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-center text-gray-700">
          Victor Leonel
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Desenvolvedor de software
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Primeiro
        </button>
        <button className=" bg-gray-300 hover:bg-gray-400 text-gray-700 rounded py-2 px-4 font-bold">
          Segundo
        </button>
      </div>
    </div>
  );
}
