import { useEffect, useState } from "react";

const Banner = ({ menu }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="banner">
      <div className="background" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}></div>
      <div className="text">
        <h1 style={{ transform: `translateX(-${offsetY * 1.5}px)`, opacity: `${1 - offsetY / 230 }` }}>{menu}</h1>
        <h5 style={{ transform: `translateX(-${offsetY * 0.8}px)`, opacity: `${1 - offsetY / 290 }` }} >Where all our great things begin</h5>
      </div>
    </div>
  );
};

export default Banner;
