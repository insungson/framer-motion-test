import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const navArr = [
    {
      url: "/basic",
      text: "Basic",
    },
    {
      url: "/variants",
      text: "Variants",
    },
    {
      url: "/gestures",
      text: "Gestures And Drag",
    },
    {
      url: "/motion",
      text: "MotionValues",
    },
    {
      url: "/scroll",
      text: "Scroll",
    },
    {
      url: "/svgAnimate",
      text: "SVGAnimage",
    },
    {
      url: "/animatePresence",
      text: "AnimatePresence",
    },
    {
      url: "/customSlider",
      text: "CustomSlider",
    },
    {
      url: "/layoutAnimate1",
      text: "LayoutAnimate1",
    },
    {
      url: "/layoutAnimate2",
      text: "LayoutAnimate2",
    },
  ];
  return (
    <div>
      <nav>
        <ul>
          {navArr.map((item, index) => (
            <li key={item.text}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
