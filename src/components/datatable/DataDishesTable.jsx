import "./dataDishTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { dishColumns, dishRows } from "../../dataDishTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datadishestable = () => {
  const [data, setData] = useState(dishRows);

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
            <Link to="/dishes/test" style={{ textDecoration: "none" }}>
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
    <div className="datadishestable">
      <div className="datadishestableTitle">
        Add New dish
        <Link to="/dishes/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={dishColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datadishestable;
