import { navigate } from 'gatsby';
import React from 'react';

export default function AdminPage() {
  navigate('https://trojakwoodcraft.admin.datocms.com/', { replace: true });
  return null;
}
