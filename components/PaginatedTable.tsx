import React from "react";

import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { Row } from "../types/PaginatedTableType";

const PaginatedTable = (props: {
  rows: Row[];
  tableAriaLabel: string;
  currentPageNumber: number;
  handlePageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  totalRowsCount: number;
  isLoading: boolean;
  pageSize: number;
  caption?: string;
  hidePaginationOnSinglePage?: boolean;
}) => {
  return (
    <>
      {props.isLoading ? (
        <Paper>
          <CircularProgress
            style={{ position: "relative", top: "50%", left: "50%" }}
          />
        </Paper>
      ) : (
        <>
          <TableContainer component={Paper}>
            {props.rows && props.rows.length > 0 && (
              <Table stickyHeader aria-label={props.tableAriaLabel}>
                {props.caption && <caption>{props.caption}</caption>}
                <TableHead>
                  <TableRow>
                    {Object.keys(props.rows[0]).map((key) => (
                      <TableCell key={key}>{key}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.rows.map((row, idx) => (
                    <TableRow key={idx}>
                      {Object.entries(row).map(([key, value]) => (
                        <TableCell key={idx + " " + key}>{value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TableContainer>
          {props.hidePaginationOnSinglePage &&
          props.totalRowsCount <= props.pageSize ? null : (
            <TablePagination
              component="div"
              count={props.totalRowsCount}
              rowsPerPage={props.pageSize}
              showFirstButton
              showLastButton
              page={props.currentPageNumber - 1}
              onPageChange={props.handlePageChange}
              rowsPerPageOptions={[props.pageSize]}
            />
          )}
        </>
      )}
    </>
  );
};
export default PaginatedTable;
