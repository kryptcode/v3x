import Arrow from "../custom/Arrow"

const Main = () => {
  return (
    <div className="md:flex-[6] md:w-full w-[90%] mx-auto flex flex-col justify-center ">
        <div className="w-full">
            <h2 className="text-xl md:text-4xl font-bold underline">
                CONTACT
            </h2>
            <div className="pt-6 flex flex-col space-y-4  md:w-[85%]  justify-between md:text-lg">
                <div className="flex md:space-x-8">
                    <span className="font-semibold  md:text-2xl flex-1 tracking-wide">
                        MAIL
                    </span>
                    <span className="flex items-start space-x-3 flex-1">
                        <Arrow />
                        <a href="mailto: adeyombokehd@gmail.com" target="_blank">
                        adeyomkehd@gmail.com
                        </a>
                    </span>
                </div>

                <div className="flex md:space-x-8 md:text-lg pb-44 md:pb-0">
                    <span className="font-semibold md:text-2xl tracking-wide flex-1">
                        ON THE INTERNET
                    </span>
                    <div className="flex flex-col space-y-5 underline flex-1">
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