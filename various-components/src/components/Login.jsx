/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Outer Glow Effect */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Animated Glowing Border */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, #ff0000, #ff7300)",
              "linear-gradient(45deg, #ff7300, #ffd500)",
              "linear-gradient(45deg, #ffd500, #33cc33)",
              "linear-gradient(45deg, #33cc33, #0099ff)",
              "linear-gradient(45deg, #0099ff, #9900cc)",
              "linear-gradient(45deg, #9900cc, #ff0000)",
            ],
            boxShadow: [
              "0px 0px 10px #ff0000",
              "0px 0px 15px #ff7300",
              "0px 0px 15px #ffd500",
              "0px 0px 15px #33cc33",
              "0px 0px 15px #0099ff",
              "0px 0px 15px #9900cc",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0 blur-lg rounded-xl"
        ></motion.div>

        {/* Card Content */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-xl border-2 border-transparent"
        >
          <h2 className="text-2xl font-bold text-center text-white">Login</h2>

          <form onSubmit={handleSubmit} className="mt-6">
            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mb-4"
            >
              <label className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                whileFocus={{
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(0, 195, 255, 0.8)",
                }}
                className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border rounded-lg focus:outline-none"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mb-4"
            >
              <label className="block text-sm font-medium text-gray-400">
                Password
              </label>
              <motion.input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                whileFocus={{
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(255, 99, 71, 0.8)",
                }}
                className="w-full px-4 py-2 mt-1 bg-gray-700 text-white border rounded-lg focus:outline-none"
              />
            </motion.div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 5px 20px rgba(0, 195, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
