import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface Navlink {
  href: string;
  label: string;
}

const navLinks: Navlink[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#about",
    label: "About Us",
  },
  {
    href: "#specialists",
    label: "Specialists",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleClick = (e:MouseEvent)=> {
      if(menuOpen && ref.current && !ref.current.contains(e.target as Node)){
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown",toggleClick)

    return() => {
      document.addEventListener("mousedown", toggleClick)
    }
  }, [menuOpen])

  return (
    <div className="bg-pink-100 shadow-lg rounded-lg">  {/* ❎ */}
      <div className="container mx-auto lg:flex lg:justify-between lg:px-6 lg:py-6 px-4 py-4 lg:items-center flex flex-row justify-between">
        <div>
          {/* left header section */}
          <h1 className="lg:text-3xl text-xl font-bold text-pink-600 tracking-widest">
            Glamour Clinic
          </h1>
        </div>
        {/* middle header section */}
        <div className="lg:flex space-x-8 items-center hidden">
          {navLinks.map((item, index) => (
            <a key={index} href={item.href} className="cursor-pointer">
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden block">
          <button onClick={() => setMenuOpen(!menuOpen)}  >{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        <div className="text-white tracking-widest hidden md:flex">
          {/* right header section */}
          <Button className="capitalize bg-pink-500 rounded-4xl lg:px-6 px-3 text-xs lg:text-sm cursor-pointer">
            book appointment
          </Button>
        </div>
      </div>

      {/* mobile  */}
      {menuOpen && (
        <div className="md:hidden flex justify-center items-center flex-col backdrop-blur-xl space-y-3 pb-3" ref={ref}>
          {navLinks.map((item, index) => (
            <a href={item.href} key={index} onClick={()=> setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
