export const NavItems = [
  { path: '/', title: 'Home' },
  { path: '/projects', title: 'Our Work' },
  { path: '/about', title: 'About Us' },
  {
    title: "Talent",
    path: "#",
    children: [
      { title: "Action", path: "#" },
      { title: "Another action", path: "#" },
      { title: "Dropdown Submenu", path: "#" },
      { title: "404 Page", path: "/404" },
    ],
  },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "Media",
    path: "/media",
  },
  {
    title: "Hall of fame",
    path: "/hall-of-fame",
  },
];