import PaginatedTable from "../components/PaginatedTable";

export default {
  title: "PaginatedTable",
  component: PaginatedTable,

  args: {
    rows: [
      {
        key1: "value1",
        key2: "value2",
        key3: "value3",
        key4: "value4",
        key5: "value5",
        key6: "value6",
        key7: "value7",
        key8: "value8",
        key9: "value9",
        key10: "value10",
        key11: "value11",
        key12: "value12",
        key13: "value13",
        key14: "value14",
      },
      {
        key1: "value1",
        key2: "value2",
        key3: "value3",
        key4: "value4",
        key5: "value5",
        key6: "value6",
        key7: "value7",
        key8: "value8",
        key9: "value9",
        key10: "value10",
        key11: "value11",
        key12: "value12",
        key13: "value13",
        key14: "value14",
      },
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
