import Navigation from "../navigation"
const Layout = ({
    children
}) => {
    return (
        <div>
          <Navigation></Navigation>
            {children}
            </div>
            );
}

            export default Layout;