export default function ButtonCTA(props) {
    console.log(props)
    return (
        // <a href={props.dorian}>{props.coucou}</a>
        <div>
            <button className="p-2 pl-5 pr-5 text-lg rounded-lg duration-700 transition-all bg-[#B98F50] text-[#4F0F15] shadow hover:shadow-xl" 
            href={props.href}>{props.text}</button>
        </div>
    )
}