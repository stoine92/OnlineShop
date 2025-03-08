import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes;