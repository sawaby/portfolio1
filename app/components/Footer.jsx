import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Bubble from './Bubble';
const Footer = () => {
	const date = new Date();
    // const months = {
    //     0: 'Jan',
    //     1: 'Feb',
    //     2: 'Mar',
    //     3: 'Apr',
    //     4: 'May',
    //     5: 'Jun',
    //     6: 'Jul',
    //     7: 'Aug',
    //     8: 'Sep',
    //     9: 'Oct',
    //     10: 'Nov',
    //     11: 'Dec',

    // }
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
  return (
    <div className="overflow-x-hidden">
      <div className="bottom-0 text-center border border-t-[#33353F] border-l-transparent border-r-transparent">
		
			<h5 className="text-xl font-semibold text-[#dcd6e1] my-2">Let&apos;s Connect</h5>
	
			<div className="mt-5 flex flex-row justify-center">
				<Link
				target="_blank"
				href="https://github.com/sawaby"
				rel="noopener noreferer"
				>
				<Image src={GithubIcon} alt="Github Icon" />
				</Link>
				<Link
				target="_blank"
				href="https://www.linkedin.com/in/maria-sawaby-nazehat/"
				rel="noopener noreferer"
				>
				<Image src={LinkedInIcon} alt="Linkedin Icon" />
				</Link>
				
			</div>
			<div className="text-slate-600 mt-[150px]">
				<p>&copy;Copyright {year}. All Rights Reserved. </p>
				
			</div>
		</div>
       
      </div>


	
  );
}; //   <footer className="bottom-0 mt-[100px] ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] border border-[#33353F]">
//       <div className='container p-12 flex flex-row justify-center'>
//         <Link target='_blank' href="https://github.com/sawaby" rel='noopener noreferer'>
//             <Image src={GithubIcon} alt='Github Icon' />
//         </Link>
//         <Link target='_blank' href="https://www.linkedin.com/in/maria-sawaby-nazehat/" >
//             <Image src={LinkedInIcon} alt='Linkedin Icon' />
//         </Link>
//     </div>
//  </footer>

export default Footer;
