import React, { Suspense } from 'react'
import vax from '../../assets/vaxxx.gif'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Main = () => {
  return (
    <div className='flex-[6] flex flex-col md:flex-row justify-between items-center'>
        <div className='md:flex-[4] text-lg pt-20 overflow-scroll noy'>
            <h2 className='text-8xl font-bold mb-6'>
                About
            </h2>

            <div className='tracking-wide space-y-5'>
                <p>
                👋 Hi! I'm Koye, a passionate frontend developer based in Abuja, Nigeria. I strive to construct web applications that are appealing in design while maintaining their functionality. I've been working as a frontend developer for over a year. I always build projects to hone my skills.
                </p>

                <p>
                Currently, I'm pursuing a bachelor's degree in Computer Science and Economics. I am interested in JavaScript technologies. Some frontend technologies that I have worked with and would like to work with in the future are Next.Js, React, Recoil, Thirdweb SDK, Styled components, Tailwind CSS, Firebase, Vite etc.
                </p>

                <p>
                I'm actively seeking roles where I can broaden my knowledge and utilize my skills.
                </p>
            </div>

            <div>
                <h5 className='my-4 text-4xl font-semibold'>
                    Experience
                </h5>
                <ul>
                    <li>
                        2 years + experience in Web Development
                    </li>
                </ul>
            </div>

            <div>
                <h5 className='my-4 text-4xl font-semibold'>
                    Skills
                </h5>

                <div>
                HTML and CSS / Javascript / Recoil / React / Thirdweb SDK/ Firebase / Nextjs / Vite / Framer / 
                </div>
            </div>

        </div>
        <div className='relative md:flex-[2] hidden md:inline-block '>
            {/* <div className='bg-slate-600  '> */}
            {/* </div> */}
            <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
            {/* <img src={vax} alt="" className='anim-img w-[25rem] h-[25rem]  object-contain' /> */}
          
        </div>
    </div>
  )
}

export default Main

// w-[32rem] h-[32rem]