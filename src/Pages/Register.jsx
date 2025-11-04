import React, { use, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {createUser, signInWithGoogle} = use(AuthContext)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
         .then(result => {
            console.log(result)
            const newUser = {
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL
         }

         // Create user in database
         fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newUser)
         })
         })
         .catch(error => {
            console.log(error)
         })

         
    }

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-neutral-50 dark:bg-neutral-900 p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-8 transition-colors duration-300 ">
        <h2 className="text-3xl font-extrabold text-center text-neutral-900 dark:text-neutral-100 mb-6">
          Create an Account
        </h2>

        <form  className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* {error && <p className="text-red-500 text-center">{error}</p>} */}

          <button
            type="submit"
            className="w-full btn-gradient transition-all"
          >
            Sign Up
          </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                    or continue with
                  </span>
                </div>
              </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full px-6 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 "
          >
            <FcGoogle className="text-xl mr-1"></FcGoogle> Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center text-neutral-600 dark:text-neutral-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-neutral-900 dark:text-neutral-100 hover:underline font-medium"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Register;