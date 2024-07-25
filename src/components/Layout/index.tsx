import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import AccordionItem from '../AccordionItem';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    router.push('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h2 className="text-lg font-bold">Gerenciador de contatos</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/home" className="block px-4 py-2 hover:bg-blue-600">Início</a>
            </li>
            <AccordionItem title="Grupos">
              <ul>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-600">Criar</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-600">Listar</a>
                </li>
              </ul>
            </AccordionItem>
            <li>
              <button onClick={handleLogout} className="w-full text-left block px-4 py-2 hover:bg-blue-600">Logout</button>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;