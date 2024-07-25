import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const Users = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/');
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (!authenticated) {
    return <>Loading...</>;
  }

  return (
    <Layout>
      <h1 className="text-2xl">Usuários</h1>
    </Layout>
  );
};

export default Users;