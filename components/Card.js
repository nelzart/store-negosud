export default function Card() {
    return(
        <div className="max-w-[18rem] rounded border-2 border-black overflow-hidden hover:shadow-2xl shadow-blue-700">
            <img className="w-full max-h-60 object-cover" src="https://via.placeholder.com/288" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2">title</h4>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor 
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}