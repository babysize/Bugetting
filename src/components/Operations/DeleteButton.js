import { connect } from "react-redux"
import { deleteOperation } from "../../redux/actions"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonGroup } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from "react";

const DeleteButton = (props) => {
  const [isNecessary, setIsNecessary] = useState(true)
  return (
    isNecessary
    ? <IconButton onClick={() => setIsNecessary(false)}>
        <DeleteIcon/>
      </IconButton>

    : <ButtonGroup>
      <IconButton onClick={() => props.deleteOperation(props.id)}>
        <CheckIcon/>
      </IconButton>
      <IconButton onClick={() => setIsNecessary(true)}>
        <CloseIcon/>
      </IconButton>
      </ButtonGroup>
  )
}

const mapDispatchToProps = {
  deleteOperation,
}

export default connect(null, mapDispatchToProps)(DeleteButton)