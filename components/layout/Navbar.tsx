
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
    const navItems = [
        {
            text: "Home",
            path: "/"
        },

        {
            text: "Our fleet",
            path: "/getAll"
        },
        {
            text: "Terms and conditions",
            path: ""
        },
        {
            text: "Contact Us",
            path: ""
        },

    ]

    const router = useRouter()

    return (
        <header className="fixed bg-white z-50 shadow-xl w-full  ]">
            <nav className="flex justify-between mx-auto max-w-[80rem] h-16 items-center ">
            <h1 className="uppercase font-bold text-primary-blue text-3xl">karl <span className="text-black">rental</span></h1>
                <ul className="flex gap-10 h-16 items-center">
                    {navItems.map((navItem, index) => {
                        return (
                            <Link key={index} href={navItem.path} className={router.pathname === navItem.path ? "bg-[#ECECEC] h-16 flex items-center px-4 font-bold border-b-4 border-primary-blue underline-primary-blue" : "text-lg font-bold"}>{navItem.text}</Link>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;