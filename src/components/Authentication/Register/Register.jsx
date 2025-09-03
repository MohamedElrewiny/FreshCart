import {
  FaUser,
  FaPhoneAlt,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Style from "./Register.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";

// ✅ Zod Schema
const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be less than 20 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    rePassword: z.string(),
    phone: z
      .string()
      .regex(/^(01[0-9]{9})$/, "Invalid Egyptian  number")
      .optional(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        data
      );
      if(res.data.message === "success"){
        toast.success("Register Success", {
        description: `Welcome ${res.data.user.name}`,
        
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/login";
      } 


    } catch (err) {
      toast.error("Register Faild", {
        description: err.response?.data?.message || "An error occurred, please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a0e77a] to-[#64e221]">
      <div className="register-container my-0 sm:my-5 min-h-full w-[350px] sm:min-w-xl mx-auto px-4 py-8 sm:p-8 rounded-lg bg-gray-100 flex flex-col items-center gap-4">
        {/* Logo Circle */}
        <div
          className={`bg-gradient-to-br shadow flex justify-center items-center from-[#a0e77a] to-[#64e221] w-15 h-15 rounded-full ${Style.float}`}
        >
          <FaUserPlus className="text-3xl text-white" />
        </div>

        <h1 className="text-2xl font-bold mb-4">Create Account</h1>

        {/* Form */}
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-group mb-2">
            <div className="flex items-center gap-1 text-green-600">
              <FaUser />
              <label htmlFor="name" className="text-lg">
                Full Name
              </label>
            </div>
            <input
              type="text"
              className="bg-white border border-gray-300 p-2 w-full rounded-md"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="form-group mb-2">
            <div className="flex items-center gap-1 text-green-600">
              <FaPhoneAlt />
              <label htmlFor="phone" className="text-lg">
                Phone
              </label>
            </div>
            <input
              type="tel"
              className="bg-white border border-gray-300 p-2 w-full rounded-md"
              id="phone"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group mb-2">
            <div className="flex items-center gap-1 text-green-600">
              <MdEmail />
              <label htmlFor="email" className="text-lg">
                Email
              </label>
            </div>
            <input
              type="email"
              className="bg-white border border-gray-300 p-2 w-full rounded-md"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-group mb-2 relative">
            <div className="flex items-center gap-1 text-green-600">
              <FaLock />
              <label htmlFor="password" className="text-lg">
                Password
              </label>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className="bg-white border border-gray-300 p-2 w-full rounded-md pr-10"
              id="password"
              {...register("password")}
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group mb-2 relative">
            <div className="flex items-center gap-1 text-green-600">
              <FaLock />
              <label htmlFor="rePassword">Confirm Password</label>
            </div>
            <input
              type={showRePassword ? "text" : "password"}
              className="bg-white border border-gray-300 p-2 w-full rounded-md pr-10"
              id="rePassword"
              {...register("rePassword")}
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setShowRePassword(!showRePassword)}
            >
              {showRePassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.rePassword && (
              <p className="text-red-500 text-sm">
                {errors.rePassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="relative w-full text-xl py-4 px-6 mt-5 
            bg-gradient-to-br from-[#78b458] to-[#58c71c] 
            rounded-xl text-white font-semibold
            flex items-center justify-center gap-1
            overflow-hidden cursor-pointer
            transition-all duration-300 ease-in-out
            hover:-translate-y-0.5 active:translate-y-0
            hover:shadow-[0_10px_30px_rgba(102,126,234,0.3)]"
          >
            {loading ? (
              <PulseLoader color="#ffffff" size={12} />
            ) : (
              "Create Account"
            )}
            {!loading && (
              <motion.div
                animate={{ x: [0, 7, 0, -3, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaArrowRightLong className="mt-[5px] mx-2 text-xl " />
              </motion.div>
            )}
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-700 hover:underline font-medium"
          >
            Login here
          </a>
        </p>
      </div>
      {/* Background Shapes */}
      <div className={`${Style.backgroundDecoration} hidden sm:block`}>
        <div className={`${Style.floatingShape} ${Style.shape1}`}></div>
        <div className={`${Style.floatingShape} ${Style.shape2}`}></div>
        <div className={`${Style.floatingShape} ${Style.shape3}`}></div>
        <div className={`${Style.floatingShape} ${Style.shape4}`}></div>
      </div>
    </div>
  );
};

export default Register;
