import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { console } from "inspector";

// Fetch topics from the API
const getTopiclist = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    console.log(res)
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading:", error);
    return { topics: [] }; // Return empty array on error
  }
};

// Server Component for Topic List
const Topiclist = async () => {
  const { topics } = await getTopiclist();
  console.log(topics,"topics")

  return (
    <div>
      {topics && topics.length > 0 ? (
        topics.map((t: { _id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; author: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; date: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
          <div
            key={t._id}
          
            className="px-8 py-4 border-slate-400 border-4 flex justify-between my-4 gap-12 bg-white"
          >
            <div className="width-full">
              <div className="text-2xl font-bold">{t.title}</div>
              <div className="text-justify pt-2">{t.description}</div>
              <div className="flex justify-between">
                <div className="text-blue-800">Published by: {t.author}</div>
                <div className="text-blue-800">Date: {t.date}</div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <RemoveBtn  id={t._id}/> 
              <Link className="p-0" href={`/editTopic/${t._id}`} aria-label="Edit Topic">
                <HiPencilAlt size={38} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>No topics available</div>
      )}
    </div>
  );
};

export default Topiclist;
