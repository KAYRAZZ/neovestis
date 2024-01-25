"use client";

import Image from 'next/image'
import Link from 'next/link';
import SliderAutresObjectifs from '../components/SliderAutresObjectifs';
import MenuRight from '../components/MenuRight';
import React from 'react';
import Sticky from 'react-stickynode';

const ConstituerPatrimoine = () => {

    return (
        <main className='min-h-96 relative'>
            <div id="start" className='relative h-80 flex items-center justify-center'>
                <Image
                    src="/assets/images/Groupe-2.jpg"
                    alt="image Neovestis"
                    layout='fill'
                    className="object-cover object-bottom z-0"
                />
                <span className="bg-[rgba(0,0,0,0.4)] absolute top-0 z-1 w-full h-full"></span>
                <h1 className="text-4xl text-white z-2 absolute uppercase container1 mx-auto">Constituer et valoriser <br />votre patrimoine</h1>
            </div>

            <div className='z-50 w-1/5 absolute right-0'>
                <Sticky top="#start">
                    <MenuRight />
                </Sticky>
            </div>

            <div className='container1 py-8 block'>
                <Link href={"/"} className='text-custom-grey'>Accueil &gt; </Link>
                <span>Constituer et valoriser votre patrimoine</span>
            </div>

            <section id='AC' className='bg-black'>
                <div className='container2'>
                    <h1 className='text-custom-yellow text-3xl uppercase mb-8 block'>Assurance vie & capitalisation</h1>
                    <div className='container3 flex flex-row text-white gap-16'>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quisquam cupiditate tempora, tempore eaque excepturi consequatur nihil. Eos corporis in non voluptate porro ratione quos laboriosam quod nihil similique debitis unde nisi maiores ullam sequi, incidunt amet repellendus eaque cumque deserunt totam! Illum odio, dolor debitis nam minima perferendis in.
                        </div>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum architecto sint asperiores praesentium earum itaque, reprehenderit, odit facere rerum in molestias vitae voluptatum sequi doloremque cumque numquam deserunt minus a magni alias? Hic voluptatibus nam fuga placeat odio cumque porro! Ducimus quidem eius architecto soluta dicta consequatur error nulla officia.
                        </div>
                    </div>
                </div>
            </section>

            <section id='CTO' className=''>
                <div className='container2'>
                    <span className='uppercase text-custom-grey text-3xl mb-8 block'>Comptes titres et Ordinaire (CTO) <br />& Plan d'Epargne en Actions (PEA)</span>
                    <div className='container3 flex flex-row gap-16'>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            <h1 className='text-custom-yellow text-2xl uppercase'>Compte titres</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia veritatis, vitae architecto sit iusto ipsum facere. Quasi ipsa, excepturi iste porro officiis eveniet perferendis. Ab labore beatae unde aperiam rem explicabo distinctio, totam id. Repellat excepturi modi, porro alias quia neque, tempore aperiam labore voluptatem, vero ea delectus error.
                        </div>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            <h1 className='text-custom-yellow text-2xl uppercase'>PEA</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia veritatis, vitae architecto sit iusto ipsum facere. Quasi ipsa, excepturi iste porro officiis eveniet perferendis. Ab labore beatae unde aperiam rem explicabo distinctio, totam id. Repellat excepturi modi, porro alias quia neque, tempore aperiam labore voluptatem, vero ea delectus error.
                        </div>
                    </div>
                </div>
            </section>
            <section id='SCPI' className='bg-custom-yellow'>
                <div className='container2'>
                    <span className='uppercase text-black text-3xl mb-8 block'>SCPI : placement immobilier</span>
                    <div className='container3 text-white flex flex-row gap-16'>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia veritatis, vitae architecto sit iusto ipsum facere. Quasi ipsa, excepturi iste porro officiis eveniet perferendis. Ab labore beatae unde aperiam rem explicabo distinctio, totam id. Repellat excepturi modi, porro alias quia neque, tempore aperiam labore voluptatem, vero ea delectus error.
                        </div>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia veritatis, vitae architecto sit iusto ipsum facere. Quasi ipsa, excepturi iste porro officiis eveniet perferendis. Ab labore beatae unde aperiam rem explicabo distinctio, totam id. Repellat excepturi modi, porro alias quia neque, tempore aperiam labore voluptatem, vero ea delectus error.
                        </div>
                    </div>
                </div>
            </section>

            <section id='FCPR' className=''>
                <div className='container2'>
                    <span className='uppercase text-custom-yellow text-3xl mb-8 block'>Investir via un Fonds Communs de Placement à Risques (FCPR)</span>
                    <div className='container3 text-black flex flex-row gap-16'>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia veritatis, vitae architecto sit iusto ipsum facere. Quasi ipsa, excepturi iste porro officiis eveniet perferendis. Ab labore beatae unde aperiam rem explicabo distinctio, totam id. Repellat excepturi modi, porro alias quia neque, tempore aperiam labore voluptatem, vero ea delectus error.
                        </div>
                        <div>
                            <hr className='border-t-2 border-slate-500 my-4' />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia veritatis, vitae architecto sit iusto ipsum facere. Quasi ipsa, excepturi iste porro officiis eveniet perferendis. Ab labore beatae unde aperiam rem explicabo distinctio, totam id. Repellat excepturi modi, porro alias quia neque, tempore aperiam labore voluptatem, vero ea delectus error.
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-slate-200'>
                <div className='container2 mb-8 block'>
                    <span className='text-custom-yellow text-3xl uppercase mb-8 block'>Les autres objectifs</span>
                    <SliderAutresObjectifs />
                </div>
            </section>
        </main>
    )
}

export default ConstituerPatrimoine;