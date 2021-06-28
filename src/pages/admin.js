import { navigate } from 'gatsby';

export default function Admin() {
  navigate('https://trojakwoodcraft.admin.datocms.com/', { replace: true });
  return null;
}
