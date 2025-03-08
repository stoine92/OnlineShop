import { ReactNode } from "react";
import NavBar from "./NavBar";
import Container from "./Container";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    
    return(
        <Container>
            <NavBar />
            {children}
        </Container>
    )
}

export default Layout;