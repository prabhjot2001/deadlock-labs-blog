import { Footer } from "flowbite-react";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <Footer container className={`border-t-2 mt-20`}>
      <div className={`w-full max-w-7xl mx-auto`}>
        <div className={`grid w-full justify-between sm:flex md:grid-cols-1`}>
          {/* Logo  */}
          <div className={`mt-5`}>
            <Link
              to={`/`}
              className={`self-center whitespace-nowrap font-bold text-lg sm:text-xl dark:text-white`}
            >
              <img src="/icon.svg" alt="logo" className="w-8 lg:w-10" />{" "}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreference">
                  Deadlock Labs
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreference"
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="github.com/prabhjot2001"
                  target="_blank"
                  rel="noopener noreference"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="linkedin.com"
                  target="_blank"
                  rel="noopener noreference"
                >
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreference"
                >
                  Privacy
                </Footer.Link>
                <Footer.Link
                  href="/terms-condition"
                  target="_blank"
                  rel="noopener noreference"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href=""
            by="Deadlock Labs"
            year={new Date().getFullYear()}
          />

          <div className={`flex gap-6 sm:mt-0 mt-4 sm:justify-center`}>
            <Footer.Icon href="" icon={Instagram} />
            <Footer.Icon href="" icon={Twitter} />
            <Footer.Icon href="" icon={Facebook} />
            <Footer.Icon href="" icon={Github} />
            <Footer.Icon href="" icon={Linkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
