"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }:any) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const removetopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if (confirmed) {
      try {
        setIsDeleting(true); // Set loading state
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Failed to delete the topic");
        }

        // Optionally, refresh data or trigger a re-render here
        // e.g., window.location.reload(); or a callback to update parent component

      } catch (error) {
        console.error("Error deleting topic:", error);
      } finally {
        setIsDeleting(false); // Reset loading state
      }
    }
  };

  return (
    <>
      <button onClick={removetopic} className="text-red-500" disabled={isDeleting}>
        {isDeleting ? "Deleting..." : <HiOutlineTrash size={38} />}
      </button>
    </>
  );
};

export default RemoveBtn;
