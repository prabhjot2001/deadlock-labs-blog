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
          <img src="/icon.svg" alt="logo" className="w-12 lg:w-16" />{" "}
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
        <Link to={`/sign-in`}>
          <Button className="bg-green-500 border text-white hidden lg:inline">
            Sign In
          </Button>
        </Link>
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
                  <Sidebar.ItemGroup className="flex flex-col">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                      <Button className="w-full hover:bg-slate-100" color="">
                        Home
                      </Button>
                    </Link>

                    <Link to="/about" onClick={() => setIsOpen(false)}>
                      <Button className="w-full hover:bg-slate-100" color="">
                        About
                      </Button>
                    </Link>

                    <Link to="/projects" onClick={() => setIsOpen(false)}>
                      <Button className="w-full hover:bg-slate-100" color="">
                        Projects
                      </Button>
                    </Link>

                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button className="w-full hover:bg-slate-100" color="">
                        Dashboard
                      </Button>
                    </Link>

                    <Link to="/sign-up" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-slate-400 text-white hover:bg-slate-400">
                        Sign Up
                      </Button>
                    </Link>

                    <Link to="/sign-in" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                        Sign In
                      </Button>
                    </Link>
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
