import Image from 'next/image'; // image that is lazy loaded by default
import HeaderItem from './HeaderItem';

// icons
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

export default function Header() {
  return (
    // column initially. direction row in sm screens and above, align items center.
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map(({ title, icon }, key) => (
          <HeaderItem title={title} icon={icon} key={key} />
        ))}
      </div>

      <Image
        className="object-contain"
        src="/hulu-white.png"
        width={200}
        height={100}
      />
    </header>
  );
}

const headerItems = [
  {
    title: 'HOME',
    icon: HomeIcon,
  },
  {
    title: 'TRENDING',
    icon: LightningBoltIcon,
  },
  {
    title: 'VERIFIED',
    icon: BadgeCheckIcon,
  },
  {
    title: 'COLLECTIONS',
    icon: CollectionIcon,
  },
  {
    title: 'SEARCH',
    icon: SearchIcon,
  },
  {
    title: 'ACCOUNT',
    icon: UserIcon,
  },
];
