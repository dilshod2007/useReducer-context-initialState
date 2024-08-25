import React, { useContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectStore from "./context/store";

const Home = () => {
  const [state, dispatch] = useContext(ProjectStore);

  const handleDelete = (index) => {
    dispatch({ type: "delete_user", index });

    toast.success("User deleted successfully!");
  }

  return (
    <div className="p-4 space-y-4">
      {state.users.map((user, index) => (
        <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md">
          <div className="flex justify-between">
            <span className="font-bold">User {index + 1}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
          <div className="mt-2">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Age:</strong> {user.age}</p>
          </div>
        </div>
      ))}

      <ToastContainer />
    </div>
  );
};

export default Home;
