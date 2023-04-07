import "./listOrders.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataOrdersTable from "../../components/datatable/DataOrdersTable"

const Listorders = () => {
  return (
    <div className="listOrder">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataOrdersTable/>
      </div>
    </div>
  )
}

export default Listorders