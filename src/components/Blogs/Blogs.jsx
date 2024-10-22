import { useEffect } from "react";


const Blogs = () => {
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <p>Lorem, ipsum.</p>
        </div>
    );
};

export default Blogs;