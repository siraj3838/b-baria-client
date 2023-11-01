import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner";
import SecondBanner from "../Shared/SecondBanner";

const Home = () => {
    // const loadedData = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>B.Baria Blood Donate | Home</title>
            </Helmet>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;