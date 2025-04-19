import React from 'react'
import { Ellipsis } from "react-css-spinners";


const Loading = () => {
  return (
    <>
    <div className='my-52 px-52 text-center'>
      <Ellipsis
    color="#00008B"
    size={100}
    />
    </div>
    </>
  )
}

export default Loading





// app/loading.jsx or app/someFolder/loading.jsx — ONLY valid inside the /app folder!


// "use client";

// import React from "react";

// const Loading = () => {
//   return (
//     <div className="my-52 px-52 text-center">
//       <Ellipsis color="#00008B" size={100} />
//     </div>
//   );
// };

// export default Loading;
