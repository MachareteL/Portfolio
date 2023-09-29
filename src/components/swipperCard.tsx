export default function SwipperCard({ imgsrc }: { imgsrc: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-red-500 pb-14 pt-40 md:pt-72 shadow-md shadow-black">
      <img
        src={imgsrc}
        alt=""
        className="absolute left-0 top-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}
