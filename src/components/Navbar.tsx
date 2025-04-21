import { HiOutlineMenu } from "react-icons/hi";

export default function Navbar() {
  const navItems = ["Início", "Serviços", "Sobre", "Como funciona?"];

  return (
    <nav className="backdrop-blur-2xl bg-[#181818]/20 border-b border-white/10 fixed z-10 w-full flex items-center justify-around py-14 font-regular text-white">
      <div>
        <h1 className="tracking-[2px] text-4xl font-bold hover:scale-105 duration-300 cursor-default">
          scala <span className="text-[#008fff]">ai</span>
        </h1>
      </div>
      <ul className="md:flex gap-10 hidden">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="hover:scale-110 duration-300 border-b border-transparent hover:border-white py-[2px]"
          >
            <a href="#" className="tracking-[1px]">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="hover:scale-110 duration-300 md:flex hidden">
        <a
          href="#"
          className="tracking-[1px] text-[18px] border font-light border-white hover:bg-white hover:text-[#181818] duration-300 px-5 py-4"
        >
          Contato
        </a>
      </div>
      <div className="flex md:hidden">
        <HiOutlineMenu className="text-3xl"/>
      </div>
    </nav>
  );
}
