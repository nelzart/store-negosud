import Head from 'next/head'
import Image from 'next/image'
import Template_Page from '../components/layouts/template-page'
import Filter from '../components/Filter'
import Card from '../components/Card'
import Cart from '../components/Cart'
import Button from '../components/Button'
import ButtonCTA from '../components/ButtonCTA'

export default function Home() {
  return (
    <>
      {/* <Template_Page>
        <Filter></Filter>
        <Card></Card>
        <Cart></Cart>
      </Template_Page> */}

      <div className="flex flex-wrap md items-center h-screen">
      <div className="bg-[#4F0F15] w-full md:w-1/2 h-screen">
        <div className="mx-32">
          <h1 className="text-6xl text-[#B98F50] font-bold mt-16">Negosud</h1>

          {/* =country region island
          <div className="flex mt-16 font-light text-gray-500">
            <div className="pr-4">
              <span className="uppercase">Country</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">Japan</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Region</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">Kanto</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">island</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">Honshu</p>
            </div>
          </div> */}

          {/* <!-- description --> */}
          <div
            className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm"
          >
            Negosud est un negociant en vin qui à ouvert au public son enseigne pour la degustation
          </div>
            
          <Button href="Super bouton de la mort" text="voir nos produits" />
          <ButtonCTA href="Super bouton de la mort" text="Payer" />
          
        </div>
      </div>
      <div className="text-[#B98F50] w-full md:w-1/2 h-screen">
        <img
          src="https://www.eulerhermes.fr/blog/marche-vin-2019/_jcr_content/root/stage/stageimage.img.82.1920.jpeg/1607008165899/marche-vin-2019.jpeg"
          className="h-screen w-full object-cover"
          alt=""
        />
      </div>
    </div>
    </>
  )
}
