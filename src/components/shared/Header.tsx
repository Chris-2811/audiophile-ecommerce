import { navbarLinks } from "@/constants";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";

function Header() {
  const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <header className=" border-b border-white/20 bg-secondary md:border-none">
      <div className="container relative z-20  ">
        <div className="flex-between  border-white/20 py-9 md:border-b">
          <img
            onClick={() => setIsModalOpen(!isModalOpen)}
            src="assets/shared/tablet/icon-hamburger.svg"
            alt={isModalOpen ? "close-menu" : "open-menu"}
            className="cursor-pointer md:mr-10 lg:hidden"
          />
          <NavLink to="/">
            <img
              src="assets/shared/desktop/logo.svg"
              alt="company-logo"
              className="md:hidden lg:block"
            />
          </NavLink>
          <nav className="hidden lg:block">
            <ul
              role="list"
              aria-label="primary-navigation"
              className="flex items-center gap-[2.125rem]"
            >
              {navbarLinks.map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li
                    key={link.label}
                    className="text-[0.8125rem]  uppercase leading-[1.92] tracking-[2px] text-white"
                  >
                    <NavLink
                      to={link.route}
                      className={`${isActive && "text-primary"}`}
                    >
                      {link.label}{" "}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex-between md:flex-1 lg:flex-initial">
            <img
              src="assets/shared/desktop/logo.svg"
              alt="company-logo"
              className="hidden md:block lg:hidden"
            />
            <img
              src="assets/shared/desktop/icon-cart.svg"
              alt="shopping-card"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isModalOpen && (
        <div className="lg:hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute w-full gap-3 space-y-[4.25rem] bg-white px-6 pb-[2.125rem] pt-[5.5rem] md:flex md:items-center md:justify-center md:space-y-0 md:pb-[4.25rem] md:pt-[6.75rem]">
            <div className="relative flex flex-col items-center  rounded-lg bg-light-300 pb-[1.25rem] pt-[5.5rem] text-center  md:px-[3.625rem] ">
              <img
                src="assets/shared/mobile/removebg-headphones.jpg"
                alt="headphones"
                className="absolute -top-1/2 left-1/2 h-[104px] -translate-x-1/2 translate-y-1/2"
              />
              <h6 className="heading-xxs uppercase">headphones</h6>
              <Button variant="shop" className="mt-4">
                <p className="text-[0.8125rem] tracking-[1px] opacity-50 ">
                  Shared
                </p>
                <img
                  src="assets/shared/desktop/icon-arrow-right.svg"
                  alt="arrow-right"
                />
              </Button>
            </div>
            <div className="relative flex flex-col items-center  rounded-lg bg-light-300 pb-[1.25rem] pt-[5.5rem] text-center md:px-[3.625rem]">
              <img
                src="assets/shared/mobile/removebg-headphones.jpg"
                alt="headphones"
                className="absolute -top-1/2 left-1/2 h-[104px] -translate-x-1/2 translate-y-1/2"
              />
              <h6 className="heading-xxs uppercase">headphones</h6>
              <Button variant="shop" className="mt-4">
                <p className="text-[0.8125rem] tracking-[1px] opacity-50 ">
                  Shared
                </p>
                <img
                  src="assets/shared/desktop/icon-arrow-right.svg"
                  alt="arrow-right"
                />
              </Button>
            </div>
            <div className="relative flex flex-col items-center  rounded-lg bg-light-300 pb-[1.25rem] pt-[5.5rem] text-center md:px-[3.625rem]">
              <img
                src="assets/shared/mobile/removebg-headphones.jpg"
                alt="headphones"
                className="absolute -top-1/2 left-1/2 h-[104px] -translate-x-1/2 translate-y-1/2"
              />
              <h6 className="heading-xxs uppercase">headphones</h6>
              <Button variant="shop" className="mt-4">
                <p className="text-[0.8125rem] tracking-[1px] opacity-50 ">
                  Shop
                </p>
                <img
                  src="assets/shared/desktop/icon-arrow-right.svg"
                  alt="arrow-right"
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
