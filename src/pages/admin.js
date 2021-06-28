import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Admin() {
  const isBrowser = typeof window === 'object';

  useEffect(() => {
    if (!isBrowser) return null;
    return () => cleanup();
  }, []);

  navigate('https://trojakwoodcraft.admin.datocms.com/', { replace: true });
  return null;
}
