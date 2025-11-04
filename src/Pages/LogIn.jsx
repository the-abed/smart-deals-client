import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BsEye } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
             <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-4 transition-colors duration-300">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-colors duration-300">
          <div className="h-1 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-400 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-300"></div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight mb-2">
                Welcome Back
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Sign in to continue to SkillSwap
              </p>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all"
                  required
                />
              </div>

              {/* Password */}
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
                    {showPassword ? <FiEyeOff className="w-5 h-5" /> : <BsEye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="text-right mt-2">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Error Message */}
              {/* {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">{error}</p>
                </div>
              )} */}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
              >
                Sign In
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

              {/* Google Login */}
              <button
                type="button"
                
                className="w-full px-6 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
              >
                
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                <FcGoogle className="text-xl mr-1"></FcGoogle>
                Continue with Google
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-neutral-900 dark:text-neutral-100 hover:underline font-medium "
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default LogIn;