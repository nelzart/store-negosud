import Footer from "./Footer"
import Header from "./Header"
import Filter from "../Filter"
import Card from "../Card"

export default function layout({children}){
    return (
        <>
            <Header></Header>

            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}