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
        <header className="w-full flex flex-col flex-wrap justify-between items-center gap-2 px-4 py-6 text-lg md:px-32 xl:flex-row">
            <div className="hover:cursor-pointer mb-4 sm:mb-0">
                <p className="font-bold text-3xl uppercase md:text-4xl">
                    <span className="text-lime-500">Tree</span>Care
                </p>
            </div>
            <div className="flex flex-wrap flex-col justify-center gap-4 mb-4 sm:flex-row sm:mb-0 md:gap-10">
                {TabList.map((tab, index) => (
                    <div className="hover:cursor-pointer" key={index}>
                        <p className="font-semibold text-center text-neutral-700 sm:text-left">
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