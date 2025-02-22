import PrimaryButton from "@/components/PrimaryButton";
import NavLink from "@/components/NavLink";
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={`min-h-screen mt-20`}>
      <div className="flex gap-12 p-8 max-w-3xl mx-auto flex-col md:flex-row md:items-center md:p-0 md:gap-16">
        {/* left side */}
        <div className={`flex-1`}>
          <div
            className={`flex flex-col items-center justify-center text-center`}
          >
            <Link
              to={`/`}
              className={`self-center whitespace-nowrap font-bold text-lg sm:text-xl dark:text-white`}
            >
              <img src="/icon.svg" alt="logo" className="w-16 lg:w-20" />{" "}
            </Link>
            <h1 className={`text-2xl font-bold flex-wrap mt-4`}>
              Plug into the Future – Join the Tech Revolution!
            </h1>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-200 mt-2">
              Stay ahead with the latest in tech, dev life, engineering
              insights, and more – your journey starts here!
            </p>
          </div>
        </div>
        {/* right side */}
        <div className={`flex-1`}>
          <h1 className={`text-2xl font-bold flex-wrap mt-4 text-center`}>
            Create Your Account
          </h1>
          <form className={`mt-6 flex flex-col gap-2`}>
            <div>
              <Label value="Username *" />
              <TextInput type="text" placeholder="Username" />
            </div>
            <div>
              <Label value="Email Address *" />
              <TextInput type="email" placeholder="e.g. example@email.com" />
            </div>
            <div>
              <Label value="Password *" />
              <TextInput
                type="password"
                placeholder="Create a secure password"
              />
            </div>
            <div>
              <Label value="Confirm Password *" />
              <TextInput type="password" placeholder="Re-enter your password" />
            </div>

            <PrimaryButton className="mt-6" type="submit">
              Create Account
            </PrimaryButton>

            <p className={`text-sm mt-4 text-center`}>
              Already a member? <NavLink to="/sign-in">Sign in here</NavLink>
            </p>

            <p className={`text-xs mt-4 text-center`}>
              By proceeding, you acknowledge and agree to our{" "}
              <NavLink to="/terms-conditions">Terms and Conditions</NavLink> and{" "}
              <NavLink to="/privacy">Privacy Policy</NavLink>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
