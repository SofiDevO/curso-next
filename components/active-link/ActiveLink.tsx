'use client'
import React from "react";
import Link from "next/link";
import style from "./ActiverLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
  key: string;
}

const ActiveLink = ({ path, text, key }: Props) => {
 const pathName =  usePathname();
  return (
    <>
      <li key={key}>
        <Link className={`${style.link} ${(pathName === path &&  style["active-link"])}`}   href={path}>
          {text}
        </Link>
      </li>
    </>
  );
};

export default ActiveLink;
