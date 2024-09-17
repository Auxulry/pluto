import Nav from "@/components/atoms/nav/Nav";
import NavMenu from "@/components/atoms/nav/NavMenu";
import NavProfile from "@/components/atoms/nav/NavProfile";

export default function NavBar() {
    return (
        <Nav>
            <NavMenu />
            <NavProfile />
        </Nav>
    )
}
