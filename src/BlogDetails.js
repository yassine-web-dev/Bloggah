import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/Blogs/${id}`);
    const history = useHistory();
    
    const handleDelete = () => {
        fetch(`http://localhost:8000/Blogs/${blog.id}`, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2 className="text-[20px] text-[#f1356d] mb-[10px]">{ blog.title }</h2>
                    <span>By { blog.author }</span>
                    <p className="my-[20px] mx-0">{ blog.body }</p>
                    <button className="bg-[#f1356d] text-white p-[8px] rounded-[8px] cursor-pointer" onClick={ handleDelete }>delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetails;