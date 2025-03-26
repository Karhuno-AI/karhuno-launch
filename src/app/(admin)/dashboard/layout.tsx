import HomeLayout from "@/modules/dashboard/layouts/dashboard-layout";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: HomeLayoutProps) => {
  return (
    <HomeLayout>
      <main>{children}</main>
      
    </HomeLayout>
  );
};

export default Layout;
