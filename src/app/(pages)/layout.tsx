'use client'

import Link from 'next/link';
import '@/app/sass/main/style.scss';

export default function PagesLayout({
  children,
}: {
  children : React.ReactNode,
}) {
  const navigationLinks = [
    {name: "Home", href: "/home"},
    {name: "Projects", href: "/projects"},
    {name: "About", href: "/about"},
    {name: "Contact", href: "/contact"},
  ]
  
  return (
    <html>
      <body>
        <div className='nav-header'>
          {navigationLinks.map((link) => {
            return (
              <Link href={link.href} key={link.name}>{link.name}</Link>
            )
          })}
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}