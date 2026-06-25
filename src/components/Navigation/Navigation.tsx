import { menuItems } from "../../data/menu";
import MenuItem from "../MenuItem/MenuItem";

function Navigation() {
    return (
        <nav className="main-nav">{
            menuItems.map((item) => (
                <MenuItem key={item.label} item={item} />
            ))
        }</nav>
    );
}

export default Navigation;
