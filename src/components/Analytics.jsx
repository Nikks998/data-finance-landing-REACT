import Laptop from "../assets/laptop.jpg"

export const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4 text-primary">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
                <div className="flex flex-col justify-center">
                    <p className="text-secondary font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p className="text-sm sm:text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur repellat autem totam, fuga tenetur voluptatibus! At quia, assumenda error voluptates cumque facilis dignissimos? Nulla, amet labore! Id, ad doloremque.</p>
                    <button className="bg-primary w-[200px] rounded-md font-bold my-6 py-3 text-secondary hover:scale-105 duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
