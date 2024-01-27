import companylogo from '../assets/images/logo-white.svg';
import facebookLogo from '../assets/images/icon-facebook.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import pinterestLogo from '../assets/images/icon-pinterest.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';

const Footer = () => {
    return (
        <div className=' bg-emerald-900'>
            <div className='container flex flex-col items-center justify-between p-6 mx-auto md:flex-row'>
                <div className="flex flex-col space-y-3">
                    <img src={companylogo} alt="companylogo" />
                    <div className='flex justify-center space-x-3 p-5'>
                        <a>
                            <img src={facebookLogo} className='h-8' alt='' />
                        </a>
                        <a>
                            <img src={youtubeLogo} className='h-8' alt='' />
                        </a>
                        <a>
                            <img src={twitterLogo} className='h-8' alt='' />
                        </a>
                        <a>
                            <img src={pinterestLogo} className='h-8' alt='' />
                        </a>
                        <a>
                            <img src={instagramLogo} className='h-8' alt='' />
                        </a>
                    </div>
                </div> 
                <div className='flex flex-row space-x-32'>
                    <div className='flex flex-col space-y-3'>
                        <a>
                            Home
                        </a>
                        <a>
                            Pricing
                        </a>
                        <a>
                            Products
                        </a>
                        <a>
                            about
                        </a>
                    </div>
                    <div className='flex flex-col'>
                        <a>
                            Careers
                        </a>
                        <a>
                            Community
                        </a>
                        <a>
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='space-x-4'>
                        <input type='text' className='p-2 rounded-2xl' placeholder='Update in your inbox'/>
                        <button className='p-2'>Go</button>
                    </div>
                    <div className='pt-10'>
                        <p className=' text-sm text-white mx-auto'>Copyright © 2022, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;