// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromPastes } from "../redux/pasteSlice";
// import toast from "react-hot-toast";
// import dateFormat from "dateformat";
// import { Link } from "react-router-dom";

// const Pastes = () => {
//   const pastes = useSelector((state) => state.paste.pastes);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleDelete = (pasteId) => {
//     dispatch(removeFromPastes(pasteId));
//     toast.success("Paste deleted successfully!");
//   };

//   const handleShareClick = async (url) => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: "My Awesome Content",
//           text: "Check out this amazing content!",
//           url: url,
//         });
//         toast.success("Content shared successfully...");
//       } catch (error) {
//         console.error("Error sharing:", error);
//       }
//     } else if (navigator.clipboard) {
//       try {
//         await navigator.clipboard.writeText(url);
//         toast.success("URL copied to clipboard! You can share it anywhere.");
//       } catch (error) {
//         console.error("Failed to copy URL:", error);
//       }
//     } else {
//       toast.error("Sharing is not supported on this device.");
//     }
//   };

//   const copyToClipboard = async (text) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       toast.success("Copied to clipboard!");
//     } catch (error) {
//       console.error("Failed to copy text:", error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="search"
//           className="p-3 rounded-xl mt-4 min-w-[500px]"
//           placeholder="Search here..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="flex flex-col gap-4 mt-4">
//         {filteredData.length > 0 ? (
//           filteredData.map((paste) => (
//             <div className="border p-4 rounded-lg" key={paste._id}>
//               <div className="font-bold text-lg">{paste.title}</div>
//               <div className="text-gray-600 mb-2">{paste.content}</div>
//               <div className="flex flex-row gap-2 justify-evenly">
//                 <button
//                   onClick={() => handleDelete(paste._id)}
//                   className="rounded-xl p-2 bg-red-600 text-white"
//                   aria-label={`Delete paste titled "${paste.title}"`}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => copyToClipboard(paste.content)}
//                   className="rounded-xl p-2 bg-blue-600 text-white"
//                   aria-label={`Copy content of paste titled "${paste.title}"`}
//                 >
//                   Copy
//                 </button>

//                 <Link to={`/?pasteId=${paste?._id}`}>
//                   <button
//                     className="rounded-xl p-2 bg-green-600 text-white"
//                     aria-label={`Edit paste titled "${paste.title}"`}
//                   >
//                     Edit
//                   </button>
//                 </Link>

//                 <Link to={`/?pastes/${paste?._id}`}>
//                   <button
//                     className="rounded-xl p-2 bg-yellow-600 text-white"
//                     aria-label={`View paste titled "${paste.title}"`}
//                   >
//                     View
//                   </button>
//                 </Link>
//                 <button
//                   className="rounded-xl p-2 bg-purple-600 text-white"
//                   onClick={() => handleShareClick(`/pastes/${paste._id}`)}
//                   //aria-label={`Share paste titled "${paste.title}"`}
//                 >
//                   Share
//                 </button>
//               </div>
//               <div className="text-sm text-gray-500 mt-2">
//                 {dateFormat(paste.createdAt, "mmmm dS, yyyy, h:MM TT")}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-500">No pastes found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Pastes;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
    //toast.success("Paste deleted successfully!");
  };

  const handleShareClick = async (url) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Awesome Content",
          text: "Check out this amazing content!",
          url: url,
        });
        toast.success("Content shared successfully...");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        toast.success("URL copied to clipboard! You can share it anywhere.");
      } catch (error) {
        console.error("Failed to copy URL:", error);
      }
    } else {
      toast.error("Sharing is not supported on this device.");
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="search"
          className="p-3 rounded-xl mt-4 min-w-[500px]"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div className="border p-4 rounded-lg" key={paste._id}>
              <div className="font-bold text-lg">{paste.title}</div>
              <div className="text-gray-600 mb-2">{paste.content}</div>
              <div className="flex flex-row gap-2 justify-evenly">
                <button
                  onClick={() => handleDelete(paste._id)}
                  className="rounded-xl p-2 bg-red-600 text-white"
                  aria-label={`Delete paste titled "${paste.title}"`}
                >
                  Delete
                </button>
                <button
                  onClick={() => copyToClipboard(paste.content)}
                  className="rounded-xl p-2 bg-blue-600 text-white"
                  aria-label={`Copy content of paste titled "${paste.title}"`}
                >
                  Copy
                </button>

                {/* Edit Button */}
                <Link to={`/?pasteId=${paste._id}`}>
                  <button
                    className="rounded-xl p-2 bg-green-600 text-white"
                    aria-label={`Edit paste titled "${paste.title}"`}
                  >
                    Edit
                  </button>
                </Link>

                {/* View Button */}
                <Link to={`/pastes/${paste._id}`}>
                  <button
                    className="rounded-xl p-2 bg-yellow-600 text-white"
                    aria-label={`View paste titled "${paste.title}"`}
                  >
                    View
                  </button>
                </Link>

                {/* Share Button */}
                <button
                  className="rounded-xl p-2 bg-purple-600 text-white"
                  onClick={() => handleShareClick(`/pastes/${paste._id}`)}
                  aria-label={`Share paste titled "${paste.title}"`}
                >
                  Share
                </button>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {dateFormat(paste.createdAt, "mmmm dS, yyyy, h:MM TT")}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No pastes found.</div>
        )}
      </div>
    </div>
  );
};

export default Pastes;

