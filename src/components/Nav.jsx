import { navLinks } from "../constant";

const Nav = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-8 px-20 flex">
      <div className=" w-full flex item-center justify-between">
        <div className="flex items-center justify-center">
          {" "}
          <h1 className=" flex items-center justify-center font-barlow font-semibold text-2xl tracking-widest text-white  ">
            sunnyside
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <ul className="flex items-center justify-center text-sm ">
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    key={link.id}
                    href={link.href}
                    rel={link.rel}
                    target={link.target}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </div>
            <li className="border rounded-full text-cyan-600 bg-white py-2 px-5">
              Contacts
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
