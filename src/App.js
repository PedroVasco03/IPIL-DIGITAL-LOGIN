import { BrowserRouter, Route, Routes} from "react-router-dom"
import ProsseguirAluno from "./componets/ProsseguirAluno"
import LoginAluno from "./componets/LoginAluno"
import LoginEncarregado from "./componets/LoginEncarregado"
import LoginCoordenador from "./componets/LoginCoordenador"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<LoginAluno></LoginAluno>}></Route>
                    <Route path={'/ProsseguirAluno'} element={<ProsseguirAluno></ProsseguirAluno>}></Route>
                    <Route path={'LoginEncarregado'} element={<LoginEncarregado/>}></Route>
                    <Route path={'LoginCoordenador'} element={<LoginCoordenador/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App