import Box from "@mui/material/Box";
import ObjectTypeProp from "./ObjectTypeProp";
import { FabricObject } from "fabric";

export default function ObjectProperties({
  object
} : {
  object?: FabricObject
}) {
  return (
    <Box>
      <ObjectTypeProp object={ object } />
    </Box>
  );
}