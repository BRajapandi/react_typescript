type ButtonProps = {
  variant: "primary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return <div> CustomButton</div>;
};
export default CustomButton;

// ======================

type textProps<E extends React.ElementType> = {
  size?: "sm" | "md";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = textProps<E> &
  Omit<React.ComponentProps<E>, keyof textProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {};
