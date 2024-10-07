import "./Button.css";

export default function Button({ children, buttonCliked, isActive }) {
  // const handleMouseEnter = () => console.log("Enter mouse");
  return (
    <button
      className={isActive ? "button active" : "button"}
      onClick={buttonCliked}
      // onMouseEnter={handleMouseEnter}
    >
      {children}
    </button>
  );
}
