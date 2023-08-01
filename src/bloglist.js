import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = ( { blogs, title } ) => {


    return ( 
        <div className="bloglist">
            <h2>{ title }</h2>
            {
                blogs.map(blog => (
                    <div className="blog-preview py-[10px] px-[16px] my-[20px] mx-0 border-b-2 border-[#FAFAFA] hover:shadow-[1px_3px_5px_rgba(0,0,0,0.1)]" key={blog.id} >
                        <div className="blog">
                            <Link to={ `/blogs/${ blog.id }` }>
                                <h2 className="text-[20px] text-[#f1356d] mb-[8px]">{ blog.title }</h2>
                                <p>Written by { blog.author }</p>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Bloglist;