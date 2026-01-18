export const Button = ({ children, onClick, variant = "primary" }) => {
  const styles = {
    primary: "bg-black text-white px-6 py-2 rounded hover:bg-gray-800",
    outline:
      "border border-black text-black px-6 py-2 rounded hover:bg-gray-100",
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};
