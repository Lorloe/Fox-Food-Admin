import "./dataCartTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { cartColumns, cartRows } from "../../dataCartTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datacartstable = () => {
  const [data, setData] = useState(cartRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/carts/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datacarttable">
      <div className="datacarttableTitle">
        Add New cart
        <Link to="/carts/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={cartColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datacartstable;
