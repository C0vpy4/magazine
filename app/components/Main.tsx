import Tittle from "./pages/Tittle";
import Facts from "./pages/Facts";
import Products from "./pages/Products";
import Map from "./pages/Map";
import Footer from "./pages/Footer";

export default function Main(){
    return(
        <div className="flex flex-col gap-[64px] max-h-screen">
        <Tittle />
        <Facts />
        <Products />
        <Map />
        <Footer />
      
        </div>
    )
}