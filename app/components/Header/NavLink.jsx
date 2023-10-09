const { default: Link } = require("next/link")

const NavLink = ({ href, title }) => {
    return(
        <Link href={href} className='navLinkButton block py-2 pl-3 pr-4 text-[#ADB7BE] text-xl sm:text-xl rounded md:p-0 hover:text-white'>
            {title}
        </Link>
    )
}

export default NavLink;