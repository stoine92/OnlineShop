import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes;