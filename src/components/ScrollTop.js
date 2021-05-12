import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollTop = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathName]);
  return null;
};

export default ScrollTop;
