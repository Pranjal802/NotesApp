import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () =>{

    const {id} = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];
    console.log("Final paste",paste);

    return(
        <div>
      <div className="flex flex-row gap-4 mt-3 justify-between">
        <input
          className="p-3 font-medium rounded-xl"
          type="text"
          placeholder="Enter title"
          value={paste.title}
          disabled
          aria-label="Paste Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button
          className="rounded-xl bg-black p-3 font-medium text-white"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button> */}
      </div>
      <div>
        <textarea
          className="mt-3 rounded-2xl p-3 w-full min-w-[350px]"
          rows={20}
          placeholder="Enter your content here..."
          value={paste.content}
          disabled
          aria-label="Paste Content"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
    )
}
export default ViewPaste;