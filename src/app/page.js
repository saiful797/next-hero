import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hello Next Hero.
        <br></br>
        <button>
          call me
        </button>

        <Heading />
      </div>
    </main>
  );
}
