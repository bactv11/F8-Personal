import React, { useState, useEffect } from 'react';
import { get } from '../utils/index.js';

const Post = () => {
    //  logout
    const onLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/';
    };
    return (
       <>
           <h1>Post</h1>
           <button onClick={onLogout}>
               Đăng xuất
           </button>
       </>

    );
};

export default Post;