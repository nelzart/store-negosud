import Footer from "./Footer"
import Header from "./Header"
import Filter from "../Filter"

export default function layout({children}){
    return (
        <>
            <Header></Header>
            <Filter></Filter>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}