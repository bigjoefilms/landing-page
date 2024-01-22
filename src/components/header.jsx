import React , {useState} from "react";
import Ham from "../assets/ham";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[80px] w-full  border-[#605e5e] p-3 lg:pl-[54px] lg:pr-[100px] px-[30px] flex items-center justify-between">
      <div className=" font-semibold text-[24px] ">Scho0ls</div>
      <div className="lg:hidden flex cursor-pointer" onClick={toggleMenu}>
        <Ham />
      </div>
      <div   className={`lg:hidden flex ${isOpen ? 'block' : 'hidden'} w-[350px] h-full absolute  right-0 top-0 bg-[#fff] px-[50px] py-[40px] flex-col items-start`}>
        <div className="flex items-center justify-between w-full">
        <div className=" font-semibold text-[20px] ">Schools</div>
        <div className="text-[34px] font-medium cursor-pointer" onClick={toggleMenu}>x</div>
        

        </div>
       
        
        <ul className=" gap-[40px] flex-col flex items-start mt-[50px] ">
             
          <li className="cursor-pointer ">Services</li>
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Contact us</li>
          <li className="cursor-pointer">Blog</li>
          <button className="bg-[#ecec69] h-[44px] w-[180px] rounded-md mt-[10px]">
            Join Community
          </button>
        </ul>
      </div>
      <ul className=" items-center justify-center gap-[40px] lg:flex hidden">
        <li className="cursor-pointer ">Services</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Contact us</li>
        <li className="cursor-pointer">Blog</li>
        <button className="bg-[#ecec69] h-[44px] w-[180px] rounded-md mt-[10px]">
            Join Community
          </button>
      </ul>
    </div>
  );
};
