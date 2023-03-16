import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';

const Operations = ({operation}) => {
  return(
    <TableContainer component={Paper} sx={{height: "50vh"}}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align='right'>Date</TableCell>
            <TableCell align='center'>Value </TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { operation.map((row) => (
            <TableRow key={row.id}>
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

const mapStateToProps = state => {
  return {
    operation: state.operations.operationsList
  }
}

export default connect(mapStateToProps,null)(Operations)
