import React from "react";
import { useMemo } from "react";

import styles from "../../posts.module.css";
import { getPagesArray } from "../../utils/pages";

export function Pagination({ totalPages, page, changePage }) {
  let pageArray = useMemo(() => getPagesArray(totalPages), [totalPages]);

  return (
    <div className={styles.page_wrapper}>
      {pageArray.map((p) => (
        <button
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p ? `${styles.page_current} ${styles.page}` : styles.page
          }
        >
          {p}
        </button>
      ))}
    </div>
  );
}
