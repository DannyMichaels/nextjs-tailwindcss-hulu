export default function HeaderItem({ icon: Icon, title }) {
  return (
    // xs w-12, sm w-20
    <div
      className="flex flex-col items-center cursor-pointer group
    w-12 sm:w-20 hover:text-white">
      {/* h-8: height of 8 */}
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />

      {/* opacity 0 initially, then when group is hovered it's 100% */}
      {/* tracking widest is for letter spacing https://tailwindcss.com/docs/letter-spacing */}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}
