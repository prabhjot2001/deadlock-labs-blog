import { Button, Drawer, Navbar, Sidebar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const currentPath = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Navbar className={`border-b`}>
      <div>
        <Link
          to={`/`}
          className={`flex items-end self-center whitespace-nowrap font-bold text-lg sm:text-xl dark:text-white`}
        >
          <img src="/logo.svg" alt="logo" className="w-10" />{" "}
          <span className={`text-green-500`}>Dead</span>lock Labs Blog
        </Link>
      </div>

      <div className={`hidden lg:flex gap-6`}>
        <Link
          to={`/`}
          className={`${
            currentPath === "/"
              ? "text-green-500 underline underline-offset-4 decoration-2"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={`/projects`}
          className={`${
            currentPath === "/projects"
              ? "text-green-500 underline underline-offset-4 decoration-2"
              : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to={`/about`}
          className={`${
            currentPath === "/about"
              ? "text-green-500 underline underline-offset-4 decoration-2"
              : ""
          }`}
        >
          About
        </Link>
        <Link
          to={`/dashboard`}
          className={`${
            currentPath === "/dashboard"
              ? "text-green-500 underline underline-offset-4 decoration-2"
              : ""
          }`}
        >
          Dashboard
        </Link>
      </div>

      <div className={`flex gap-2 md:order-2`}>
        <form>
          <TextInput
            placeholder="Search"
            rightIcon={Search}
            className={`hidden lg:inline`}
          />
        </form>

        <Button className="hidden lg:inline" size="sm" color="gray">
          <Moon className="w-4" />
        </Button>
        <Button className="bg-green-500 border text-white hidden lg:inline">
          <Link to={`/sign-in`}>Sign In</Link>
        </Button>
        <Button
          size="xs"
          color=""
          onClick={() => setIsOpen(true)}
          className="lg:hidden"
        >
          <Menu />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={Search}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Button className="w-full" color="">
                      <Link to={`/`}>Home</Link>
                    </Button>
                    <Button className="w-full" color="">
                      <Link to={`/`}>About</Link>
                    </Button>
                    <Button className="w-full" color="">
                      <Link to={`/`}>Dashboard</Link>
                    </Button>
                    <Button className="w-full bg-slate-200 text-black">
                      <Link to={`/`}>Sign Up</Link>
                    </Button>
                    <Button className="w-full bg-green-500 border text-white">
                      <Link to={`/`}>Sign In</Link>
                    </Button>
                  </Sidebar.ItemGroup>

                  <Sidebar.ItemGroup>
                    <div className={`flex items-center justify-between`}>
                      Change Theme
                      <Button size="xs" color="light">
                        <Moon className="w-4" />
                      </Button>
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </Navbar>
  );
};

export default Header;
