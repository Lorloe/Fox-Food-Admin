import "./listCarts.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataCartsTable from "../../components/datatable/DataCartsTable"

const Listcarts = () => {
  return (
    <div className="listCart">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataCartsTable/>
      </div>
    </div>
  )
}

export default Listcarts