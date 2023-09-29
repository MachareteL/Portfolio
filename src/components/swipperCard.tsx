export default function SwipperCard({ imgsrc }: { imgsrc: string }) {
  return (
    <div className="relative w-full cursor-pointer overflow-hidden rounded-2xl bg-red-500 pb-14 pt-40 shadow-md shadow-black md:pt-72">
      <img
        src={imgsrc}
        alt=""
        className="absolute left-0 top-0 h-full w-full object-cover object-center transition-all hover:scale-105"
      />
    </div>
  );
}
