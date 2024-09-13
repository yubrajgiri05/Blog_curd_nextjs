"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();

  const handleSubmit = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!title || !description || !author || !date) {
      alert("Please fill in all fields");
      return;
    }
    try{
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          author,
          date,
        }),
      })
      if(res.ok){
        router.push("/");
      }
      else{
        throw new Error("Failed to create topic");
      }
    }
    catch(error){
      console.log(error);

    }

  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <div>
            <label htmlFor="desc" className="text-2xl font-medium py-4">
              Enter the Blog Topic
            </label>
          </div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="topic"
            className="input-title"
            placeholder="Title"
            required
          />
        </div>

        <div className="">
          <div>
            <label htmlFor="desc" className="text-2xl font-medium py-4">
              Enter the Blog Description
            </label>
          </div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={3}
            id="description"
            className="input-title"
            placeholder="Description"
            required
          ></textarea>
        </div>

        <div className="">
          <div>
            <label htmlFor="profil" className="text-2xl font-medium py-4">
              Enter the Blog Author Name
            </label>
          </div>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            type="text"
            id="profil"
            className="input-title"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="">
          <div>
            <label htmlFor="date" className="text-2xl font-medium py-4">
              Enter the Blog Date
            </label>
          </div>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date" // Use "date" input type for better date handling
            id="date"
            className="input-title"
            required
          />
        </div>

        <button type="submit" className="btn">
          Add Topic
        </button>
      </form>
    </>
  );
};

export default Page;
