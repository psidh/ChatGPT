'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaGoogle } from 'react-icons/fa';
import { RiOpenaiFill } from 'react-icons/ri';
function Login() {
  return (
    <div>
      <div className="flex ">
        <div className="text-left w-7/12 flex bg-[#07002c] text-purple-400 py-4 px-8 items-center text-[20px] font-bold lg:text-[22px] ">
          <div>
            ChatGPT<span className="font-circle">●</span>
          </div>
        </div>
        <div className="text-left w-5/12 flex bg-black  py-4 px-8 items-center text-[20px] font-bold lg:text-[22px] ">
          <div>
             {'  '}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-7/12 bg-[#07002c] text-purple-400 flex flex-col justify-center items-start  h-screen">
          <div className=" py-4 px-8">
            <span className="font-extrabold text-4xl">Plan A Proposal</span>
            <p className="font-normal text-3xl">for your long-time Crush ●</p>
          </div>
        </div>

        <div className="w-5/12 bg-black text-white flex flex-col justify-center items-center px-8">
          <h1 className="text-3xl font-bold">Get Started</h1>

          <div
            onClick={() => signIn('google')}
            className="font-bold text-lg py-2 w-full px-6
          rounded-2xl mt-10 cursor-pointer
          text-black bg-white transition duration-300
          hover:bg-black hover:text-white hover:border-white border"
          >
            <div className="flex justify-center items-center">
              <FaGoogle className="text-xl" />
              <p className="px-3">Sign-Up</p>
            </div>
          </div>
          <div
            onClick={() => signIn('google')}
            className="font-bold text-lg py-2 w-full px-6
          rounded-2xl mt-10 cursor-pointer
          text-black bg-white transition duration-300
          hover:bg-black hover:text-white hover:border-white border"
          >
            <div className="flex justify-center items-center">
              <FcGoogle className="text-2xl" />
              <p className="px-6">Continue With Google</p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
