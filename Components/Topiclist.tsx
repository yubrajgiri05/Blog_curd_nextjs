import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const Topiclist = () => {
  return (
    <>
      <div className="px-8 py-4  border-slate-400 border-4 flex justify-between my-4 gap-12 bg-white ">
        <div className="p-0">
          <div className="text-2xl font-bold p-0">Topic</div>
          <div className="p-0 text-justify pt-2">
            Topic Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi repudiandae
            consequuntur voluptatum laborum numquam blanditiis harum quisquam
            eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            Provident similique accusantium nemo autem. Veritatis obcaecati
          </div>
          <div className="p-0 flex justify-between">
            < div className="text-blue-800">Published by : Yogesh</div>
            < div className="text-blue-800">Date : 2024-03-7</div>
          </div>

        </div>
        <div className="p-0 flex gap-2 align-middle items-center">
          <RemoveBtn />
          <Link className="p-0 text-blue-500" href={"/editTopic/123"}>
            <HiPencilAlt size={38} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topiclist;
