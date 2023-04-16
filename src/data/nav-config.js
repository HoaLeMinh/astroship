export const NavItems = [
  { path: '/', title: 'Home' },
  { path: '/projects', title: 'Our Work' },
  { path: '/about', title: 'About Us' },
  {
    title: "Features",
    path: "#",
    children: [
      { title: "Action", path: "#" },
      { title: "Another action", path: "#" },
      { title: "Dropdown Submenu", path: "#" },
      { title: "404 Page", path: "/404" },
    ],
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];