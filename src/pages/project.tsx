const Project = () => {
  return (
    <div className="flex flex-row w-full p-4 m-4 items-stretch justify-center gap-4 border border-red-300">
      <div className="border border-gray-300 w-2/3 p-4">
        متن
      </div>

      <div className="flex flex-col w-2/3 gap-4">
        <div className="border border-gray-300 grow p-4 text-center">
          عکس بزرگ
        </div>
        
        <div className="flex flex-row gap-4 h-24">
          <div className="border border-gray-300 flex-1">عکس ۱</div>
          <div className="border border-gray-300 flex-1">عکس ۲</div>
          <div className="border border-gray-300 flex-1">عکس ۳</div>
        </div>
      </div>
    </div>
  )
}

export default Project
