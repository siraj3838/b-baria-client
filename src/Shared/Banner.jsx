
const Banner = () => {
    return (
        <div className="my-10 px-5 lg:px-0">
            <div className="grid grid-cols-1 items-center md:grid-cols-3">
                <img src="https://i.ibb.co/nrh7swt/333049764-224860166578283-4542832206066744696-n-removebg-preview.png" className="lg:w-96 hover:scale-110 transition-all" />
                <div className="text-center lg:text-left hover:scale-110 transition-all">
                    <h1 className="lg:text-3xl font-extrabold italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text">Our Big Hearted Doner</h1>
                    <p className="py-6 italic font-medium bg-gradient-to-r from-green-500 to-yellow-700 text-transparent bg-clip-text">Donate blood not to harm someone but to save someone life. Some of your blood will restore another life. Keep the world healthy Donate blood to save others life</p>
                </div>
                <img src="https://i.ibb.co/k59CnS4/343320439-1277626303186666-663409152920561427-n-removebg-preview.png" className="lg:w-96 hover:scale-110 transition-all" />
            </div>
        </div>
    );
};

export default Banner;