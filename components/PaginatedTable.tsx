import React from "react";

import {
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Row } from "../types/PaginatedTableType";

const PaginatedTable = (props: {
  rows: Row[];
  tableAriaLabel: string;
  currentPageNumber: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalRowsCount: number;
  isLoading: boolean;
  pageSize: number;
}) => {
  return (
    <TableContainer component={Paper}>
      {props.rows &&
        props.rows.length > 0 &&
        (props.isLoading ? (
          <CircularProgress
            style={{ position: "relative", top: "50%", left: "50%" }}
          />
        ) : (
          <>
            <Table aria-label={props.tableAriaLabel}>
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
            <Pagination
              count={Math.ceil(props.totalRowsCount / props.pageSize)}
              showFirstButton
              showLastButton
              page={props.currentPageNumber}
              onChange={props.handlePageChange}
            />
          </>
        ))}
    </TableContainer>
  );
};
export default PaginatedTable;
