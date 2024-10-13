import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./Dialog"
import { TbClockHour4Filled } from "react-icons/tb";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import locationBrilex from '../../assets/brilex-ouzin.png'

const BrilexDetails = () => {

    const handleHraderCopy = (headerType) => {
        const text = document.getElementById(headerType).innerText
        navigator.clipboard.writeText(text).then(() =>
            toast(headerType === 'header-num' ? 'Brilex Phone number copied to clipboard'
                : "Brilex adress copied to clipboard")).catch(err =>
                    console.error('Failed to copy text: ', err)
                )
    }

    return (
        <>
            <ToastContainer theme="light" position="bottom-right" autoClose={2500} />
            <div className='grid gap-11  grid-cols-1 md:grid-cols-2 w-full py-5  bg-[#DBE2EF]  flex-col  px-16 max-md:px-8 max-w-[1580px]'>
                <div className='flex flex-col items-center'>
                    <FaLocationDot size={42} color="#112D4E" />
                    <h2 className="text-lg md:text-xl text-[#112D4E] pl-2 my-2 border-l-4  font-sans font-bold border-[#3F72AF]">
                        <AlertDialog className="">
                            <AlertDialogTrigger>49, Zone de dépôt El Haddada, Jijel, Algeria </AlertDialogTrigger>
                            <AlertDialogContent className="bg-[#F9F7F7] text-[#112D4E]">
                                <AlertDialogHeader>
                                    <AlertDialogTitle className='flex items-center gap-2 font-bold  text-[#112D4E]'>
                                        <FaLocationDot size={32} color="#112D4E" />49, Zone de dépôt El Haddada, Jijel, Algeria
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <img src={locationBrilex} alt="" />
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </h2>
                </div>
                <div className='flex flex-col items-center'>
                    <FaPhone size={42} color="#112D4E" />
                    <h2
                        onClick={() => handleHraderCopy("header-num")}
                        id="header-num"
                        className="text-lg md:text-xl cursor-pointer text-[#112D4E] pl-2 my-2 border-l-4  font-sans font-bold border-[#3F72AF]">
                        034 47 91 60
                    </h2>
                </div>
                <div className='flex flex-col items-center'>
                    <MdAttachEmail size={42} color="#112D4E" />
                    <h2
                        onClick={() => handleHraderCopy("header-mail")}
                        id="header-mail"
                        className="text-lg md:text-xl text-[#112D4E] pl-2 my-2 border-l-4 cursor-pointer  font-sans font-bold border-[#3F72AF]">
                        dg@brilex-dz.com
                    </h2>
                </div>
                <div className='flex flex-col items-center'>
                    <TbClockHour4Filled size={42} color="#112D4E" />
                    <h2 className="text-lg md:text-xl text-[#112D4E] pl-2 my-2 border-l-4  font-sans font-bold border-[#3F72AF]">
                        <AlertDialog className="">
                            <AlertDialogTrigger>Nos Horaires </AlertDialogTrigger>
                            <AlertDialogContent className="bg-[#F9F7F7] text-[#112D4E]">
                                <AlertDialogHeader>
                                    <AlertDialogTitle className='flex font-bold items-center gap-2'>
                                        <TbClockHour4Filled size={32} color="#112D4E" />Horaires
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <div className="flex justify-between items-center mt-2">
                                            <h3 className="font-semibold text-base">
                                                Lundi
                                            </h3>
                                            <p className="text-base font-normal">
                                                09:00 - 17:00
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <h3 className="font-semibold text-base">
                                                mardi
                                            </h3>
                                            <p className="text-base font-normal">
                                                09:00 - 17:00
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <h3 className="font-semibold text-base">
                                                mercredi
                                            </h3>
                                            <p className="text-base font-normal">
                                                09:00 - 17:00
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <h3 className="font-semibold text-base">
                                                jeudi
                                            </h3>
                                            <p className="text-base font-normal">
                                                09:00 - 12:00
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <h3 className="font-semibold text-base">
                                                vendredi
                                            </h3>
                                            <p className="text-base font-normal">
                                                FERMÉ
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <h3 className="font-semibold text-base">
                                                samedi
                                            </h3>
                                            <p className="text-base font-normal">
                                                09:00 - 17:00
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <h3 className="font-semibold text-base">
                                                dimanche
                                            </h3>
                                            <p className="text-base font-normal">
                                                09:00 - 17:00
                                            </p>
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default BrilexDetails