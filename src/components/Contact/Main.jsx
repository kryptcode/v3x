const Main = () => {
  return (
    <div className="flex-[6] flex flex-col justify-center ">
        <div className="pr-72">
            <h2 className="text-8xl font-bold space-span">
                CONTACT
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 my-4" />
            <div className="pt-6 flex  justify-between text-xl">
                <div className="flex space-x-8">
                    <span className="font-semibold text-2xl tracking-wide">
                        MAIL
                    </span>
                    <span>
                        adey@gmail.com
                    </span>
                </div>

                <div className="flex space-x-8">
                    <span className="font-semibold text-2xl tracking-wide">
                        ON THE INTERNET
                    </span>
                    <div className="flex flex-col space-y-5 underline">
                        <span>
                            instagam
                        </span>
                        <span>
                            github
                        </span>
                        <span>
                            linkedIn
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main