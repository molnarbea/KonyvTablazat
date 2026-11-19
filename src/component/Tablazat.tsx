import { useTablazatContext } from "../contexts/TablazatContext"
import './tablazat.css'
import Sor from "./Sor"

export default function Tablazat(){
const {konyvLista}=useTablazatContext()
return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Ár (Ft)</th>
                    <th>Darabszám</th>
                    <th>Törlés</th>
                </tr>
            </thead>
            <tbody>
                {
                    konyvLista.map((konyv, i)=>{
                        return (<Sor konyv={konyv} key={i} />)
                    })
                }
            </tbody>
        </table>
    </div>
)}