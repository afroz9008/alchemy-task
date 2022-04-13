import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";
import { AddCircleOutline, Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Creators as ProductDuck } from "../store/products";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
  },
}));

export default function Products() {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(ProductDuck.deleteProduct(id));
  };
  
  const handleDeleteItems = (ids) => {
    dispatch(ProductDuck.deleteProducts(ids));
  };

  const options = {
    filter: true,
    print: false,
    viewColumns: false,
    download: false,
    pagination: false,
    customToolbar: () => (
      <IconButton onClick={() => navigate("/add-product")}>
        <AddCircleOutline />
      </IconButton>
    ),
    onRowsDelete: ({ data }) => {
      const ids = data.map((a) => {
        const item = products[a.dataIndex];
        return item.id;
      });
      handleDeleteItems(ids)
      return false;
    },
  };

  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        display: "excluded",
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "category",
      label: "Category",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "desc",
      label: "Description",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "expiryDate",
      label: "Expiry Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "price",
      label: "Cost Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "discount",
      label: "Discount",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "sellPrice",
      label: "Sell Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (_, { rowData }) => {
          console.log(rowData);
          const data = products.find((a) => a.id === rowData[0]);
          return (
            <div className={classes.flex}>
              <IconButton
                onClick={() => navigate("/edit-product", { state: data })}
              >
                <Edit />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleDeleteItem(data.id)}
              >
                <Delete />
              </IconButton>
            </div>
          );
        },
      },
    },
  ];

  return (
    <div>
      <MUIDataTable
        title={"Products"}
        data={products}
        columns={columns}
        options={options}
      />
    </div>
  );
}
