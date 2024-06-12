import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main className="">
      <h1>Loadfile - File hosting service</h1>

    <UserButton />
    </main>
  );
}


// Stopped at 27.43