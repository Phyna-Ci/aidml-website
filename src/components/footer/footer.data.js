import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';
import dribbble from 'assets/images/icons/dribbble.png';

export const menuItems = [
  {
    id: 2,
    title: 'Phone No.',
    items: [
      {
        path: '#!',
        label: '+234 814 989 2011',
      },
    ],
  },
  {
    id: 3,
    title: 'Address',
    items: [
      {
        path: '#!',
        label: '4621 Hill Croft Farm Road',
      },
    ],
  },
  {
    id: 4,
    title: 'Email',
    items: [
      {
        path: '#!',
        label: 'info@phyna-ci.com',
      },
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: '#!',
        icon: facebook,
        label: 'Facebook',
      },
      {
        path: '#!',
        icon: twitter,
        label: 'Twitter',
      },
      {
        path: '#!',
        icon: github,
        label: 'Github',
      },
      {
        path: '#!',
        icon: dribbble,
        label: 'Dribbble',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
