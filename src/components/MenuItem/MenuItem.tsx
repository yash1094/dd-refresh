import type { NavigationItem } from "../../types/Menu";

type NavigationItemProps = {
    item: NavigationItem;
};

export default function MenuItem({ item }: NavigationItemProps) {
    return <div className="menu-item">
        <a href={item.link || "#"}>
            {item.label}
        </a>

        {item.children && (
            <div className="submenu">{item.children?.map((child) => (
                <MenuItem key={child.label} item={child} />
            ))}</div>
        )}
    </div >
}