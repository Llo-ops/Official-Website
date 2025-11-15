'use client'

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import '@/app/sass/main/style.scss';

import { 
  FacebookIcon, 
  GithubIcon, 
  LinkedinIcon, 
  Phone, 
  ArrowRightToLine } from 'lucide-react';

export default function PagesLayout({
  children,
}: {
  children : React.ReactNode,
}) {

  const pathname = usePathname();

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
        <div className="layout-flex-wrapper">
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

          {pathname === "/home" ? (
            <section className="mid-section-home">
              {children}
              <div className="bottom-portion-home">
                <button>
                  <Phone size={24} />
                  <span>Contact Me</span>
                </button>
                <div className="socials-home">
                  <button>
                    <FacebookIcon size={24}/>
                    <span>Facebook</span>
                  </button>
                  <button>
                    <GithubIcon size={24}/>
                    <span>Github</span>
                  </button>
                  <button>
                    <LinkedinIcon size={24}/>
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>
            </section>
          ): (
            <div className="mid-section">
              {children}
            </div>
          )}

          <section className="footer-frame">
            <div className="footer-year">
              <p>· 2025 ·</p>
            </div>
            <div className="footer-spacer">

            </div>
            <div className="footer-right-group">
              <div className="name">
                <p>NAME</p>
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