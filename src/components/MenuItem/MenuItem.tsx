import type { NavigationItem } from "../../types/Menu";

type NavigationItemProps = {
    item: NavigationItem;
};

export default function MenuItem({ item }: NavigationItemProps) {
    return (
        <a href={item.link || "#"} className="menu-item">
            {item.label}
        </a>
    )
}


// <a key={item.label} href="#">
//     {item.label}
// </a>