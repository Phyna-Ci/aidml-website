import headerData from 'components/header/header.data';

export const menuItems = [
  {
    id: 3,
    title: 'Quick Links',
    items: [...headerData, {
      path: '/privacy-policy',
      label: 'Privacy Policy',
    }],
  },
];
