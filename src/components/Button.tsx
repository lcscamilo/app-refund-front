import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  isLoading,
  type = "button",
  className,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...rest}
      className={clsx(
        "h-12 flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress",
        className // <- aqui sim, mescla o que vier de fora
      )}
    >
      {children}
    </button>
  );
}
