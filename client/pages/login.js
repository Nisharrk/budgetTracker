import React from "react";

const Login = () => {
  return (
    <div class="bg-slate flex items-center justify-center mt-20 py-16">
      <div class="w-full max-w-sm">
        <form class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
          <h2 class="text-2xl font-medium mb-4 font-semibold text-gray-700">
            Login
          </h2>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="email">
              Email
            </label>
            <input
              class="w-full border border-gray-400 p-2 rounded-lg"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2" for="password">
              Password
            </label>
            <input
              class="w-full border border-gray-400 p-2 rounded-lg"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-black"
              type="submit"
            >
              Login
            </button>
            <a
              class="inline-block align-baseline font-medium text-sm text-teal-500 hover:text-teal-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
