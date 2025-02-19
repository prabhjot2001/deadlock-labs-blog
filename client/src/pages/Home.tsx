import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <h1 className="text-bold">Home</h1>
      <Link to={`/`}>Home</Link>
      <Link to={`/projects`}>projects</Link>
      <Link to={`/dashboard`}>dashboard</Link>
      <Link to={`/sign-in`}>sign in</Link>
      <Link to={`/sign-up`}>sign up</Link>
      <Link to={`/about`}>about</Link>
    </div>
  )
}

export default Home