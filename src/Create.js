import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ author, setAuthor ] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/Blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            // history.go(-1);
            history.push("/");
        })
    }

    return ( 
        <div className="create max-w-[400px] my-0 mx-auto text-center">
            <h2 className="text-[20px] text-[#f1356d] mb-[30px]">Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label className="text-left block">Blog title:</label>
                <input
                    className="w-full py-[6px] px-[10px] my-[10px] mx-0 border-[1px] border-[#ddd] box-border block"
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                />
                <label className="text-left block">Blog body:</label>
                <textarea
                    className="w-full py-[6px] px-[10px] my-[10px] mx-0 border-[1px] border-[#ddd] box-border block"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className="text-left block">Blog author:</label>
                <select
                    className="bg-white w-full py-[6px] px-[10px] my-[10px] mx-0 border-[1px] border-[#ddd] box-border block"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button className="bg-[#f1356d] text-white p-[8px] rounded-[8px] cursor-pointer">Add Blog</button>}
                {isPending && <button className="bg-[#f1356d] text-white p-[8px] rounded-[8px] cursor-pointer">Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;