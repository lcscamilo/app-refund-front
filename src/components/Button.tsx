import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: keyof typeof VARIANTS;
};

const VARIANTS = {
  base: "h-12",
  baseFull: "h-12 w-full",
  icon: "h-12 w-12",
  iconSmall: "h-8 w-8",
} as const;

export function Button({
  children,
  isLoading,
  type = "button",
  variant = "base",
  className,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...rest}
      className={classMerge(
        [
          "flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50",
        ],
        VARIANTS[variant],
        isLoading && "cursor-progress",
        className
      )}
    >
      {children}
    </button>
  );
}
