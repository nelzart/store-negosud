export default function Button(props) {
    console.log(props)
    return (
        // <a href={props.dorian}>{props.coucou}</a>
        <div>
            <button className="p-2 pl-5 pr-5 bg-transparent border-2 border-[#B98F50] text-[#B98F50] text-lg rounded-lg transition-colors duration-700 transform hover:bg-[#B98F50] hover:text-[#4F0F15]" href={props.href}>{props.text}</button>
        </div>
    )
}

