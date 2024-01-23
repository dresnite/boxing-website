import clsx from "clsx";
import NavLink from "./NavLink";

export default function DesktopNavLinks({ isOpen }: { isOpen: boolean }) {
    return (
        <div className={
            clsx("hidden md:flex flex-row space-x-6 items-center",
            {
              "md:hidden": isOpen
            })
          }>
            
            <NavLink link="#hero" text="Home" />
            <NavLink link="#our-classes" text="Our classes" />
            <NavLink link="#cta" text="Prices" />
            <NavLink link="#cta" text="Contact us" />

            <button className="mb-2 bg-red-700 hover:bg-red-500 duration-200 py-2 px-3 font-semibold">
              Try a free class
            </button>
          </div>
    );
}