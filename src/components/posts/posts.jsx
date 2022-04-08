/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import { getPageCount } from "./utils/pages";
import { Pagination } from "./ui/pagination/pagination";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setlimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await usePosts(limit, page);
    setPosts(response.data);
    const totalCount = ("x-total-count", response.headers["x-total-count"]);
    setTotalPages(getPageCount(totalCount, limit));
  });

  console.log("totalPages", totalPages);

  // бывает сам placeholder медленного грузится
  function fetchPosts() {
    fetching();
  }

  function changePage(p) {
    setPage(p);
  }

  return (
    <>
      <button onClick={fetchPosts}>press</button>
      {error && <h1>произошла ошибка {error}</h1>}
      {isLoading ? (
        <h1>Привет, Идет загрузка ...</h1>
      ) : (
        <div>
          {posts.map((post) => {
            const { id, title } = post;
            return (
              <div key={id}>
                <div>{id}</div>
                <div>{title}</div>
              </div>
            );
          })}
        </div>
      )}
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </>
  );
}
