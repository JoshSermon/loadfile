import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main className="">
      <div>
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Loadfile. <br />
            Were we store everything you need, so you won't lose anything.
          </h1>
          <p className="pb-20">
            Enchance your personal storage with Loadfile, offering a simple and efficient way to upload, organize, and access files from anywhere. 
            Securely store important documents and media, and experience
            the convenience of east file management and sharing in one centralized solution. 
          </p>
        </div>
      </div>      
      
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        Copyright Disclaimer under section 107 of the Copright Act 1976, allowance id made for "file sharing". 
      </p>

    <UserButton />
    </main>
  );
}