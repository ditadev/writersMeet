import { useRouter } from "next/router";

export const getStaticPaths =  () => {
    return {
        paths : [
          { 
             params : {
                postid: '5'
            }
        },
        { 
            params : {
               postid: '10'
           }
        }
        ],
        fallback: true
    }
}

export const getStaticProps = async ({params}) => {

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
    const jsonPost = await post.json();

    return {
        props: {
            post: jsonPost || null
        },
        revalidate: 3

        }
    }

const Postdetails = ({
    post
}) => {

    const router = useRouter();
     
    if(router.isFallback)
    {
        return <h1>Loading...</h1>
    }
    
    return (
        <div>
               <h1>{post.title}</h1>
                < p > {post.body}</p >
        </div>
    );
}

export default Postdetails;