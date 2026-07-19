import { Box, ListItemText, ListSubheader, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { genres } from "../lib/genres";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { CinemaData } from "../lib/CinemaData";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Fragment } from "react/jsx-runtime";


const MenuProps = {
  slotProps: {
    paper: {
      style: {
        maxHeight: 300,
        width: 220
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
        minWidth: 220,
        maxWidth: 220
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

function CinemasSelect({ 
  selectedCinemas, allCinemas, onChange 
} : { 
  selectedCinemas: Array<number>, allCinemas: Array<CinemaData>, 
  onChange: (cinemas: Array<number>) => void 
}) {
  
  const cinemaCities = allCinemas.map(cinema => cinema.city);
  const cinemaUniqueCities = cinemaCities.filter((city, index) => cinemaCities.indexOf(city) === index);
  
  function allIsSelected() {
    if (allCinemas.every((cinema) => selectedCinemas.includes(cinema.id))) {
      console.log("all cinemas selected");
      return true;
    }
    else {
      console.log("all cinemas not selected");
      return false;
    }
  }

  function renderDisplayValue(value: Array<number>) {

      if (allCinemas.every((cinema) => value.includes(cinema.id))) {
        return "Все кинотеатры";
      }
      if (value.length === 0) {
        return "Кинотеатры не выбраны"
      }

      //Преобразуем массив ID кинотеатров в их имена и возвращаем имена через запятую
      return value.map(cinemaId => {
        const cinema = allCinemas.find(cinema => cinema.id === cinemaId);
        if (cinema !== undefined && cinema !== null) {
          return cinema.name;
        }
        else {
          return "";
        }
      }).join(", ");
  }

  function handleCinemaSelectChange(event: SelectChangeEvent<typeof selectedCinemas>) {
    const oldSelect: number[] = selectedCinemas;

    //приводим event.target.value к number[]
    const newSelect: number[] = typeof event.target.value === 'string' ? [Number(event.target.value)] : event.target.value;

    console.log("old cinemas");
    console.log(oldSelect);

    console.log("new cinemas");
    console.log(newSelect);

    //вычисляем добавленный элемент (последний активированный)
    const lastAddedItem: number = newSelect.filter(item => !oldSelect.includes(item))[0];

    //вычисляем удаленный элемент (последний деактивированный)
    const lastRemovedItem: number = oldSelect.filter(item => !newSelect.includes(item))[0];

    console.log("Последний активированный элемент");
    console.log(lastAddedItem);

    console.log("Последний деактивированный элемент");
    console.log(lastRemovedItem);

    //lastAddedItem и lastRemovedItem должны быть взаимоисключающими. Если lastAddedItem = undefined, то lastRemovedItem != undefined и наоборот

    //Ситуация добавления элемента в список
    if (lastAddedItem !== undefined && lastAddedItem !== null) {

      //Если пользователь активировал "Выбрать все", то мы должны выбрать все кинотеатры и добавить 0 (ID пункта "Выбрать все")
      //То же самое должно произойти, если пользователь выбрал обычный пункт, но стали выбраны все кинотеатры
      if (lastAddedItem === 0 || lastAddedItem !== 0 && allCinemas.every(cinema => newSelect.includes(cinema.id))) {
        onChange([...allCinemas.map(cinema => cinema.id), 0]);
      }

      //В ином случае просто передаем новый массив выбранных жанров
      else {
        onChange(newSelect);
      }

    }

    //Ситуация удаления элемента из списка
    else {

      //Если пользователь убрал отметку "Выбрать все", должны сброситься все кинотеатры
      if (lastRemovedItem === 0) {
        onChange([]);
      }

      //Если пользователь убрал другой пункт, но была проставлена отметка "Выбрать все", 
      //то ее нужно убрать из отмеченных
      else if (newSelect.includes(0)) {

        onChange(newSelect.filter(item => item !== 0));

      }

      //В ином случае просто передается новый массив
      else {
        onChange(newSelect);
      }

    }
  }

  return (
    <Select
      sx={{
        maxHeight: 35,
        minWidth: 220,
        maxWidth: 220
      }}
      labelId="cinemas-filter-label"
      id="cinemas-filter-select"
      multiple
      displayEmpty
      value={ selectedCinemas }
      renderValue={ renderDisplayValue }
      onChange={ handleCinemaSelectChange }
      MenuProps={ MenuProps }
    >
      <MenuItem key={ 0 } value={ 0 }>
        <ListCheckbox isSelected={allIsSelected()} />
        <ListItemText primary="Выбрать все" />
      </MenuItem>
      {
        
        cinemaUniqueCities.flatMap((city) => [
          <ListSubheader 
            sx={{
              display: "flex",
              alignItems: "center"
            }} key={city}> 
            <PlaceOutlinedIcon fontSize="small" color="primary"
              style={{marginRight: 8, boxSizing: 'content-box' }} />
            {city} 
          </ListSubheader>   ,
          ...allCinemas.filter(cinema => cinema.city === city)
            .map((cinema) => {
              const selected = selectedCinemas.includes(cinema.id);

              return (
                <MenuItem key={ cinema.id } value={ cinema.id }> 
                  <ListCheckbox isSelected={ selected } />
                  <ListItemText primary={ cinema.name } />
                </MenuItem>
              );
            })
        ])

      }

    </Select>
  );
}

export default function MovieCardsFilterSelects({ 
  selectedGenres, selectedCinemas, 
  allCinemas,
  onGenreFilterChange,
  onCinemaFilterChange
} : { 
  selectedGenres: Array<string>, selectedCinemas: Array<number> ,
  allCinemas: Array<CinemaData>,
  onGenreFilterChange: (genres: string[]) => void,
  onCinemaFilterChange: (cinemas: Array<number>) => void
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
        <GenresSelect 
          selectedGenres={ selectedGenres } 
          onChange = { onGenreFilterChange } />
        <CinemasSelect 
          selectedCinemas={ selectedCinemas } 
          allCinemas={ allCinemas } 
          onChange = { onCinemaFilterChange } />
      </Box>
  );
}