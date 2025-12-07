import { useNavigate } from "react-router-dom";

function MainMenu({ open, onClose }) {
  const navigate = useNavigate();

  return (
    <div className={`main-menu ${open ? "open" : "closed"}`}>
      <h2 className="menu-title">Столова ДУІКТ</h2>

      <button>Сьогодні в меню</button>
      <button>Загальне меню</button>

      
      <button onClick={() => navigate("/register")}>
        Зареєструватись
      </button>

      <button className="back-btn" onClick={onClose}>Назад</button>
    </div>
  );
}

export default MainMenu;
