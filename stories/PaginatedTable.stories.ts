import PaginatedTable from "../components/PaginatedTable";

export default {
  title: "PaginatedTable",
  component: PaginatedTable,

  args: {
    rows: [
      { key1: "value1", key2: "value2" },
      { key1: "value3", key2: "value4" },
    ],
    tableAriaLabel: "tableAriaLabel",
    currentPageNumber: 1,
    handlePageChange: () => {},
    totalRowsCount: 2,
    isLoading: false,
    pageSize: 10,
  },
};

export const main = {};
