import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      combo: "Combo 1",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      include: "Taco, Chicken, Pepsi, Fried-Rice",
      discount: "21%",
      quantity: 78,
      price: "84.000vnd",
      status: "Stocking",
    },
    {
      id: 2,
      combo: "Combo 2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      include: "Taco, Chicken, Pepsi",
      discount: "15%",
      quantity: 25,
      price: "73.000vnd",
      status: "Out of stock",
    },
    {
      id: 3,
      combo: "Combo 3",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      include: "Chicken, Pepsi",
      discount: "27%",
      quantity: 11,
      price: "44.000vnd",
      status: "Out of stock",
    },
    {
      id: 4,
      combo: "Combo 4",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      include: "Chicken, Pepsi, Fried-Rice",
      discount: "18%",
      quantity: 43,
      price: "59.000vnd",
      status: "Stoking",
    },
    {
      id: 5,
      combo: "Combo 5",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      include: "Taco, Pepsi, Fried-Rice",
      discount: "11%",
      quantity: 785,
      price: "77.000vnd",
      status: "Stoking",
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Combo</TableCell>
            <TableCell className="tableCell">Includes</TableCell>
            <TableCell className="tableCell">Discount</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.combo}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.include}</TableCell>
              <TableCell className="tableCell">{row.discount}</TableCell>
              <TableCell className="tableCell">{row.quantity}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
