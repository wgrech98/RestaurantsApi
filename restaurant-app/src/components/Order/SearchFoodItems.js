import React, { useState, useEffect } from "react";
import { ENDPOINTS, createAPIEndpoint } from "../../api";
import {
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  makeStyles,
} from "@material-ui/core";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import PlusOneTwoToneIcon from "@mui/icons-material/PlusOneTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

const useStyles = makeStyles((theme) => ({
  searchPaper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "auto",
  },
  searchInput: {
    marginLeft: theme.spacing(1.5),
    flex: 1,
  },
  listRoot: {
    marginTop: theme.spacing(1),
    maxHeight: 450,
    overflow: "auto",
    "& li:hover": {
      cursor: "pointer",
      backgroundColor: "#E3E3E3",
    },
    "& li:hover .MuiButtonBase-root": {
      display: "block",
      color: "#000",
    },
    "& .MuiButtonBase-root": {
      display: "none",
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "transparent",
    },
  },
}));
export default function SearchFoodItems(props) {
  const { values, setValues } = props; //addFoodItem is a function that is passed as a prop from the parent component
  let OrderedFoodItems = values.orderDetails; //this is the array of food items that are already added to the order
  const [foodItems, setFoodItems] = useState([]);
  const [searchList, setSearchList] = useState([]); // [ {id: 1, title: "title1"}, {id: 2, title: "title2"}
  const [searchKey, setSearchKey] = useState("");
  const classes = useStyles();
  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.FOODITEM)
      .fetchAll()
      .then((res) => {
        setFoodItems(res.data);
        setSearchList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let x = [...foodItems];
    x = x.filter((y) => {
      return (
        y.foodItemName.toLowerCase().includes(searchKey.toLocaleLowerCase()) &&
        OrderedFoodItems.every((item) => item.foodItemId !== y.foodItemId)
      );
    });
    setSearchList(x);
  }, [searchKey, OrderedFoodItems]); // whenever the searchKey or OrderedFoodItems state variable changes, the useEffect hook is triggered

  const addFoodItem = (foodItem) => {
    let x = {
      orderMasterId: 0,
      orderDetailId: 0,
      foodItemId: foodItem.foodItemId,
      quantity: 1,
      foodItemPrice: foodItem.price,
      foodItemName: foodItem.foodItemName,
    };

    setValues({
      ...values,
      orderDetails: [...values.orderDetails, x], //pass all the exisiting values except the orderDetails array
    });
  };

  return (
    <>
      <Paper className={classes.searchPaper}>
        <InputBase
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)} //whenever the user types something in the search box, the value of the searchKey state variable is updated
          className={classes.searchInput}
          placeholder="Search food items"
        />
        <IconButton>
          <SearchTwoToneIcon />
        </IconButton>
      </Paper>
      <List className={classes.listRoot}>
        {searchList.map((item, idx) => (
          <ListItem key={idx} onClick={(e) => addFoodItem(item)}>
            <ListItemText
              primary={item.foodItemName}
              secondary={"$" + item.price}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={(e) => addFoodItem(item)}>
                <PlusOneTwoToneIcon />
                <ArrowForwardIosTwoToneIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
}
