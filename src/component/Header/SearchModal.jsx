import * as React from 'react';
import { Button, Modal, Box, TextField, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

export default function SearchModal({value}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={value === 'show' ? 'search-modal-show' : 'search-modal'}>
      <Button
      className='search'
        variant="contained"
        startIcon={<SearchIcon sx={{ ml: 2 }}/>}
        onClick={handleOpen}
      >
        بحث
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">ابحث عن منتج</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <TextField
            fullWidth
            label="اكتب كلمة البحث هنا..."
            variant="outlined"
            autoFocus
          />
        </Box>
      </Modal>
    </div>
  );
}
