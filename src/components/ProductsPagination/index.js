import React from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  pagination: {
    margin: "50px auto",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ProductsPagination({ count, page, setPage }) {
  const classes = useStyles();

  // count - amount of pages in pagination
  // page - currentPage

  return (
    <Pagination
      // change current page to clicked page

      onChange={(_, _page) => setPage(_page)}
      count={count}
      page={page}
      className={classes.pagination}
    />
  );
}
