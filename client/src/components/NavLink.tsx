import { ReactNode } from "react";
import { Link } from "react-router-dom";

type PropsType = {
  children: ReactNode;
  className?: string;
  to: string;
};
const NavLink = ({ children, to, className, ...props }: PropsType) => {
  return (
    <Link
      {...props}
      to={to}
      className={`text-green-700 hover:underline underline-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
