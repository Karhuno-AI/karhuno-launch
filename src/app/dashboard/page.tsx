import HomeLayout from "@/modules/dashboard/layouts/dashboard-layout";

interface HomeLayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: HomeLayoutProps) => {
  return (
    <HomeLayout>
        <div className="font-[family-name:var(--font-montserrat-sans)]">
            {children}
        </div>
    </HomeLayout>
  );
}

export default Layout;
