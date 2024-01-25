"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [isHoverObjectif, setIsHoverObjectif] = useState<boolean>(false);

    return (
        <header className='sticky top-0 h-[80px] w-full z-50 bg-black text-white'>
            <div className='containerHeader mx-auto flex flex-row items-center justify-between h-full'>
                <Link href={"/"}>
                    <Image
                        src="/assets/Logo_NEOVESTIS_Quadri.png"
                        alt="Logo"
                        height={100}
                        width={150}
                    />
                </Link>
                <nav className='flex flex-row items-center justify-center text-center h-full'>
                    <div className='border-b-2 border-transparent hover:border-custom-yellow hover:text-custom-yellow hover:border-b-2 h-full flex items-center mr-10'>
                        <Link href={"/cabinet"}>Le Cabinet</Link>
                    </div>
                    <div className="border-b-2 border-transparent hover:border-custom-yellow hover:text-custom-yellow hover:border-b-2 h-full flex items-center mx-10"
                        onMouseEnter={() => setIsHoverObjectif(true)} onMouseLeave={() => setIsHoverObjectif(false)}
                    >
                        <span>Les Objectifs</span>
                        <div className={`absolute w-full h-72 top-full left-0 bg-black text-white transition-all duration-200 flex items-center ${isHoverObjectif ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                            <div className='w-full h-5/6 flex flex-row justify-between text-left px-16'>
                                <div className='flex flex-col text-sm space-y-3 w-1/4'>
                                    <span className='text-custom-yellow text-base'>Constituer et valoriser votre patrimoine</span>
                                    <Link href={""} className="hover:text-custom-grey">Assurance vie / Capitalisation</Link>
                                    <Link href={""} className="hover:text-custom-grey">Comptes titres et Ordinaire (CTO) et Plan d'Epargne en Actions (PEA)</Link>
                                    <Link href={""} className="hover:text-custom-grey">SCPI : placement immobilier</Link>
                                    <Link href={""} className="hover:text-custom-grey">Fonds Communs de Placement à Risques</Link>
                                </div>
                                <span className='border border-white mx-8'></span>
                                <div className='flex flex-col text-sm space-y-3'>
                                    <span className='text-custom-yellow text-base'>Optimiser votre fiscalité</span>
                                    <Link href={""} className="hover:text-custom-grey">Fonds incitatif et Partenarials (FIP)</Link>
                                    <Link href={""} className="hover:text-custom-grey">Fonds Commun de Placement <br />dans l'innovation (FCPI)</Link>
                                    <Link href={""} className="hover:text-custom-grey">Action non cotée</Link>
                                    <Link href={""} className="hover:text-custom-grey">LMNP : Stratégie patrimoniale</Link>
                                    <Link href={""} className="hover:text-custom-grey">La nue-propriété</Link>
                                </div>
                                <span className='border border-white mx-8'></span>
                                <div className='flex flex-col text-sm gap-6'>
                                    <div className='flex flex-col space-y-3'>
                                        <span className='text-custom-yellow text-base'>Sécurisé votre activité</span>
                                        <Link href={""} className="hover:text-custom-grey">Prévoyance professionnelle</Link>
                                        <Link href={""} className="hover:text-custom-grey">Optimiser votre rémunération</Link>
                                    </div>
                                    <div className='flex flex-col space-y-3'>
                                        <span className='text-custom-yellow text-base'>Protéger vos proches</span>
                                        <Link href={""} className="hover:text-custom-grey">Complémentaire santé</Link>
                                        <Link href={""} className="hover:text-custom-grey">Temporaire décès</Link>
                                        <Link href={""} className="hover:text-custom-grey">Assurance de prêt</Link>
                                    </div>
                                </div>
                                <span className='border border-white mx-8'></span>
                                <div className='flex flex-col text-sm gap-6'>
                                    <div className='flex flex-col text-sm space-y-3'>
                                        <span className='text-custom-yellow text-base'>Préparer votre retraite</span>
                                        <Link href={""} className="hover:text-custom-grey">Plan d'épargne retraite</Link>
                                        <Link href={""} className="hover:text-custom-grey">Epargne salariale</Link>
                                        <Link href={""} className="hover:text-custom-grey">Immobilier à crédit</Link>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <span className='text-custom-yellow text-base'>Transmettre votre patrimoine</span>
                                        <Link href={""} className="hover:text-custom-grey">L'inter-professionnalitée</Link>
                                        <Link href={""} className="hover:text-custom-grey">Assurance vie</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-2 border-transparent hover:border-custom-yellow hover:text-custom-yellow hover:border-b-2 h-full flex items-center mx-10'>
                        <Link href={"/partenaires"}>Nos Partenaires</Link>
                    </div>
                    <div>
                        <Link href={"/contact"} className="ml-10 px-3 py-0.5 border-2 rounded-full border-white hover:border-custom-yellow hover:text-custom-yellow flex items-center">Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
