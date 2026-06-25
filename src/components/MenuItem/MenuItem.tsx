import type { NavigationItem } from "../../types/Menu";
import "./MenuItem.css";

type MenuItemProps = {
    item: NavigationItem;
};

export default function MenuItem({ item }: MenuItemProps) {
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className="menu-item">
            <a className="menu-link" href={item.link ?? "#"}>
                {item.label}
                {hasChildren && <span className="menu-caret">▾</span>}
            </a>

            {hasChildren && (
                <div className="submenu">
                    {item.children!.map((child) => (
                        <MenuItem key={child.label} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
}