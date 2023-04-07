export const dishColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "dish",
      headerName: "Dish",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.dishname}
          </div>
        );
      },
    },
    {
      field: "describle",
      headerName: "Describe",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const dishRows = [
    {
      id: 1,
      dishname: "Hamburger",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "Stocking",
      describle: "4/5 start",
      price: "30.000vnd",
      quantity: 24

    },
    {
      id: 2,
      dishname: "Taco",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      describle: "3/5 start",
      status: "Out of stock",
      price: "20.000vnd",
      quantity: 0
    },
    {
      id: 3,
      dishname: "Chicken fried",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      describle: "4.5/5 start",
      status: "Stocking",
      price: "50.000vnd",
      quantity: 13
    },
  ];
  