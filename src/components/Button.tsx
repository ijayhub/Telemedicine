"use client"

interface ButtonProps {
  value: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}



const Button: React.FC<ButtonProps> = ({ value, className, type, onClick }) => {
  return (
    <div>
      <button onClick={onClick} type={type} className={className}>
        {value}
      </button>
    </div>
  );
};

export default Button;