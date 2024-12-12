import Image from "next/image";
import Link from "next/link";

const AuthorView = ({
  img,
  name,
  date,
}: {
  img: string;
  name: string;
  date: string;
}) => {
  return (
    <div className="px-4 flex items-center justify-between border-y border-[var(--pallet-3)] py-2">
      <div className="flex items-center justify-start gap-x-2">
        <Image
          src={img || "/fallback.jpg"}
          alt="Author Image"
          width={40}
          height={40}
          className="object-contain rounded-full"
        />
        <div className="flex flex-col items-start justify-start gap-y-0">
          <span className="text-black text-xs">Author</span>
          <Link
            href={"/author/" + encodeURIComponent(name)}
            className="text-[var(--pallet-3)] hover:text-[var(--pallet-3)] text-sm"
          >
            {name}
          </Link>
        </div>
      </div>
      <div className="flex items-start justify-start flex-col">
        <span className="text-xs  text-black">Date</span>
        <time className="text-black font-semibold text-sm">{date}</time>
      </div>
    </div>
  );
};

export default AuthorView;
