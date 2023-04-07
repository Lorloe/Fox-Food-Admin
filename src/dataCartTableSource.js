export const cartColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
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
  export const cartRows = [
    {
      id: 1,
      username: "Vũ Công Thành",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      dishname: "Hamburger",
      quantity: 5,
      price: "150.000vnd"
    },
    {
      id: 2,
      username: "Lê Viết Khả Thi",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      dishname: "Hamburger",
      quantity: 2,
      price: "60.000vnd"
    },
  ];
  