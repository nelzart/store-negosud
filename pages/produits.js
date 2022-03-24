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
import {useState, useEffect} from 'react'


export default function Produits() {    
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const data = fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
        .then(result => result.json())
        .then(setPosts)
    }, [])
    
    return(
        
            <div className="bg-[#4F0F15] h-full w-[full] flex justify-center">
                <div className="w-[70%]">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    
                    {posts.map(post =>        
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-white">
                            <div className="flex items-end justify-end"> 
                                <div className="h-56 w-full bg-cover object-cover bg-center"> <img className="h-56 w-full object-cover" src={post.url}/>
                                </div>
                                <button className="absolute p-2 rounded-full bg-[#4F0F15] border-4 border-white text-white mx-5 -my-5 hover:bg-[#9D1D2B]">
                                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">                                            
                                        </path>
                                    </svg>
                                </button>                            
                            </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">
                                {post.title}  
                            </h3>
                            <span className="text-gray-500 mt-2">
                                $12
                            </span>
                        </div>
                        
                    </div>
                    )}
                </div> 
            </div>       </div>          
        )
    }