import { BrowserRouter, Routes, Route } from "react-router";
import ReactRedux from "./Components/ReactRedux";
import Welcome from "./Components/Welcome";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/reactredux" element={<ReactRedux />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;