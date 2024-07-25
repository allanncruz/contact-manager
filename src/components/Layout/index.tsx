import { ReactNode } from 'react';
import { useRouter } from 'next/router';

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
              <a href="/users" className="block px-4 py-2 hover:bg-blue-600">Usuários</a>
            </li>
            <li>
              <a href="/groups" className="block px-4 py-2 hover:bg-blue-600">Grupos</a>
            </li>
            <li>
              <a href="/contacts" className="block px-4 py-2 hover:bg-blue-600">Contatos</a>
            </li>
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