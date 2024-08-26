import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import 'react-toastify/dist/ReactToastify.css';
import ProjectStore from "./context/store";

const Register = () => {
  const [state, dispatch] = useContext(ProjectStore);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const newUser = {
        email: state.email,
        password: state.password,
        age: state.age,
      };

      if (!newUser.email || !newUser.password || !newUser.age) {
        toast.error("All fields are required!");
        setLoading(false);
        return;
      }

      dispatch({ type: "add_user", user: newUser });

      toast.success("User registered successfully!");

      dispatch({ type: "reset_fields" });

      setLoading(false);

      setTimeout(() => {
        navigate("/"); 
      }, 1000);  
    }, 2000);
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 border rounded-lg shadow-lg space-y-4 bg-gray-900 text-blue-100 mt-[100px]"
      >
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <input
          type="email"
          placeholder="email"
          value={state.email}
          onChange={(e) => dispatch({ type: "email", email: e.target.value })}
          className="w-full p-2 border rounded text-gray-900"
        />
        <input
          type="password"
          placeholder="password"
          value={state.password}
          onChange={(e) => dispatch({ type: "password", password: e.target.value })}
          className="w-full p-2 border rounded text-gray-900"
        />
        <input
          type="number"
          placeholder="age"
          value={state.age}
          onChange={(e) => dispatch({ type: "age", age: e.target.value })}
          className="w-full p-2 border rounded text-gray-900"
        />
        <button
          type="submit"
          className={`
            w-full bg-blue-500 text-white font-bold py-2 px-4 rounded relative 
            hover:bg-blue-700 active:bg-blue-800 
            before:content-[''] before:absolute before:w-full before:h-1 before:top-0 before:left-0 
            before:bg-blue-300 after:content-[''] after:absolute after:w-full after:h-1 after:bottom-0 
            after:left-0 after:bg-blue-300 transition-all duration-300 ease-in-out 
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Register;
