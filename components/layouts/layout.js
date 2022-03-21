import Footer from "./Footer"
import Header from "./Header"

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