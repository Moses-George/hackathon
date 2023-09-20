import { PropsWithChildren } from "react";
import Navbar from "./navbar"



const Layout = ({ children }: PropsWithChildren) => {

    return (
        <>
            <Navbar />
            <main className="container">{children}</main>
        </>
    )
}

export default Layout;