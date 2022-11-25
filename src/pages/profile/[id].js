export const getServerSideProps = async ({query})=>{
    const u = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`);
    const userResp = await u.json();

    return {
        props: {
            user: userResp || null
        }
    }
}

const Profile = ({user}) =>{
   
    if(!Object.keys(user).length){
        return <div>Invaliid user id</div>
    }
   
    return (
        <div className="container">
          {user.name} <br/>
          {user.email} <br/>
          {user.username}
        </div>
    );
}

export default Profile;