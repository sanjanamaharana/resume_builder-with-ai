import React from 'react'

const Footer = () => {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
       `}</style>

      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-200/60 to-white mt-40">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <a href="#">
            <img src='/logo.svg' alt='logo' className='h-11 w-auto' />
          </a>
          <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-green-600 transition">Home</a></li>
              <li><a href="/" className="hover:text-green-600 transition">Support</a></li>
              <li><a href="/" className="hover:text-green-600 transition">Pricing</a></li>
              <li><a href="/" className="hover:text-green-600 transition">Affiliate</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-green-600 transition">Company</a></li>
              <li><a href="/" className="hover:text-green-600 transition">Blogs</a></li>
              <li><a href="/" className="hover:text-green-600 transition">Community</a></li>
              <li><a href="/" className="hover:text-green-600 transition">Careers<span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-1">We’re hiring!</span></a></li> 
              <li><a href="/" className="hover:text-green-600 transition">About</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-green-600 transition">Privacy</a></li>
              <li><a href="/" className="hover:text-green-600 transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
          <div className="flex items-center gap-4 mt-3">
            <a href="https://www.instagram.com/sanjana.maharana_" target="_blank" rel="noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lucide lucide-instagram size-5 hover:text-green-500">
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  />
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/sanjana-maharanana/" target="_blank" rel="noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lucide lucide-linkedin size-5 hover:text-green-500">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  />
            </svg>
        </a>
        <a href="https://x.com/KhusiSanjana" target="_blank" rel="noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lucide lucide-twitter size-5 hover:text-green-500">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
        <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer" className="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://github.com/sanjanamaharana" className="lucide lucide-github size-5 hover:text-green-500">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>

          </div>
          <p className="mt-3 text-center">© 2025 Resume Builder </p>
        </div>
      </footer>



    </>
  )
}

export default Footer
