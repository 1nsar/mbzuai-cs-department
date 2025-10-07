export const Logo = (props: React.ComponentProps<"img">) => {
  return (
    <img
      src="/mbzuai-logo.svg"
      alt="Mohamed bin Zayed University of Artificial Intelligence"
      loading="lazy"
      {...props}
    />
  );
};
