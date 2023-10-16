import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Examples } from './pages/examples'
import { Catalagos } from './pages/Catalagos'

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/examples" element={<Examples/>}></Route>
            <Route path="/teste" element={<Catalagos/>}></Route>
            <Route path="/catalogos/:id" element={<Catalagos/>}></Route>
        </Routes>
    )
}