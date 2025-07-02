import { Link } from "react-router"
function Header(){
    return(
        <>
            <div className="bg-primary h-fit mt-5">
                <ul className="flex justify-center items-baseline *:m-5 *:text-gray-300 *:hover:text-zinc-400 *:cursor-pointer *:transition-all *:uppercase">
                    <li>Projects</li>
                    <li>contact</li>
                </ul>
            </div>
        </>
    )
}
export default Header