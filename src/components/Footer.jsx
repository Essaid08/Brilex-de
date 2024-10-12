
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Separator } from './ui/Separater'

const Footer = () => {
    return (
        <footer className='w-full bg-[#112D4E] flex flex-col items-center '>
            <Separator className='bg-[#F9F7F7] ' />
            <div className="container py-9">
                <div className='flex items-center justify-center gap-11  max-md:gap-8 mb-8'>
                    <a href='https://www.instagram.com/gardencleanbrilexoriginal/' target='_blank' rel="noopener noreferrer">
                        <FaInstagram size={36} color="#DBE2EF" />
                    </a>
                    <a href='https://www.youtube.com/channel/UCpmxY_BzKiySS-YVL_iL28A' target='_blank' rel="noopener noreferrer">
                        <FaYoutube size={36} color="#DBE2EF" />
                    </a>
                    <a href='https://www.facebook.com/brilexoriginal' target='_blank' rel="noopener noreferrer">
                        <FaFacebook size={36} color="#DBE2EF" />
                    </a>
                    <a href='https://www.tiktok.com/@gardencleanbrilex' target='_blank' rel="noopener noreferrer">
                        <FaTiktok size={36} color="#DBE2EF" />
                    </a>
                </div>
                <div
                    className="p-4 text-center text-[#DBE2EF] ">
                    © 2024 Copyright: Brilex
                </div>
            </div>
        </footer>
    )
}

export default Footer