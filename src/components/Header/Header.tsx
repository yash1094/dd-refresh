type HeaderProps = {
    userName: string;
    dealerName: string;
}

function Header({ userName, dealerName }: HeaderProps) {
    return (
        <header className="site-header">
            <div className="logo">Dealer Direct</div>

            <div className="user-info">
                <strong>{userName}</strong> @ {dealerName}
                <a href="/logout">Logout</a>
            </div>
        </header>
    )
}

export default Header;