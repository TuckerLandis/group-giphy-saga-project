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
import DeleteIcon from '@material-ui/icons/Delete';

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
      console.log(imageData);
    dispatch({
        type: 'REMOVE_FAVORITE',
        payload: imageData.id
    })

  }

  return (
    <div className="card">
      <div className="image-div">
        <h2>Category: {imageData.category}</h2>
        <img src={imageData.url} alt="searched GIF" width="300px"></img>
      </div>
        <FormControl className={classes.formControl} required>
          <InputLabel id="demo-simple-select-label">
            Category
          </InputLabel>
          <Select value={selectState} onChange={handleChange}>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      
      <div className="button-div">
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}

export default FavoriteItem;
