import { TableCell, TableHead, TableRow } from "@mui/material";

export default function TablHead(){
    return(
        <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">userId</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Complete</TableCell>
              </TableRow>
        </TableHead>
    )
}