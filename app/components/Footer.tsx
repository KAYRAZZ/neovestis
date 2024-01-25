
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {

    return (
        <footer className='bg-black text-white text-sm'>
            <div className='container1 mx-auto py-8'>
                <Image
                    src="/assets/Logo_NEOVESTIS_Quadri.png"
                    alt="Logo Neovestis"
                    height={100}
                    width={175}
                />
                <div className='flex flex-row justify-between'>
                    <div>
                        <p className='uppercase'>Siège social</p>
                        <p>37 avenue Hoche</p>
                        <p>51100 REIMS</p>
                        <br />
                        <p className='uppercase'>Etablissement Secondaire</p>
                        <p>44-46 rue de la Bienfaisance</p>
                        <p>75008 PARIS</p>
                    </div>
                    <span className='border-r border-white'></span>
                    <nav className='flex flex-row justify-around mx-6'>
                        <div className='flex flex-col space-y-3 w-4/12'>
                            <Link href={""} className="hover:text-custom-grey">Le Cabinet</Link>
                            <Link href={""} className="hover:text-custom-grey">Consituer et valoriser votre patrimoine</Link>
                            <Link href={""} className="hover:text-custom-grey">Optimiser votre fiscalité</Link>
                            <Link href={""} className="hover:text-custom-grey">Sécurité votre activité</Link>
                        </div>
                        <div className='flex flex-col mx-6 space-y-3 w-4/12'>
                            <Link href={""} className="hover:text-custom-grey">Protéger vos proches</Link>
                            <Link href={""} className="hover:text-custom-grey">Préparer votre retraite</Link>
                            <Link href={""} className="hover:text-custom-grey">Transmettre votre patrimoine</Link>
                            <Link href={""} className="hover:text-custom-grey">Nos parteniares privilégiés</Link>
                        </div>
                        <div className='flex flex-col space-y-3 w-4/12'>
                            <Link href={""} className="hover:text-custom-grey">Contact</Link>
                            <Link href={""} className="hover:text-custom-grey">Confidentialité et RGPD</Link>
                            <Link href={""} className="hover:text-custom-grey">Mentions légales</Link>
                        </div>
                    </nav>
                    <span className='border-r border-white'></span>
                    <div>
                        <span>Médias sociaux</span>
                        <a href="">
                            <img src="/assets/icone/icone_linkedin.svg" alt="icone linkedin" width="25px" className='mt-4' />
                        </a>
                    </div>
                </div>
            </div>

            <div className='text-center py-1 bg-custom-yellow text-sm'>
                © 2024 Champagne Création - Tous droits réservés
            </div>
        </footer>
    );
};

export default Header;
