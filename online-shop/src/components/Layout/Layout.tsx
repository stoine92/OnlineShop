import { ReactNode } from "react";
import Container from "./Container";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    
    return(
        <Container>
            <NavBar />
            {children}
            <Footer />
        </Container>
    )
}

export default Layout;