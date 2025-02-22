import { Button } from "flowbite-react";
import { ReactNode } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

type PropsType = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
} & React.ComponentProps<typeof Button>;

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "",
    },
  },
};

const PrimaryButton = ({
  children,
  className,
  type = "button",
  ...props
}: PropsType) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button
        type={type}
        color="primary"
        {...props}
        className={`bg-green-500 text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-500 ${className}`}
      >
        {children}
      </Button>
    </Flowbite>
  );
};

export default PrimaryButton;
