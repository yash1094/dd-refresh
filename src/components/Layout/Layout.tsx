import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
    <Header userName="Yash Pandya" dealerName="Test Dealer Account (80000" />
    <Navigation />

    <main>
      {children}
    </main>
    </>
  );
}

export default Layout;
