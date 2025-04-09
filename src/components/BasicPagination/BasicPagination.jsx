import * as React from 'react';
import "./BasicPagination.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function BasicPagination({ countPagination, isDisabled }) {
  return (
    <div className="container-pagination">
      <Stack>
        <Pagination count={countPagination} color="primary" disabled={isDisabled} />
        {/* <Pagination count={1} disabled /> */}
      </Stack>
    </div>
  );
}

export default BasicPagination