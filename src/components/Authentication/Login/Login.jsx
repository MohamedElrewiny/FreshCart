import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Style from "../Register/Register.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a0e77a] to-[#64e221]">
      <div className="register-container my-0 sm:my-5 min-h-full w-[350px] sm:min-w-xl mx-auto px-4 py-8 sm:p-8 rounded-lg bg-gray-100 flex flex-col items-center gap-4">
        <div
          className={`bg-gradient-to-br shadow flex justify-center items-center from-[#a0e77a] to-[#64e221] w-15 h-15 rounded-full ${Style.float}`}
        >
          <FaUserPlus className="text-3xl text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Login Now</h1>
        <form className=" w-full ">

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
              name="email"
              required
            />
          </div>
          <div className="form-group mb-2">
            <div className="flex items-center gap-1 text-green-600">
              <FaLock />
              <label htmlFor="password" className="text-lg">
                Password
              </label>
            </div>

            <input
              type="password"
              className="bg-white border border-gray-300 p-2 w-full rounded-md"
              id="password"
              name="password"
              required
            />
          </div>



          <button
            type="submit"
            className="
          relative w-full text-xl py-4 px-6 mt-5 
          bg-gradient-to-br from-[#78b458] to-[#58c71c] 
          rounded-xl text-white  font-semibold
          flex items-center justify-center gap-1
          overflow-hidden cursor-pointer
          transition-all duration-300 ease-in-out
          hover:-translate-y-0.5 active:translate-y-0
          hover:shadow-[0_10px_30px_rgba(102,126,234,0.3)]
          before:content-[''] before:absolute before:top-0 before:left-[-100%]
          before:w-full before:h-full 
          before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
          before:transition-all before:duration-500 hover:before:left-[100%]
        "
          >
            Login{" "}
            <motion.div
              animate={{ x: [0, 7, 0, -3, 0] }} // يمين 5px -> راجع -> شمال 5px -> راجع
              transition={{
                duration: 1, // مدة الحركة الكاملة
                repeat: Infinity, // تتكرر للأبد
                ease: "linear",
              }}
            >
              <FaArrowRightLong className="mt-[5px] mx-2 text-xl " />
            </motion.div>
          </button>
        </form>
<p>
  Don’t have an account?{" "}
  <a href="/Register" className="text-green-700 hover:underline font-medium">
    Sign up here
  </a>
</p>
      </div>
      <div className={`${Style.backgroundDecoration} hidden sm:block`}>
        <div className={`${Style.floatingShape} ${Style.shape1}`}></div>
        <div className={`${Style.floatingShape} ${Style.shape2}`}></div>
        <div className={`${Style.floatingShape} ${Style.shape3}`}></div>
        <div className={`${Style.floatingShape} ${Style.shape4}`}></div>
      </div>
    </div>
  );
};

export default Login;
