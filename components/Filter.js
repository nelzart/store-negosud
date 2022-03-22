export default function Filter(){
    return(
        <filter>
            <ul>
                <li>filtre 1 <input type="checkbox" className="appearance-none checked:bg-blue-500"/></li>
                <li>filtre 2 <input type="checkbox"/></li>
                <li>filtre 3 <input type="checkbox"/></li>
            </ul>
        </filter>
    )
}