import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaInstagram, FaMusic, FaSpotify, FaYoutube } from "react-icons/fa";

const page = async ({ params }: { params: Promise<{name:string}> }) => {
  const { name } = await params;

  return (
    <div className="flex min-h-[90dvh] flex-col items-center justify-center p-4 ">
      <div className="w-full max-w-[680px] mx-auto px-4 py-8 flex flex-col items-center backdrop-blur-md bg-black/10 rounded-lg shadow-lg">
        {/* Profile Section */}
        <Avatar className="h-24 w-24 mb-4 ring-4 ring-white shadow-md">
          <AvatarImage alt="Profile" />
          <AvatarFallback className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white text-xl">
            {name}
          </AvatarFallback>
        </Avatar>

        <h1 className="text-xl font-bold mb-1 text-center">{name}</h1>
        <p className="text-sm text-gray-600 mb-6 text-center max-w-xs">
          Digital Artist | Musician | Composer
        </p>

        {/* Links Section - Linktree style */}
        <div className="w-full space-y-3 mb-8">
          <Link
            href={`https://opener.one/insta/4jm518`}
            rel="noopener noreferrer external"
            className="flex items-center gap-3 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-md shadow-sm transition-all hover:shadow hover:translate-y-[-2px] border border-gray-100"
          >
            <FaInstagram className="h-5 w-5 text-pink-500 flex-shrink-0" />
            <span>Instagram</span>
          </Link>

          <Link
            href="https://spotify.com"
            rel="noopener noreferrer external"
            className="flex items-center gap-3 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-md shadow-sm transition-all hover:shadow hover:translate-y-[-2px] border border-gray-100"
          >
            <FaSpotify className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span>Spotify</span>
          </Link>

          <Link
            href="https://appopener.com/yt/zcsxv682j"
            rel="noopener noreferrer external"
            className="flex items-center gap-3 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-md shadow-sm transition-all hover:shadow hover:translate-y-[-2px] border border-gray-100"
          >
            <FaYoutube className="h-5 w-5 text-red-500 flex-shrink-0" />
            <span>YouTube</span>
          </Link>

          <Link
            href="https://youtube.com"
            rel="noopener noreferrer external"
            className="flex items-center gap-3 w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-md shadow-sm transition-all hover:shadow hover:translate-y-[-2px] border border-gray-100"
          >
            <FaMusic className="h-5 w-5 text-red-500 flex-shrink-0" />
            <span>YT Music</span>
          </Link>
        </div>

        {/* Footer with branding - Linktree style */}
      </div>
    </div>
  );
};

export default page;
