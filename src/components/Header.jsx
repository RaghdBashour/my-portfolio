import { Link } from "react-router"
function Header(){
    return(
        <>
            <div className="bg-primary h-fit">
                <ul className="flex justify-center items-baseline *:m-5 *:text-gray-300 *:hover:text-zinc-400 *:cursor-pointer *:transition-all *:uppercase">
                    <li>Projects</li>
                    <li className="text-2xl hover:border-b-white  border-b-3"><Link to='/'>Raghd bashour</Link></li>
                    <li>contact</li>
                </ul>
            </div>
        </>
    )
}
export default Header