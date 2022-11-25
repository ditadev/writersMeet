import Link from "next/link";
import Head from "next/head";



const Navigation = props => {
    return (
        <div>
            <Head>
                <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet" />
            </Head>
            <div className="container">
                <header className="blog-header lh-1 py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <Link href="/profile"> <a className="link-secondary">ditadev</a></Link>
                           
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href={`/`}>WRITERSMEET</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                            </a>
                            <Link href="/signup">  <a className="btn btn-sm btn-outline-secondary user-login-btn" >Sign up</a> </Link>
                            <Link href="/signin">  <a className="btn btn-sm btn-outline-secondary user-login-btn" >Sign in</a> </Link>
                                
                        </div>
                    </div>
                </header>

                <style jsx>
                    {`
                     .bd-placeholder-img {
                        font-size: 1.125rem;
                        text-anchor: middle;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;
                      }
                
                      @media (min-width: 768px) {
                        .bd-placeholder-img-lg {
                          font-size: 3.5rem;
                        }
                      }
                      .user-login-btn{
                        margin : 0px 5px;
                      }
                    `}
                </style>
            </div>

        </div>
    );
}

export default Navigation;