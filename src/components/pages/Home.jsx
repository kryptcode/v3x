import { Cursor } from "react-creative-cursor"
import 'react-creative-cursor/dist/styles.css';


import Main from "../Home/Main"
import Sections from "../Home/Sections"
import Sidebar from "../Home/Sidebar"

function Home() {

    return (
      <>
      {/* <Particle />  */}
      <Cursor isGelly={true} />
      <div data-cursor-size="20px" data-cursor-exclusion style={{backgroundColor: '#fff'}}  className='h-screen w-full flex flex-col md:flex-row justify-between md:space-x-8 px-4'>
        <Sidebar />
        <Main />
        <Sections />
      </div>
      </>
    )
  }
  
  export default Home