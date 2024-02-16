import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./userColumns";
import GlobalTable from "../shared/globalTable";
import TableButtons from "../shared/tableButtons";

const UsersTable = ({ usersData }) => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: usersData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    page,
    headerGroups,
    prepareRow,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <>
      <GlobalTable
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        page={page}
        headerGroups={headerGroups}
        prepareRow={prepareRow}
      />
      <TableButtons
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
      />
    </>
  );
};

export default UsersTable;
