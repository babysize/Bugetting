import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CheckBox } from '@mui/icons-material';


function createData(id, date, value, description) {
    return { id, date, value, description };
  }

const rows = [
    createData("123", '11.02.22', 159, "cake for Max"),
    createData("123", '11.02.22', 159, "cake for Max"),
    createData("123", '11.02.22', 159, "cake for Max"),
    createData("123", '11.02.22', 159, "cake for Max"),
    createData("123", '11.02.22', 159, "cake for Max"),
    createData("123", '11.02.22', 159, "cake for Max"),
    createData("123", '11.02.22', 159, "cake for Max"),
]

export default function Operations(props) {
  return(
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <CheckBox
              color='error'
            />
            <TableCell>Date</TableCell>
            <TableCell>Value </TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <CheckBox
                color='error'
              />
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
