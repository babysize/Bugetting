import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';
import useStyles from './Operation.style';
import DeleteButton from './DeleteButton';

const Operations = (props) => {
  const {classes} = useStyles()
  return(
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{width:'8%'}}>Date</TableCell>
            <TableCell sx={{width:'5%'}}>Value </TableCell>
            <TableCell sx={{width:'10%'}}>Category</TableCell>
            <TableCell sx={{width:'80%'}}>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.operation.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell className={row.type === 'income' ? classes['income'] : classes['expence']}>
                {row.value}
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align='right'>
                <DeleteButton id={row.id}></DeleteButton>
              </TableCell>
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
