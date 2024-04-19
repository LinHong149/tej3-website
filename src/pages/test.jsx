import React from 'react'
import { useEffect } from 'react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/logo.png"

export default function test(){
  useEffect(() => {
    setPostState(allPosts);
  }, [allPosts])
    
  let submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    res = await res.json();
    setPostsState([...postsState, res]);
    setTitle("");
    setContent("");
    setLoading(false);
  };

  return (
    <button onClick={() => submitForm()}>Click me</button>
  )


}
