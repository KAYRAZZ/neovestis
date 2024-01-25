"use client"

import { useState } from "react";
import SliderPartenaires from "./components/SliderPartenaires";
import SliderVertical from "./components/SliderVertical";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);

  const [isHoveringSavoirPlus2, setIsHoveringSavoirPlus2] = useState(false);

  return (
    <main>
      <div className="w-full max-h-[500px] relative top-0 z-0">
        <SliderVertical />
      </div>

      <section className="flex flex-col justify-center mb-10">
        <div className=" container1 mx-auto">
          <span className="text-custom-yellow text-3xl uppercase relative left-0 py-8">Les objectifs</span>
          <div className="grid grid-cols-3 gap-10 text-center text-white my-8 text-lg">

            <Link href={"/constituerPatrimoine"} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering1(true)} onMouseLeave={() => setIsHovering1(false)}>
              <img src="/assets/icone/icone_arc.svg" alt="image neovestis"  className={`absolute transition-opacity duration-300 ${isHovering1 ? 'opacity-100' : 'opacity-0'}`} />
              <img src="/assets/images/Groupe-2.jpg" alt="image neovestis"  className={`transition-opacity duration-300 ${isHovering1 ? 'opacity-0' : 'opacity-100'}`} />
              {!isHovering1 && <span className="uppercase absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Constituer et valoriser <br /> votre patrimoine</span>}
            </Link>

            <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)}>
              <img src="/assets/icone/icone_main.svg" alt="image neovestis"  className={`absolute transition-opacity duration-300 ${isHovering2 ? 'opacity-100' : 'opacity-0'}`} />
              <img src="/assets/images/Groupe-8.jpg" alt="image neovestis"  className={`transition-opacity duration-300 ${isHovering2 ? 'opacity-0' : 'opacity-100'}`} />
              {!isHovering2 && <span className="uppercase absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Optimiser <br /> votre fiscalité</span>}
            </Link>

            <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)}>
              <img src="/assets/icone/icone_monde.svg" alt="image neovestis"  className={`absolute transition-opacity duration-300 ${isHovering3 ? 'opacity-100' : 'opacity-0'}`} />
              <img src="/assets/images/Groupe-9.jpg" alt="image neovestis"  className={`transition-opacity duration-300 ${isHovering3 ? 'opacity-0' : 'opacity-100'}`} />
              {!isHovering3 && <span className="uppercase absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Sécurisé <br /> votre activité</span>}
            </Link>

            <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering4(true)} onMouseLeave={() => setIsHovering4(false)}>
              <img src="/assets/icone/icone_feuille.svg" alt="image neovestis"  className={`absolute transition-opacity duration-300 ${isHovering4 ? 'opacity-100' : 'opacity-0'}`} />
              <img src="/assets/images/Groupe-10.jpg" alt="image neovestis"  className={`transition-opacity duration-300 ${isHovering4 ? 'opacity-0' : 'opacity-100'}`} />
              {!isHovering4 && <span className="uppercase absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Protéger <br /> vos proches</span>}
            </Link>

            <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering5(true)} onMouseLeave={() => setIsHovering5(false)}>
              <img src="/assets/icone/icone_cochon.svg" alt="image neovestis"  className={`absolute transition-opacity duration-300 ${isHovering5 ? 'opacity-100' : 'opacity-0'}`} />
              <img src="/assets/images/Groupe-11.jpg" alt="image neovestis"  className={`transition-opacity duration-300 ${isHovering5 ? 'opacity-0' : 'opacity-100'}`} />
              {!isHovering5 && <span className="uppercase absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Préparer <br /> votre retraite</span>}
            </Link>

            <Link href={""} className="relative flex justify-center items-center" onMouseEnter={() => setIsHovering6(true)} onMouseLeave={() => setIsHovering6(false)}>
              <img src="/assets/icone/icone_camember.svg" alt="image neovestis"  className={`absolute transition-opacity duration-300 ${isHovering6 ? 'opacity-100' : 'opacity-0'}`} />
              <img src="/assets/images/Groupe-12.jpg" alt="image neovestis"  className={`transition-opacity duration-300 ${isHovering6 ? 'opacity-0' : 'opacity-100'}`} />
              {!isHovering6 && <span className="uppercase absolute h-full w-full flex justify-center items-center bg-[rgba(75,85,99,0.5)]">Préparer <br /> votre retraite</span>}
            </Link>

          </div>
        </div>

        <div className="bg-black">
          <div className=" container1 mx-auto">
            <span className="text-custom-yellow text-3xl uppercase relative left-0">L'équipe</span>
            <div className="grid grid-cols-2 my-8">
              <Image
                src="/assets/images/Neovestis_.jpg"
                alt="image equipe neovestis"
                width={600}
                height={300}
              />
              <div className="flex flex-col justify-center mx-14 gap-4 text-white">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laboriosam similique at aperiam quos debitis, nesciunt distinctio. Ullam inventore, quas officia sequi voluptates voluptate numquam, quaerat consectetur architecto nihil at exercitationem sed magni sapiente. Perferendis quod facilis voluptatem est dignissimos magni ipsa ratione perspiciatis dolorum quas placeat, dolore corrupti hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sit!
                </span>
                <a href="" className={`border-2 border-white rounded-full w-6 h-6 ml-auto flex items-center justify-center ${isHoveringSavoirPlus2 && 'w-auto text-sm px-2 text-center'}`} onMouseEnter={() => setIsHoveringSavoirPlus2(true)} onMouseLeave={() => setIsHoveringSavoirPlus2(false)}>
                  {isHoveringSavoirPlus2 && <span className="pr-1">Savoir</span>}
                  <img src="/assets/icone/icone_plus.svg" alt="icone plus" width="12px" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" container1 mx-auto">
          <span className="text-custom-yellow text-3xl uppercase relative left-0">Nos partenaires privilégiés</span>
          <div className="my-8 h-40">
            <SliderPartenaires />
          </div>
        </div>
      </section>
    </main>
  );
}
