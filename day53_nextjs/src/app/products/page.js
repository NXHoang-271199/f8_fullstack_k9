
import Link from "next/link";

export default function() {
  
  return (
    <div>
      <main >
        <h2 className="text-center mt-10">Product list</h2>
        <div className="flex justify-center">
          <div className="border-2 border-indigo-600 w-1/3 h-52">
              <img src="" alt="" width={150}/>
          </div>
          <div className="border-2 border-indigo-600 w-1/3 h-52">
            <img src="" alt="" width={150} />
            <Link href={'/'}>Chi tiết</Link>
          </div>
          <div className="border-2 border-indigo-600 w-1/3 h-52">
              <img src="" alt="" width={150}/>
              
          </div>
        </div>
      </main>
    </div>
  );
}