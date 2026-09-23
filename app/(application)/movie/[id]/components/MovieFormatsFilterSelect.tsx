import ListCheckbox from "@/app/(application)/components/ListCheckbox";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

export default function MovieFormatsFilterSelect({
  selectedFormats,
  formats,
  onChange
} : {
  selectedFormats: Array<string>,
  formats: Array<string>,
  onChange: (formats: string[]) => void
}) {

  function handleChange(event: SelectChangeEvent<typeof selectedFormats>) {
    const oldSelect: string[] = selectedFormats;

    //приводим event.target.value к string[]
    const newSelect: string[] = Array.isArray(event.target.value) ? event.target.value : [ event.target.value ];

    console.log("old formats");
    console.log(oldSelect);

    console.log("new formats");
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

      //Если пользователь активировал "Выбрать все", то мы должны выбрать все форматы и добавить "all" (ID пункта "Выбрать все")
      //То же самое должно произойти, если пользователь выбрал обычный пункт, но стали выбраны все форматы
      if (lastAddedItem === "all" || lastAddedItem !== "all" && formats.every(format => newSelect.includes(format))) {
        onChange([...formats, "all"]);
      }

      //В ином случае просто передаем новый массив выбранных жанров
      else {
        onChange(newSelect);
      }

    }

    //Ситуация удаления элемента из списка
    else {

      //Если пользователь убрал отметку "Выбрать все", должны сброситься все кинотеатры
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
    if (formats.every((format) => selectedFormats.includes(format))) {
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
      value={selectedFormats}
      renderValue={(value) => {
        if (formats.every((format) => value.includes(format))) {
          return "Все форматы";
        }
        if (value.length === 0) {
          return "Форматы не выбраны";
        }
        return value.join(", ");
      }}
      onChange={ handleChange }
      MenuProps={MenuProps}
    >

      <MenuItem key="all" value="all">
        <ListCheckbox isSelected={allIsSelected()} />
        <ListItemText primary="Выбрать все" />
      </MenuItem>

      {formats.map((format) => {
        const selected = selectedFormats.includes(format);

        return (
          <MenuItem key={format} value={format}>
            <ListCheckbox isSelected={selected} />
            <ListItemText primary={format} />
          </MenuItem>
        );
      })}
    </Select>
  );
}