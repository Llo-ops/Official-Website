'use client'

import Link from 'next/link';
import { useState } from 'react';
import '@/app/sass/main/style.scss';

export default function PagesLayout({
  children,
}: {
  children : React.ReactNode,
}) {
  const navigationLinks = [
    {name: "HOME", href: "/home"},
    {name: "PROJECTS", href: "/projects"},
    {name: "ABOUT", href: "/about"},
    {name: "CONTACT", href: "/contact"},
  ]
  
  const [open, setOpen] = useState(false);

  return (
    <html>
      <body>
        <div className="layout-flex">
          <section className="header-frame">
            <div className='navbar'>
              {navigationLinks.map((link) => {
                return (
                  <Link
                    className='nav-text-style'
                    href={link.href} key={link.name}>
                      {link.name}
                  </Link>
                )
              })}
            </div>
          </section>
          <div className='children-page'>{children}</div>

          <section className="footer-frame">
            <div className="footer-year">
              <p>· 2025 ·</p>
            </div>
            <div className="footer-spacer">

            </div>
            <div className="footer-right-group">
              <div className="name">
                <p>GEROME GEISLER TEJIDA</p>
              </div>
              <span>·</span>
              <div className="credits">
                <button>CREDITS</button>
              </div>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}