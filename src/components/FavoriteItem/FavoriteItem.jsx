import { useDispatch } from "react-redux";
import { useState } from "react";

// Material-ui
import { ImageSearch } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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
  const dispatch = useDispatch();
  // Below allows us to use useStyles from above
  const classes = useStyles();
  // Local State to hold Select Value state
  const [selectState, setSelectState] = useState("");
  // Handle Change function
  const handleChange = (event) => {
    setSelectState(event.target.value);
    dispatch({ type: "UPDATE_FAVORITE_CATEGORY", payload: selectState});
    console.log(selectState)
  };

  return (
    <div>
      <h3>In FavoriteItem</h3>
      <img src={imageData.url} alt="searched GIF"></img>
      <FormControl className={classes.formControl} required>
        <InputLabel id="demo-simple-select-label">
          Set Favorite Category
        </InputLabel>
        <Select value={selectState} onChange={handleChange}>
          <MenuItem value={"funny"}>Funny</MenuItem>
          <MenuItem value={"cohort"}>Cohort</MenuItem>
          <MenuItem value={"cartoon"}>Cartoon</MenuItem>
          <MenuItem value={"nsfw"}>NSFW</MenuItem>
          <MenuItem value={"meme"}>Meme</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FavoriteItem;
