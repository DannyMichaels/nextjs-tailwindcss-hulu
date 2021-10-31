import { useCallback } from 'react';
import { useRouter } from 'next/router';
import requests from '../utils/requests';

export default function Nav() {
  const router = useRouter();

  const onNavItemClick = useCallback((key) => {
    router.push(`/?genre=${key}`);
  }, []);

  return (
    <nav className="relative">
      {/* padding on x axis (px) */}
      {/* spacing of 10 on x axis with space-x (each item) */}
      <div
        className="flex px-10 sm:px-20 text-2xl
       whitespace-nowrap space-x-10 sm:space-x-20
       overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => onNavItemClick(key)}
            key={key}
            // last h2 gets padding right of 24
            className="last:pr-24 cursor-pointer
            transition duration-100 transform hover:scale-125
            hover:text-white active:text-red-500">
            {title}
          </h2>
        ))}
      </div>

      <Fade />
    </nav>
  );
}

const Fade = () => (
  // we only defined the from color, so the to color is automatically transparent
  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
);
