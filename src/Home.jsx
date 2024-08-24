import React, { useContext } from "react";
import ProjectStore from "./context/store";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, dispatch] = useContext(ProjectStore);

  return (
    <div className=" p-6 ">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Registered Users</h1>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[1200px] mx-auto ml-[-350px]">
        <h2 className="text-lg font-semibold mb-2">
          Email: {state.email}
        </h2>
        <p className="text-md mb-2">Password: {state.password}</p>
        <p className="text-md mb-2">Age: {state.age}</p>
        <button
          className="
            mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded 
            hover:bg-blue-700 hover:scale-105 active:bg-blue-800 
            relative
          "
          onClick={() => dispatch({ type: "LOGOUT" })}
        >
          Logout
        </button>
      </div>
      <Link to="/register">
     
      </Link>
    </div>
  );
};

export default Home;
