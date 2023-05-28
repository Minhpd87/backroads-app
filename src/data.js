import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';
import img4 from './images/tour-4.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'About',
  },
  {
    id: 3,
    href: '#services',
    text: 'Services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
];

export const socialLink = [
  {
    id: 1,
    href: 'https://facebook.com',
    target: '_blank',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://twitter.com',
    target: '_blank',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    target: '_blank',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: 'august 26th, 2020',
    title: 'tibet adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    info: {
      location: 'China',
      duration: '6 Days',
      price: 'From $2100',
    },
  },
  {
    id: 2,
    img: img2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    info: {
      location: 'Indonesia',
      duration: '11 Days',
      price: 'From $1400',
    },
  },
  {
    id: 3,
    img: img3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    info: {
      location: 'Hong Kong',
      duration: '8 Days',
      price: 'From $5000',
    },
  },
  {
    id: 4,
    img: img4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    info: {
      location: 'Kenya',
      duration: '20 Days',
      price: 'From $3300',
    },
  },
];

export const footer = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#featured',
    text: 'featured',
  },
];
