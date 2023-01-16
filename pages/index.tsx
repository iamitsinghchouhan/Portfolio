import Head from"next/head";
import{BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import webdev from '../public/webdev.png';
import python from '../public/python.png';
import code from '../public/code.png';

export default function Home() {
    return(
       <div>
         <Head>
            <title>Amit Singh Chouhan Portfolio</title>
            <meta name = "description" content="Genrated and created by Amit Singh Chouahan" /> 
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="bg-white px-10">
            <section className=" min-h-screen">
               <nav className="py-10 mb-12 flex justify-between">
                  <h1 className="text-xl font-burtons" >iAmitChouhan</h1>
                  <ul className="flex item-center">
                     <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
                     <li><a className="bg-gradient-to-r bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
                  </ul>
               </nav>
               <div className="text-center p-10">
                  <h2 className="text-5xl py-2 text-teal-600 font-medium">Amit Chouhan</h2>
                  <h3 className="text-2xl py-2 ">Developer and Programmer</h3>
                  <p className="text-md py-5 leading-8 text-gray-800">I'm a Python Developer and Web Developer,
                     I’m living the dream. I’ve always been a great
                     problem solver, an independent introvert, 
                     and a technophile obsessed with the latest devices.
                     Join me down below and let's get cracking!</p>
               </div>
               <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                  <AiFillTwitterCircle/>
                  <AiFillLinkedin/>
                  <AiFillGithub/>
               </div>
               <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
                  <Image src={deved} layout="fill" objectFit="cover"/>
               </div>
            </section>
            

            <section>
               <div>
                  <h3 className="text-3xl py-1">Services I Offer</h3>
                  <p className="text-md py-2 leading-8 text-gray-800"> 
                   Since I'm a Student So I'm beginning my
                   journey as a freelancer Python Developer and
                   Web Developer, I have done some project like 
                   <span className="text-teal-500"> EduCentre</span>,
                   <span className="text-teal-500"> Olympic Data Analysis</span>,
                   <span className="text-teal-500"> Trenquile Shelters</span> etc.
                   </p>
                   <p className="text-md py-2 leading-8 text-gray-800"> 
                   I'm looking for collaborate with talanted people to create
                   some useful and creative projects.
                   </p>  
               </div>
               <div>
                  <div className=" text-center shadow-lg p-10 rounded-xl my-10">
                     <Image className="dis" src={webdev} width={100} height={100} />
                     <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
                     <p className="py-2">
                        Creating Web Project suited for your needs.
                     </p>
                     <h4 className="py-4 text-teal-600">Web Development Tools I use</h4>
                     <p className="text-gray-800 py-1">React</p>
                     <p className="text-gray-800 py-1">JavaScript</p>
                     <p className="text-gray-800 py-1">Tailwind</p>

                  </div>
               </div>

               <div>
                  <div className=" text-center shadow-lg p-10 rounded-xl my-10">
                     <Image className="dis" src={python} width={100} height={100} />
                     <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
                     <p className="py-2">
                        Creating Web Project suited for your needs.
                     </p>
                     <h4 className="py-4 text-teal-600">Web Development Tools I use</h4>
                     <p className="text-gray-800 py-1">React</p>
                     <p className="text-gray-800 py-1">JavaScript</p>
                     <p className="text-gray-800 py-1">Tailwind</p>

                  </div>
               </div>

               <div>
                  <div className=" text-center shadow-lg p-10 rounded-xl my-10">
                     <Image className="dis" src={code} width={100} height={100} />
                     <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
                     <p className="py-2">
                        Creating Web Project suited for your needs.
                     </p>
                     <h4 className="py-4 text-teal-600">Web Development Tools I use</h4>
                     <p className="text-gray-800 py-1">React</p>
                     <p className="text-gray-800 py-1">JavaScript</p>
                     <p className="text-gray-800 py-1">Tailwind</p>

                  </div>
               </div>

            </section>
            <section>
               <div>
                  
               </div>
            </section>
         </main>
       </div> 
    );
}