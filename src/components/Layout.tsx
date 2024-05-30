import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Domů
          </Link>
          <Link
            href="/about"
            className="hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            O mě
          </Link>
          <Link
            href="/contact"
            className="hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
    <main className="flex-grow container mx-auto p-4">{children}</main>
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        © {new Date().getFullYear()} Lukáš Černohous
      </div>
    </footer>
  </div>
);

export default Layout;
