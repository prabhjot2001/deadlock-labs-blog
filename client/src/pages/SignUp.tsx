import PrimaryButton from "@/components/PrimaryButton";
import NavLink from "@/components/NavLink";
import { Alert, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Info } from "lucide-react";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setErrMessage("All field marked with * are required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrMessage("Password and Confirm password do not match");
      return;
    }
    try {
      setErrMessage(null);
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrMessage(data.message);
      }
      if (res.status == 201 && data.success === true) {
        toast.success(data.message);
        navigate("/sign-in");
      }
      setLoading(false);
    } catch (error: any) {
      setErrMessage(error);
    }
  };
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
          <form className={`mt-6 flex flex-col gap-2`} onSubmit={handleSubmit}>
            <div>
              <Label value="Username *" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email Address *" />
              <TextInput
                type="email"
                placeholder="e.g. example@email.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password *" />
              <TextInput
                type="password"
                placeholder="Create a secure password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Confirm Password *" />
              <TextInput
                type="password"
                placeholder="Re-enter your password"
                id="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <div className="">
              {errMessage && (
                <Alert color="failure" icon={Info} className={`mt-2`}>
                  {errMessage}
                </Alert>
              )}
            </div>
            <PrimaryButton disabled={loading} className="mt-4" type="submit">
              {loading && (
                <>
                  <span>Loading...</span>
                  <Spinner size="md" />
                </>
              )}
              {!loading && "Create Account"}
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
