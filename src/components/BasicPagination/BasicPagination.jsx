import * as React from 'react';
import "./BasicPagination.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function BasicPagination() {
  return (
    <div className="container-pagination">
      <Stack>
        <Pagination count={11} color="primary" />
        {/* <Pagination count={10} disabled /> */}
      </Stack>
    </div>
  );
}

export default BasicPagination