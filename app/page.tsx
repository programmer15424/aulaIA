'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const AppComponent = dynamic(() => import('../app.jsx'), { ssr: false });

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Cargando...</p>
    </div>;
  }

  return <AppComponent />;
}
