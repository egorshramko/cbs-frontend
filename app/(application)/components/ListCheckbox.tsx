import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function ListCheckbox({ isSelected }: { isSelected: boolean }) {
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