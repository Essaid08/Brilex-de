import locationbrilex from '../../assets/brilex-ouzin.png'

const Location = () => {
    return (
        <section className="location-bg w-full py-14 flex justify-center  px-16 max-md:px-6 ">
            <div className=" scroll-effect-scale bg[#F9F7F7] max-w-[1580px] w-full h-fit flex justify-center flex-col gap-2 ">
                <div className=" mx-auto z-30 text-center mb-7">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4  relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DBE2EF] to-[#F9F7F7]">Brilex Adress</span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#DBE2EF] to-[#F9F7F7]"></span>
                    </h1>
                    <p className="text-[18px] text-[#F9F7F7] ">
                    49, Zone de dépôt El Haddada 18000 Jijel, Algérie
                    </p>
                </div>
                <img
                    className="h-[480px] max-md:h-80"
                    src={locationbrilex}
                    alt="BrilexLocation"
                />
                {/*<img
                    className="h-72"
                    src="/src/assets/brilex-ouzin.jpg"
                    alt="brilex-pub" />*/}
            </div>
        </section>
    )
}

export default Location