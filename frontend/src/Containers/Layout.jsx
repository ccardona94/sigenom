import '../styles/layout.css'

import {Navbar} from '../Containers/Navbar'
import {Sidebar} from '../Containers/Sidebar'

export const Layout = ({children}) => {
  return (
    <div className='page_content'>
      <Sidebar/>
      <div className="page_container">
        <Navbar/>
        <main className='page_main'>
          {children}
        </main>
      </div>
    </div>
  )
}
