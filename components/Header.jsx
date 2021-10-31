import Image from 'next/image'; // image that is lazy loaded by default

export default function Header() {
  return (
    <header className="">
      <h1>header h1</h1>
      <Image src="/hulu-white.png" width={200} height={100} />
    </header>
  );
}
