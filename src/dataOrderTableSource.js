export const orderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "Username",
    width: 230,
  },
  {
    field: "dishname",
    headerName: "Dishname",
    width: 230,
  },

  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 190,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.price}`}>
          {params.row.price}
        </div>
      );
    },
  },
];
  
  //temporary data
  export const orderRows = [
    {
      id: 1,
      username: "Vũ Công Thành",
      dishname: "Hamburger",
      quantity: 5,
      price: "150.000vnd"
    },
    {
      id: 2,
      username: "Vũ Công Thành",
      dishname: "Taco",
      quantity: 3,
      price: "60.000vnd"
    },
    {
      id: 3,
      username: "Lê Viết Khả Thi",
      dishname: "Chicken",
      quantity: 5,
      price: "250.000vnd"
    },
  ];
  