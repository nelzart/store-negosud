export default function Template_Page(props) {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="flex basis-1/5 bg-blue-500">
                    {props.children[0]}
                </div>
                <div className="flex flex-auto justify-center bg-red-500 min-h-500">
                    {props.children[1]}
                </div>
                <div className="flex basis-1/5 bg-green-500 sm:hidden 2xl:inline-flex">
                    {props.children[2]}
                </div>
            </div>

        </>
    )
}