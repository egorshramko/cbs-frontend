import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CinemaData } from "../movies/lib/CinemaData";
import ListSubheader from "@mui/material/ListSubheader";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ListCheckbox from "./ListCheckbox";

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

export default function CinemasFilterSelect({ 
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