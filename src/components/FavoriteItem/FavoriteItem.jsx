import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Material-ui
import { ImageSearch } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FavoriteItem({ imageData }) {
  // Below allows us to use useStyles from above
  const classes = useStyles();
  const dispatch = useDispatch();
  // Local State to hold Select Value state
  const [selectState, setSelectState] = useState("");
  // bring in categories
  const categories = useSelector((store) => store.categories);
  // Handle Change function
  const handleChange = (event) => {
    setSelectState(event.target.value);
    dispatch({ type: "UPDATE_FAVORITE_CATEGORY", payload: {value: event.target.value, id: imageData.id} });
    console.log(selectState);
  };
  useEffect(() => {
    dispatch({ type: "FETCH_CATEGORIES" });
  }, []);

  const handleDelete = () => {
<<<<<<< HEAD
      console.log(imageData);
    dispatch({
        type: 'REMOVE_FAVORITE',
        payload: imageData.id
    })

  }
=======
    console.log(imageData.url);
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: imageData.url,
    });
  };
>>>>>>> master

  return (
    <div>
      <img src={imageData.url} alt="searched GIF"></img>
      <FormControl className={classes.formControl} required>
        <InputLabel id="demo-simple-select-label">
          Set Favorite Category
        </InputLabel>
        <Select value={selectState} onChange={handleChange}>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Remove
      </Button>
    </div>
  );
}

export default FavoriteItem;
