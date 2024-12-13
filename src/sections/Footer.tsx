import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vaibhav-nayan'
  },
  {
    title: 'Github',
    href: 'https://github.com/vaibhav-nayan/'
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/vaibhav_nyn_/'
  },
  {
    title: 'codeforces',
    href: 'https://codeforces.com/profile/codekaronayan'
  },
]

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className='absolute h-[400px] w-[1400px] bottom-0 left-1/2
      -translate-x-1/2 bg-emerald-300/30 
  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col 
        md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>
            &copy;Vaibhav Nayan 2024. All rights reserved.
          </div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link)=>(
              <a target="_blank" rel="noopener noreferrer" href={link.href} key={link.title} className='inline-flex items-center gap-1.5 cursor-pointer'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};
