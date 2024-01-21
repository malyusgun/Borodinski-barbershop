'use client'

import SignInForm from "@/client/Profile/SignInForm";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
export default function Header() {
  const pathname = usePathname()
  let menu = [{name: "ГЛАВНАЯ", id: 11, url: '/'}, {name: "НАШИ РАБОТЫ", id: 22, url: '/ourarts'}, {name: "ЗАПИСАТЬСЯ", id: 33, url: '/signupfor'}, {name: "КОНТАКТЫ", id: 44, url: '/contacts'}, {name: "HTML ACADEMY", id: 55, url: '/htmlacademy'}]
  const [activeSignInForm, setActiveSignInForm] = useState(false)
  const [activeSignUpForm, setActiveSignUpForm] = useState(false)
  const [activePage, setActivePage] = useState('')
  const [activeMenu, setActiveMenu] = useState(false)
  useEffect(() => {
    let currentMenu = menu.find(i => i.url === pathname)
    setActivePage(() => {if (currentMenu) {
      return currentMenu.name
    } else return '/'})
  }, [pathname])
  return (
    <header className="bg-black relative z-50">
      <div className="_container pr-5 min-h-[70px] flex items-center justify-between max-sm:hidden">
        <ul className="min-w-[87%] lg:min-w-[73%] flex justify-between items-center">
          {menu.map(item => 
          <li key={item.id}>
            <Link className="menuheader__link lg:p-[30px] lg:ml-0" href={item.url}>
              <span className={clsx("relative after:content-[''] after:h-[3px] after:bg-[#826550] after:block after:absolute after:w-full after:-bottom-7 after:left-0", {
                'after:hidden': pathname !== item.url
              })}>{item.name}</span>
            </Link>
          </li>)}
        </ul>
        <button
          className="signin min-h-[70px] flex justify-center items-center transition-all duration-300 ease-linear hover:bg-white lg:min-w-[150px]" onClick={() => setActiveSignInForm(true)}
        >
          <div className="relative signin-images">
            <Image
              className="signin-image"
              src="/img/header/login-icon.svg"
              alt=""
              width="16"
              height="16"
            />
            <Image
              className="signin-image img-hover"
              src="/img/header/login-icon_hover.svg"
              alt=""
              width="16"
              height="16"
            />
            <Image
              className="signin-image img-active"
              src="/img/header/login-icon_active.svg"
              alt=""
              width="16"
              height="16"
            />
          </div>
          <span className="ml-5 uppercase text-white font-bold leading-snug transition-all duration-300 ease-linear login-text hidden lg:block">
            войти
          </span>
        </button>
      </div>
      <div className="_container sm:hidden">
        <div className="relative z-50 h-[85px] flex justify-center items-center bg-black -mx-[20px]">
          <div className="h-[30px]"><Image className="bg-bottom object-cover h-[30px]" src='/img/mainblock/logo.svg' alt="" width="226" height="30"/></div>
        </div>
        <div className="relative z-10 bg-[#826550] h-[50px] -mx-[20px] flex justify-center items-center">
          <p className="font-bold text-[18px] text-white leading-snug">{activePage}
            <button className="absolute right-0 top-0 w-[70px] h-[50px] flex justify-center items-center bg-[#6A4D38]" onClick={() => setActiveMenu(!activeMenu)}>
              <Image src={`/img/header/menu-button${activeMenu ? '-close' : ''}.svg`} alt='menu button' width={30} height={30}/>
            </button>
          </p>
        </div>
        <ul className={clsx("-mx-[20px] -mt-[300px] transition-all duration-500", {
          'translate-y-full': activeMenu
        })}>
          {menu.map(item => {
            return (
              <li key={item.id} className="relative w-full h-[50px] bg-[#826550] text-white uppercase font-bold shadow-[0_1px_0_0_#71543F] shadow-[0_1px_0_0_#886E5B_inset] after:content-[''] after:w-full after:h-[1px] after:bg-[#6A4D38] after:absolute after:bottom-0 after:left-0">
                <a className="inline-block w-full h-full pl-[20px] pt-[13px] leading-snug focus:opacity-30" href={item.url}>{item.name}</a>
              </li>
            )
          })}
          <li className="w-full h-[50px] bg-[#6A4D38] text-[18px] leading-snug pl-[20px] flex items-center text-white">
            <Image src='/img/header/login-icon.svg' width={16} height={16} alt='sign in image'/>
            <button className="pl-[24px] w-full h-full text-start -ml-[12px]" onClick={() => setActiveSignInForm(true)}>Войти</button>
          </li>
        </ul>
      </div>
      <SignInForm {...{activeSignInForm, setActiveSignInForm, setActiveSignUpForm}}/>
    </header>
  );
}
