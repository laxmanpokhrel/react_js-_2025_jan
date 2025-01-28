const Button = ({ btnType, onClick, children }) => {
  return (
    <button className={`btn ${btnType}`} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
