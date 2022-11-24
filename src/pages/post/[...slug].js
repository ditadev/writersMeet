import { useRouter } from "next/router";


const Slug = props =>{

    const router = useRouter();
    
    console.log({router});

    return (
        <div>
            <h1>Slug</h1>
        </div>
    );
}

export default Slug;