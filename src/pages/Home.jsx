import ResponsiveAppBar from "../components/Navbar"
import MultiActionAreaCard from "../components/Publication"
import Blog from "../components/Blog"

const Home = () => {
    return(
        <div>
            <ResponsiveAppBar/>
            <h1>home</h1>
            <Blog></Blog>
            <MultiActionAreaCard/>
        </div>
    )
}

export default Home