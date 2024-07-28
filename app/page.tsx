'use client'

import HandRecognizer from "@/components/HandRecognizer";
import Image from "next/image";

export default function Home() {
  const setHandResults = () => {

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="absolute left-3 top-3 z-30 w-24">
          <HandRecognizer setHandResults={setHandResults}/>
        </div>
    </main>
  )
}
