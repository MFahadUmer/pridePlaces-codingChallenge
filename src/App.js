import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import { fetchBlog } from './Redux/blog/blogActions';
import LoaderComponent from './component/loaderComponent';
import Posts from './component/posts';
import { fetchUser } from './Redux/user/userActions';

const App = () => {
  const posts = useSelector((state) => state.posts);
  const [activePage, setActivePage] = useState(1);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(8);
  const paginationTotalElements = posts.data.length;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
    dispatch(fetchUser());
  }, [dispatch]);
  let postsList = '';
  if (posts.data !== []) {
    postsList = posts.data.slice(startPoint, endPoint).map((value) => (
      <Posts
        userId={value.userId}
        id={value.id}
        title={value.title}
        body={value.body}
        key={value.id}
      />
    ));
  }
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setStartPoint((pageNumber - 1) * 8);
    setEndPoint(pageNumber * 8);
  };

  return (
    <div>
      {
         posts.fetchStatus
           ? <LoaderComponent />
           : postsList
       }
      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={8}
          totalItemsCount={paginationTotalElements}
          itemClass="paginationLi"
          linkClass="paginationLink"
          pageRangeDisplayed={3}
          onChange={handlePageChange}
          activeClass="active"
        />
      </div>
    </div>
  );
};

export default App;
