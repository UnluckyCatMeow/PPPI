function MenuButton({ onClick }) {
  return (
    <div className="Menu" onClick={onClick}>
      <img src="menu.png" alt="Menu" />
      <div className="overlay"></div>
    </div>
  );
}

export default MenuButton;