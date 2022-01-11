const Navbar = () => {
    return (
<div className="z-10 h-10 lg:h-max navbar lg:bg-transparent text-black min-w-full lg:container lg:px-10">
  <div className="flex-1 px-2 mx-2">
    <span className="text-2xl font-bold">
            Youth+ Tech
          </span>
  </div> 
  <div className="flex-none hidden px-2 mx-2 lg:flex">
    <div className="flex items-stretch">
      <a className="btn btn-ghost btn-sm rounded-btn">
              Trang chủ
      </a> 
      <a className="btn btn-ghost btn-sm rounded-btn">
              Tin tức
      </a> 
      <a className="btn btn-ghost btn-sm rounded-btn">
              Projects
      </a> 
      <a className="btn btn-ghost btn-sm rounded-btn">
              About us
      </a>
    </div>
  </div> 
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg>
    </button>
  </div>
</div>

    )
}

export default Navbar