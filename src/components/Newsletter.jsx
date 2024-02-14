
export const Newsletter = () => {
    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 flex justify-center items-center flex-col lg:items-start">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="lg:mt-10">
                    <div className="gap-4 flex items-center">
                        <input type="email" placeholder="Enter email.." className="p-3 flex w-full rounded-md text-primary outline-none" />
                        <button className="bg-secondary w-[200px] rounded-md font-bold my-6 py-3 text-primary hover:scale-105 duration-300">
                            Notify me
                        </button>
                    </div>
                    <p className="md:text-start text-center">We care bout the protection of your data. Read our <a href="#" className="text-secondary underline" target="_blank">Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    )
}
