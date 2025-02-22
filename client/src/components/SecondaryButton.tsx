import { Button } from "flowbite-react";
import { ReactNode } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

type PropsType = {
  children: ReactNode;
  className?: string;
};

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "",
    },
  },
};

const SecondaryButton = ({ children, className, ...props }: PropsType) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button
        color="primary"
        {...props}
        className={`bg-slate-400 text-white hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-gray-400 ${className}`}
      >
        {children}
      </Button>
    </Flowbite>
  );
};

export default SecondaryButton;
