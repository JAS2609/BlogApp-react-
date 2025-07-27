import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from "../store/authSlice"
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/Auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    
    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin({userData}));
                navigate("/")

            }
        } catch (error) {
            setError(error.message)
        }
    }

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 inline-block w-24">
          <Logo width="100%" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Don’t have an account?&nbsp;
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-medium dark:text-blue-400"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {error && <p className="text-red-600 text-center text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit(login)} className="space-y-6">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true,
          })}
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
        >
          Sign In
        </Button>
      </form>
    </div>
  </div>
);

}

export default Login