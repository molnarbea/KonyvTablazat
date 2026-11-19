import { useState } from "react";
import { useTablazatContext, type UjKonyvTipus } from "../contexts/TablazatContext";
import './ujKonyv.css'

export default function UjKonyv(){
    const {konyvHozzaadas} = useTablazatContext();
    const [cim, setCim] = useState<string>("");
    const [szerzo, setSzerzo] = useState<string>("");
    const [ar, setAr] = useState<number>(0);
    const [darab, setDarab] = useState<number>(0);
    function mentes(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const ujKonyv: UjKonyvTipus = {
            cim,
            szerzo,
            ar,
            darab
        };
        konyvHozzaadas(ujKonyv);
        setCim("");
        setSzerzo("");
        setAr(0);
        setDarab(0);
    }
    return(
        <section className="uj-konyv">
            <h2>Új Könyv Hozzáadása</h2>
                <form onSubmit={mentes}>
                    <div className="form-mezo">
                        <label htmlFor="cim">Cím: </label>
                        <input type="text" name="cim" id="cim" value={cim} onChange={(e)=>setCim(e.target.value)} required/>
                    </div>
                    <div className="form-mezo">
                        <label htmlFor="szerzo">Szerző: </label>
                        <input type="text" name="szerzo" id="szerzo" value={szerzo} onChange={(e)=>setSzerzo(e.target.value)} required/>
                    </div>
                    <div className="form-mezo">
                        <label htmlFor="ar">Ár: </label>
                        <input type="number" name="ar" id="ar" min="1000" value={ar} onChange={(e)=>setAr(Number(e.target.value))} required/>
                    </div>
                    <div className="form-mezo">
                        <label htmlFor="darab">Darab: </label>
                        <input type="number" name="darab" id="darab" min="1" value={darab} onChange={(e)=>setDarab(Number(e.target.value))} required/>
                    </div>
                    <input type="submit" value="Mentés" />
                </form>
        </section>
    )
}