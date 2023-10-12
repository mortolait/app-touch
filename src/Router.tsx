import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Examples } from './pages/examples'

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/examples" element={<Examples/>}></Route>
        </Routes>
    )
}