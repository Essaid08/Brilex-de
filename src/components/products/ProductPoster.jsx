import poster from '../../assets/bg1.png'

const HomePoster = () => {
    return (
        <article className=' bg-[#112D4E] mx-auto w-full  flex justify-center max-h-[450px] max-md:h-64'>
            <img src={poster} alt="poster" />
        </article>
    )
}

export default HomePoster