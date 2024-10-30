'use client'

import Link from "next/link";

// import { log } from "console";
// import Image from "next/image";

export default function Home() {
  console.log('2');
  
  return (
    <div>
      <Link className="" href={'./products'}>Product List</Link>
    </div>
  );
}
