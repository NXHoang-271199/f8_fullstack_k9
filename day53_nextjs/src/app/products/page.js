
import Link from "next/link";

export default function() {
  
  return (
    <div>
      <main >
        <h2 className="text-center mt-10">Product list</h2>
        <div className="flex justify-center">
          <div className="border-2 border-indigo-600">
            <div className="flex justify-center align-middle">
              <img className="w-full" src="https://fastly.picsum.photos/id/916/500/300.jpg?hmac=chGglQIkK0_TKrNvejbLQYd0xhW4PyM3PHHAJxoewxY" alt="" />
            </div>
            <Link href={'./products/1'}>Product 1</Link>
          </div>
          <div className="border-2 border-indigo-600">
          <div className="flex justify-center align-middle">
              <img className="w-full" src="https://fastly.picsum.photos/id/381/500/300.jpg?hmac=RMDs6RCEV4yVA_5ityqFGjlq5WWnWkYfr9PiWDu_-2s" alt="" />
            </div>
            <Link href={''}>Product 2</Link>
          </div>
          <div className="border-2 border-indigo-600">
          <div className="flex justify-center align-middle">
              <img className="w-full" src="https://fastly.picsum.photos/id/451/500/300.jpg?hmac=dixzYghEeJk2uSKY2X2aBdPqE_07b3ILt5iFg21SYHI" alt="" />
            </div>
            <Link href={''}>Product 3</Link>
          </div>
        </div>
      </main>
    </div>
  );
}