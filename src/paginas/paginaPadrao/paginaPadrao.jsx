import { Outlet } from "react-router-dom";
import Banner from "../../components/banner/banner";

export default function PaginaPadrao (){
    return(
        <>
        <Banner></Banner>
        
        <Outlet/>
        </>
    )
}