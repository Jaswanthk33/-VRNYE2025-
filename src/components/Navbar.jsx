// import { appleImg, bagImg, searchImg } from '../utils';
// import { navLists } from '../constants';

// const Navbar = () => {
//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
//       <nav className="flex w-full screen-max-width">
//         <img src={appleImg} alt="Apple" width={14} height={18} />

//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
//               {nav}
//             </div>
//           ))}
//         </div>

//         <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
//           <img src={searchImg} alt="search" width={18} height={18} />
//           <img src={bagImg} alt="bag" width={18} height={18} />
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar

import { appleImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* Apple logo */}
        <img src="public/assets/images/logo.png" alt="logo" width={70} height={90} />

        {/* Navigation links */}
        {/* <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div> */}

        {/* Login Button */}
        {/* <div className="flex max-sm:justify-end max-sm:flex-1">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-all">
            Login
          </button>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
