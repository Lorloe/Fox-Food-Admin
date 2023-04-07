import "./listDishes.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataDishesTable from "../../components/datatable/DataDishesTable"

const Listdishes = () => {
  return (
    <div className="listDish">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataDishesTable/>
      </div>
    </div>
  )
}

export default Listdishes