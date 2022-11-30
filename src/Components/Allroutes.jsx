import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";


function Allroutes(){
    return <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about"element={<Homepage />}></Route>
        <Route path="/skills"element={<Homepage />}></Route>
        <Route path="/:id" element={<Homepage />} />
        <Route path="*" exact element={<Homepage />} />
    </Routes>
}

export default Allroutes;