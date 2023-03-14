import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CheckBox } from '@mui/icons-material';

export default function Operations(props) {
  return(
    <TableContainer component={Paper} sx={{height: "50vh"}}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {/* <TableCell padding='checkbox'>
              <CheckBox
                color='primary'
                checked={rows.length > 0 && rows.length === }
              />
            </TableCell> */}
            <TableCell align='right'>Date</TableCell>
            <TableCell align='center'>Value </TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell padding='checkbox'>
                <CheckBox
                  color='primary'
                />
              </TableCell> */}
              <TableCell align='right'>{row.date}</TableCell>
              <TableCell align='center'>{row.value}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
