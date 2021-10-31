import Image from 'next/image'; // image that is lazy loaded by default

export default function Header() {
  return (
    <header className="">
      <Image
        className="object-contain"
        src="/hulu-white.png"
        width={200}
        height={100}
      />
    </header>
  );
}
