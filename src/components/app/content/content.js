import React from 'react';

import { useStateValue } from "../../../state";
import Sidebar from "../sidebar";
import NewPost from "./content-components/new-post";
import Autorisation from "../../autorisation";

const Content = () => {

  const { state } = useStateValue();
  const { news, autorisation } = state;

  return (
    <div className="content-rel">
      <div className="side-bar-container">
        <Sidebar />
        {!autorisation ? <Autorisation /> : null}
      </div>
      <div className="content-abs">
        {news.map((post) => {
          const { postId } = post;
          return <NewPost key={postId} postId={postId} />
        })}
      </div>
    </div>
  );
};

export default Content;