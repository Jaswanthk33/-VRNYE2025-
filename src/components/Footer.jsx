import React from 'react'
import { footerLinks, socials } from '../constants'
import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
        {/* <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Vibrant Entertainments. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> |</span>
                )}
              </p>
            ))}
          </div>
        </div> */}
      {/* </div> */}
      {/* <div className="flex items-center gap-4">
          <a 
            href="https://instagram.com/your-handle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <Instagram size={20} />
            <span className="text-xs">Follow us on Instagram</span>
          </a>
          
          <a 
            href="https://wa.me/your-number" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <Phone size={20} />
            <span className="text-xs">Contact us on WhatsApp</span>
          </a>
        </div> */}
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} Vibrant Entertainments.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={20} height={20} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer