import React from "react";
import PostItem from "./postItem.jsx";
function PostList({ posList }) {
    return (
        <div>
            {posList.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;