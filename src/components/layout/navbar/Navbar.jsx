import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dfcgwfson/image/upload/v1686841832/curso%20react/LOGO_f0yudj.jpg"
        style={{ width: "6%" }}
      ></img>
      <ul>
        <li>Cursos</li>
        <li>Productos</li>
      </ul>
      <CartWidget />
    </div>
  );
};
