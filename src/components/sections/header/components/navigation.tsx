interface Props {}

export function Navigation() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li className='px-4'>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </li>
        <li className='px-4'>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
        </li>
        <li className='px-4'>
          <a href="#career" className="hover:text-primary transition-colors">Work Experience</a>
        </li>
        <li className='px-4'>
          <a href="#contact" className="hover:text-primary transition-colors">Contacts</a>
        </li>
      </ul>
    </nav>
  )
}

//   const router = useRouter()
//   const currentHash = router.asPath.split('#')[1] || 'home'
//   <a 
//    href="#home"
//    className={`hover:text-primary transition-colors ${currentHash === 'home' ? 'text-primary font-medium' : ''}`}
//   ></a>