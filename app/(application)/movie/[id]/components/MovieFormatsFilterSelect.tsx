import ListCheckbox from "@/app/(application)/components/ListCheckbox";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
  formats
} : {
  selectedFormats: Array<string>,
  formats: Array<string>
}) {

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
      //onChange={handleChange}
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