import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setsearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      } else {
        console.warn("Paste not found for ID:", pasteId);
        setTitle("");
        setValue("");
      }
    } else {
      setTitle("");
      setValue("");
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(30),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setsearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-4 mt-3 justify-between">
        <input
          className="p-3 font-medium rounded-xl"
          type="text"
          placeholder="Enter title"
          value={title}
          aria-label="Paste Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="rounded-xl bg-black p-3 font-medium text-white"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="mt-3 rounded-2xl p-3 w-full min-w-[350px]"
          rows={20}
          placeholder="Enter your content here..."
          value={value}
          aria-label="Paste Content"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
