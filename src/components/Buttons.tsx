interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function Buttons({
  text,
  type,
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-[37px] flex items-center font-[figtree] justify-center ${className || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
