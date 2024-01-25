
const MenuRight = () => {
    return (
        <div className="bg-[rgba(255,255,255,0.9)] py-10 px-10 block">
            <a href="#AC" className="text-custom-yellow uppercase">Assurance vie <br />& Capitalisation</a>
            <hr className='border-t-2 border-slate-400 my-4' />
            <a href="#CTO" className="text-custom-yellow uppercase">Comptes titres et Ordinaire (CTO) et Plan d'Epargne en Actions (PEA)</a>
            <hr className='border-t-2 border-slate-400 my-4' />
            <a href="#SCPI" className="text-custom-yellow uppercase">SCPI : placement immobilier</a>
            <hr className='border-t-2 border-slate-400 my-4' />
            <a href="#FCPR" className="text-custom-yellow uppercase">Fonds Communs de Placement à Risques</a>
        </div>
    )
};
export default MenuRight;
