import Head from 'next/head'
import Image from 'next/image'
import Template_Page from '../components/layouts/template-page'
import Filter from '../components/Filter'
import Card from '../components/Card'
import Cart from '../components/Cart'
import Button from '../components/Button'
import ButtonCTA from '../components/ButtonCTA'
import Description from '../components/Description'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      {/* <Template_Page>
        <Filter></Filter>
        <Card></Card>
        <Cart></Cart>
      </Template_Page> */}

      <div className="flex flex-wrap items-center h-screen">
        
        <div className="bg-[#4F0F15] flex items-center p-10 w-full xl:w-1/2 h-full md:p-0 ">
          
          <div className="container md:mx-32 sm:mx-10 h-full sm:pt-20 flex flex-col items-center sm:w-full sm:h-full">
            
            <img src='logo_negosud.svg' alt='' width={450} min-width={400} className=""/>

            <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel nunc vitae ante dignissim hendrerit. Curabitur sem odio, interdum nec congue at, lacinia sed nulla. Pellentesque pretium massa dolor, in convallis arcu placerat ac. Sed ut gravida lorem. Aenean ac lectus ut dolor laoreet maximus et nec urna. Integer dignissim vestibulum vehicula."/> 
            <Link href="/produits">
            
              <a>
              <Button text="Voir nos produits"/>                      
                
              </a>
                        
            </Link>

          </div>

        </div>
        
        <div className="text-[#B98F50] xl:w-1/2 h-screen hidden xl:inline">
          <img
            src="https://www.eulerhermes.fr/blog/marche-vin-2019/_jcr_content/root/stage/stageimage.img.82.1920.jpeg/1607008165899/marche-vin-2019.jpeg"
            className="h-screen w-full object-cover"
            alt=""
          />
        </div>
        <div id="demo"></div>
    </div>

    </>
  )
}
