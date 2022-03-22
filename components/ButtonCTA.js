export default function ButtonCTA(props) {
    console.log(props)
    return (
        // <a href={props.dorian}>{props.coucou}</a>
        <div>
            <button className="p-2 pl-5 pr-5 text-lg rounded-lg transition-colors duration-700 transform bg-[#B98F50] text-[#4F0F15]" href={props.href}>{props.text}</button>
        </div>
    )
}