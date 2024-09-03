import Footer from "../Composants/Footer/Footer"
import Navbar from "../Composants/Navbar/Navbar"
import Sidebar from "../Composants/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom';

const LayoutDashboard = () => {

    return <div className="">
        <div className="fixed top-0 h-screen">
            {/* sidebar */}
            <Sidebar />



            <div className={`relative h-screen w-screen`}>
                <div className=" ml-72">
                    <Navbar />

                    <main className=''>
                        <div className="p-6 h-screen">
                            <Outlet />
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        </div>


    </div>
}


export default LayoutDashboard