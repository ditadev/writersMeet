const Login = props => {
    return (
        <main class="form-signin w-100 m-auto">
        <form>
          <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Writersmeet emblem" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div className="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    );
}

export default Login;