import { Link } from "react-router-dom";

const Navbar = () => {

    const handleClick = () => {
        document.querySelectorAll(".link").forEach(element => {
            element.classList.toggle("hidden");
        });
    }

    return ( 
        <nav className="navbar p-[20px] flex sm:items-center max-w-[600px] my-0 mx-auto border-b-2 border-[#F2F2F2]">
            <h1 className="text-[#f1356d]">The Dojo Blog</h1>
            <div className="links ml-auto p-[6px] flex flex-col items-end sm:flex-row text-right">
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer mb-4 sm:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <Link className="link hidden sm:block ml-[16px] border-r-4 border-[#f1356d] sm:border-none pr-2 sm:pr-0 mb-2 sm:mb-0 hover:text-[#f1356d]" to="/">Home</Link>
                <Link className="link hidden sm:block ml-[16px] border-r-4 border-[#f1356d] sm:border-none pr-2 sm:pr-0 hover:text-[#f1356d]" to="/create">New Blog</Link>
            </div>
        </nav>
     );
}

export default Navbar;