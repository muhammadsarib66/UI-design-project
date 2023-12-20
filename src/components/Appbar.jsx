import React from 'react'
import Button from './common/Button'
import Popover from './common/Popover';

const Appbar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const handleOpenNav = () => {
    setOpenDrawer(!openDrawer)
  }
  const handleLogin = ()=>{
    setLogin(!login)
  }
  return (

      <>
      <div className=' md:hidden flex justify-between items-center'>
      <div className='font-bold text-4xl '>
            <p>Tech</p>
            <p>Hub</p>
        </div>
          <div className='text-4xl cursor-pointer' onClick={handleOpenNav}>
          <i class="fa-solid fa-bars"></i>
          </div>
      </div>
{/* /// for medium to large screen   */}
    <div className='hidden  md:flex justify-between md:justify-around items-center'>
        <div className='font-bold text-4xl md:text-5xl'>
            <p>Tech</p>
            <p>Hub</p>
        </div>

<div className='md:flex hidden gap-10 font-semibold  md:text-2xl'>
    <p> Find a Mentor <i class="fa-solid fa-chevron-down"></i></p>
    <p> Find a Mentor <i class="fa-solid fa-chevron-down"></i></p>

</div>
{login ?
    <Popover/>
  :
  <div className="flex gap-4 ">
    <Button onclick={handleLogin} btnText="Login" style="font-medium bg-white border-black rounded-md  " />
    <Button btnText="Register" style=" text-white font-semibold bg-black border-black rounded-md " />
  </div>
  }
    </div>
    {/* /////// for click drawer open //  */}
    <div
        className={`  ${ 
          openDrawer ? "top-24 duration-500" : "top-[-1000%] duration-1000"
        } flex flex-col  items-center justify-center gap-4 md:hidden  bg-slate-300  left-0    h-72 w-[100%]  absolute `}
      >
    <p className='  font-medium  text-xl'> Find a Mentor <i class="fa-solid fa-chevron-down"></i></p>
    <p className='  font-medium  text-xl'> Find a Mentor <i class="fa-solid fa-chevron-down"></i></p>

    <Button btnText="Login" style="font-medium bg-white border-black rounded-md  " />
    <Button btnText="Register" style=" text-white font-semibold bg-black border-black rounded-md " />
     </div>
    </>

  )
}

export default Appbar