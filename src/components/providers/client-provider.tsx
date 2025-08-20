'use client';

import { useEffect } from 'react';
import '@/lib/i18n';

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Any client-side initialization can go here
  }, []);

  return <>{children}</>;
}
