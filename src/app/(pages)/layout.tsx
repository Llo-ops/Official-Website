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
    {name: "Home", href: "/home"},
    {name: "Projects", href: "/projects"},
    {name: "About", href: "/about"},
    {name: "Contact", href: "/contact"},
  ]
  
  const [open, setOpen] = useState(false);
  
  return (
    <html>
      <body>
        <div className="layout-flex-wrapper">
          <section className="header-frame">
            <div className='navbar'>
              <ul>
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li>
                      <Link
                        href={link.href} 
                        key={link.name} 
                        className={`nav-links ${isActive ? "active-nav-link" : ""}`}
                        >
                          {link.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>

          {pathname === "/home" ? (
            <section className="mid-section-home">
              {children}
              <div className="bottom-portion-home">
                <button className='contact-btn'>
                  <Phone className='quick-icon' size={24} />
                  <span>Contact Me</span>
                </button>
                <div className="socials-home">
                  <button className='fb'>
                    <FacebookIcon className='quick-icon' size={24}/>
                    <span>Facebook</span>
                  </button>
                  <button className='github'>
                    <GithubIcon className='quick-icon' size={24}/>
                    <span>Github</span>
                  </button>
                  <button className='li'>
                    <LinkedinIcon className='quick-icon' size={24}/>
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>
            </section>
          ): (
            <div className="mid-section">
              {children}
              <div className="cloud-frame">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
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