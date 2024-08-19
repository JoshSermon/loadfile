import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Loadfile. <br />
            Were we store everything you need, so you won't lose anything.
          </h1>

          <p className="pb-10">+
            Enchance your personal storage with Loadfile, offering a simple and efficient way to upload, organize, and access files from anywhere. 
            Securely store important documents and media, and experience
            the convenience of east file management and sharing in one centralized solution. 
          </p>

          <Link href="/dashboard" className="flex bg-blue-500 p-5 w-fit">
            Try it for free!
            <ArrowRight className="ml-8" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
            src="https:aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
            type="video/mp4"/>
          </video>
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