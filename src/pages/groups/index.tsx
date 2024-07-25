import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Groups = () => {
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
    <div>
      <h1 className="text-2xl">Groups</h1>
    </div>
  );
};

export default Groups;