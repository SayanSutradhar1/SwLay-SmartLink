const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full h-[10dvh] border-t-[0.5px] border-t-white/10 backdrop-blur-lg text-black">
      <div className="">
        © {new Date().getFullYear()} John Doe
      </div>
      <div className="flex items-center gap-1 text-xs ">
        <span>Powered by</span>
      </div>
    </div>
  );
};

export default Footer;
