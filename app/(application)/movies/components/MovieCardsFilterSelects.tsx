import { Box, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { genres } from "../lib/genres";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


const MenuProps = {
  slotProps: {
    paper: {
      style: {
        maxHeight: 300,
        width: 180
      }
    }
  }
}

function ListCheckbox({ isSelected }: { isSelected: boolean }) {
  if (isSelected) {
    return (
      <CheckBoxIcon fontSize="small" color="primary"
        style={{ marginRight: 8, padding: 9, boxSizing: 'content-box' }} />
    );
  }
  else {
    return (
      <CheckBoxOutlineBlankIcon fontSize="small" color="primary"
        style={{ marginRight: 8, padding: 9, boxSizing: 'content-box' }} />
    );
  }
}

//Раскрывающийся список фильтрации жанров
function GenresSelect({selectedGenres, onChange }: {selectedGenres: Array<string>, onChange: (genres: string[]) => void}) {

  function handleChange(event: SelectChangeEvent<typeof selectedGenres>) {

    const oldSelect = selectedGenres;

    //приводим event.target.value к string[]
    const newSelect = typeof event.target.value === 'string' ? [ event.target.value ] : event.target.value; 

    console.log("old genres");
    console.log(oldSelect);

    console.log("new genres");
    console.log(newSelect);

    //вычисляем добавленный элемент (последний активированный)
    const lastAddedItem: string = newSelect.filter(item => !oldSelect.includes(item))[0];

    //вычисляем удаленный элемент (последний деактивированный)
    const lastRemovedItem: string = oldSelect.filter(item => !newSelect.includes(item))[0];

    console.log("Последний активированный элемент");
    console.log(lastAddedItem);

    console.log("Последний деактивированный элемент");
    console.log(lastRemovedItem);

    //lastAddedItem и lastRemovedItem должны быть взаимоисключающими. Если lastAddedItem = undefined, то lastRemovedItem != undefined и наоборот

    //Ситуация добавления элемента в список
    if (lastAddedItem !== undefined && lastAddedItem !== null) {

      //Если пользователь активировал "Выбрать все", то мы должны выбрать все жанры и добавить all
      //То же самое должно произойти, если пользователь выбрал обычный пункт, но стали выбраны все жанры
      if (lastAddedItem === "all" || lastAddedItem !== "all" && genres.every(genre => newSelect.includes(genre))) {
        onChange([...genres, "all"]);
      }

      //В ином случае просто передаем новый массив выбранных жанров
      else {
        onChange(newSelect);
      }

    }

    //Ситуация удаления элемента из списка
    else {

      //Если пользователь убрал отметку "Выбрать все", должны сброситься все жанры
      if (lastRemovedItem === "all") {
        onChange([]);
      }

      //Если пользователь убрал другой пункт, но была проставлена отметка "Выбрать все", 
      //то ее нужно убрать из отмеченных
      else if (newSelect.includes("all")) {

        onChange(newSelect.filter(item => item !== "all"));

      }

      //В ином случае просто передается новый массив
      else {
        onChange(newSelect);
      }

    }

  }

  function allIsSelected() {
    if (genres.every((genre) => selectedGenres.includes(genre))) {
      console.log("all genres selected");
      return true;
    }
    else {
      console.log("all genres not selected");
      return false;
    }
  }

  return (
    <Select
      sx={{
        maxHeight: 35,
        minWidth: 200,
        maxWidth: 200
      }}
      id="genres-filter-select"
      multiple
      displayEmpty
      value={ selectedGenres }
      renderValue={(value) => {
        if (genres.every((genre) => value.includes(genre))) {
          return "Все жанры";
        }
        if (value.length === 0) {
          return "Жанры не выбраны";
        }
        return value.join(", ");
      }}
      onChange={ handleChange }
      MenuProps={ MenuProps }
    >
      
      <MenuItem key="all" value="all">
        <ListCheckbox isSelected={ allIsSelected() } />
        <ListItemText primary="Выбрать все" />
      </MenuItem>

      {genres.map((genre) => {
        const selected = selectedGenres.includes(genre);

        return (
          <MenuItem key={genre} value={genre}>
            <ListCheckbox isSelected={ selected } />
            <ListItemText primary={ genre } />
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default function MovieCardsFilterSelects({ 
  selectedGenres, selectedCinemas, 
  onGenreFilterChange
} : { 
  selectedGenres: Array<string>, selectedCinemas: Array<string> ,
  onGenreFilterChange: (genres: string[]) => void
}) {

  return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "none",
          flexDirection: "row",
          gap: "10px"
        }}
      >
        <GenresSelect selectedGenres={ selectedGenres } onChange = { onGenreFilterChange } />
        <Select
          sx={{
            maxHeight: 35,
            minWidth: 180
          }}
          labelId="cinemas-filter-label"
          id="cinemas-filter-select"
          multiple
          value={[ "Все кинотеатры" ]}
        >
          <MenuItem value={"Все кинотеатры"}>Все кинотеатры</MenuItem>
          <MenuItem value={"Победа"}>Победа</MenuItem>
          <MenuItem value={"Аврора"}>Аврора</MenuItem>
        </Select>
      </Box>
  );
}