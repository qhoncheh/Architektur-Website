

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-100 p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2 items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#d991c2] animate-bounce" />
          <div className="w-4 h-4 rounded-full bg-[#9869b8] animate-bounce delay-150" />
          <div className="w-4 h-4 rounded-full bg-[#6756cc] animate-bounce delay-300" />
        </div>
        <span className="text-sm text-gray-300">  Loading . . . </span>
      </div>
    </div>
  );
};

export default Loading;
