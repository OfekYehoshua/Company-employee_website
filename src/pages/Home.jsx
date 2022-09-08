import ResponsiveAppBar from "../components/Navbar"
import MultiActionAreaCard from "../components/Publication"
import Blog from "../components/Blog"
import ActionBarComponentProps from "../components/calander"

const Home = () => {
    return(
        <div>
            <ResponsiveAppBar/>
            <h1>home</h1>
            <ActionBarComponentProps/>
            <Blog></Blog>
            <MultiActionAreaCard/>
        </div>
    )
}

export default Home