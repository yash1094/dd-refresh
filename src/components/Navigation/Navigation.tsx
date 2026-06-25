import { menuItems } from "../../data/menu";

function Navigation() {
  return (
    <nav className="main-nav">{
        menuItems.map((item) => (
            <a key={item.label} href="#">
                {item.label}
            </a>
        ))
    }</nav>
  );
}

export default Navigation;
