import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';
import useStyles from './Operation.style';

const Operations = (props) => {
  const {classes} = useStyles()
  return(
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align='right'>Date</TableCell>
            <TableCell>Value </TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.operation.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='right'>{row.date}</TableCell>
              <TableCell className={row.type === 'income' ? classes['income'] : classes['expence']}>
                {row.value}
              </TableCell>
              <TableCell>{row.category}</TableCell>
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
    operation: state.operations.operationsList,
  }
}

export default connect(mapStateToProps,null)(Operations)
