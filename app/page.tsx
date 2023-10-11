import Image from 'next/image';
import { SunIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (

    
    <div className="flex flex-col items-center justify-center text-white  h-screen px-2 ">
      <h1 className="text-4xl font-bold mb-20 text-opacity-80 text-[#68687f]">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div >
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="w-8 h-8 " />
            <h2>Examples</h2>

            <div className="space-y-2">
              <p className="infoText">"Explain Something to me"</p>
              <p className="infoText">
                "What is the difference between a dog and a cat"
              </p>
              <p className="infoText">"What is the color of the sun?"</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="w-8 h-8 " />
            <h2>Capabilities</h2>

            <div className="space-y-2">
              <p className="infoText">"Explain Something to me"</p>
              <p className="infoText">
                "What is the difference between a dog and a cat"
              </p>
              <p className="infoText">"What is the color of the sun?"</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* SUn icon */}
            <ExclamationCircleIcon className="w-8 h-8 " />
            <h2>Limitations</h2>

            <div className="space-y-2">
              <p className="infoText">"Explain Something to me"</p>
              <p className="infoText">
                "What is the difference between a dog and a cat"
              </p>
              <p className="infoText">"What is the color of the sun?"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
