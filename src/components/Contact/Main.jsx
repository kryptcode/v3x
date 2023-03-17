import Arrow from "../custom/Arrow"

const Main = () => {
  return (
    <div className="md:flex-[6] md:w-full w-[90%] mx-auto flex flex-col justify-center ">
        <div className="pr-32 md:pr-72 pb-32 md:pb-0">
            <h2 className="text-4xl font-bold">
                CONTACT
            </h2>
            <div className="h-[2px] bg-gradient-to-r w-full md:w-[85%] from-purple-500 to-pink-500 my-4" />
            <div className="pt-6 flex flex-col space-y-8 md:space-y-0 md:flex-row  md:w-[85%]  justify-between text-xl">
                <div className="flex space-x-24 md:space-x-8">
                    <span className="font-semibold text-2xl tracking-wide">
                        MAIL
                    </span>
                    <span className="flex items-start space-x-3">
                        <Arrow />
                        <a href="mailto: adeyombokehd@gmail.com" target="_blank">
                        adeyomkehd@gmail.com
                        </a>
                    </span>
                </div>

                <div className="flex space-x-8">
                    <span className="font-semibold text-2xl tracking-wide">
                        ON THE INTERNET
                    </span>
                    <div className="flex flex-col space-y-5 underline">
                        <span className="flex items-start space-x-3">
                            <Arrow />
                            <a href=''>
                            Twitter
                            </a>
                        </span>
                        <span className="flex items-start space-x-3">
                            <Arrow />
                            <a href="https://github.com/kryptcode" target='_blank'>
                            Github
                            </a>
                        </span>
                        <span className="flex items-start space-x-3">
                            <Arrow />
                            <span>
                            LinkedIn
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main