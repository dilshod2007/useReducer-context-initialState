import { useContext, useState } from "react";
import ProjectStore from "./context/store";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [state, dispatch] = useContext(ProjectStore);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an async operation
    setTimeout(() => {
      dispatch({ type: "REGISTER", payload: { email, password, age } });
      setLoading(false);
      
      // Show success toast
      toast.success("Registration successful!");

      // Clear input fields after registration
      setEmail('');
      setPassword('');
      setAge('');
    }, 2000);
  };

  return (
    <div className="p-4 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 border rounded-lg shadow-lg space-y-4 bg-gray-800 text-blue-100 "
      >
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            dispatch({ type: "email", email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            dispatch({ type: "password", password: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            dispatch({ type: "age", age: e.target.value });
          }}
        />
        <button
          type="submit"
          className={`
            w-full bg-blue-500 text-white font-bold py-2 px-4 rounded relative 
            hover:bg-blue-700 active:bg-blue-800 
            before:content-[''] before:absolute before:w-full before:h-1 before:top-0 before:left-0 
            before:bg-blue-300 after:content-[''] after:absolute after:w-full after:h-1 after:bottom-0 
            after:left-0 after:bg-blue-300 transition-all duration-300 ease-in-out 
            ${loading ? "cursor-not-allowed opacity-50" : ""}
          `}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* Toastify container to show toasts */}
      <ToastContainer />
    </div>
  );
};

export default Register;
