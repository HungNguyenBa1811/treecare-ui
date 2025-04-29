import { NavLink } from "react-router-dom";
import { SearchIcon, UserIcon } from "../../../components/Icons";

const TabList = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Demo",
        path: "/demo",
    },
    {
        name: "About Us",
        path: "/",
    },
    {
        name: "Support Us",
        path: "/supportus",
    }
]

export default function Header() {
    return (
        <header className="w-full flex flex-col sm:flex-row justify-between items-center px-4 md:px-32 py-6 text-lg">
            <div className="hover:cursor-pointer mb-4 sm:mb-0">
                <p className="font-bold text-3xl md:text-4xl uppercase">
                    <span className="text-lime-500">Tree</span>Care
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-4 sm:mb-0">
                {TabList.map((tab, index) => (
                    <div className="hover:cursor-pointer" key={index}>
                        <p className="font-semibold text-neutral-700">
                            <NavLink to={tab.path}>{tab.name}</NavLink>
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-4 md:gap-8">
                <SearchIcon className="hover:cursor-pointer" />
                <UserIcon className="hover:cursor-pointer" />
            </div>
        </header>
    )
}