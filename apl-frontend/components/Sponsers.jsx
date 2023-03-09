import React from "react";
import Image from "next/image";

function Sponsers() {
  return (
    <>
      <div className="flex justify-center italic font-bold text-center text-5xl p-8 text-white">
        Supported By
      </div>
      <div className="flex justify-center gap-8">
        <svg
          className="fill-[#075CCC] hover:opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="44.7 20.3 149.5 204.7"
        >
          <path d="M160.4 23c.3.8 2.5 6.4 5 12.5 10.8 26.4 13.6 52.4 8.2 75.7-6.3 27-17.2 46.9-37.5 68-5.7 6-14.2 13.9-18.9 17.6l-8.4 6.7 6.3.8c4 .5 9.5.4 14.6-.3l8.2-1.2 8.3-8.6c18.7-19.5 30.4-40 37-64.9 2-7.8 2.3-11 2.3-28.3-.1-17.8-.3-20.4-2.7-29.8-3.3-12.5-10-29.3-15.5-38.7-4.2-7.2-7.9-12.2-6.9-9.5zm-46.9 36.1c-2.2.6-5.2 1-6.7.9-2.7 0-3.9 2.2-1.9 3.4.4.3 1.1 2.4 1.5 4.6.3 2.2 1.1 4 1.7 4 .5 0 .8.4.5.9s.3 4.8 1.4 9.7c3.1 14.6 4.3 31.9 3 44.8-4 40.6-18.3 64.2-55 91-8.7 6.4-8.7 6.6-.5 2.1C104.6 194.8 129 155 129 103.6c0-13.7-2-30-4.8-39.4-2-6.4-3.1-6.9-10.7-5.1z"></path>
          <path d="M135.4 61.7c1.8 4.7 4.8 26.3 5.3 38.3.6 15.7-.8 26-5.8 41-6.3 19.4-14.8 34.5-27.6 49.5-6.1 7.2-6.4 7.7-2.8 5.1 10.2-7.5 18.2-14.6 24.2-21.5 22.4-25.9 33.3-55.8 33.3-91.2V70.3l-5.7-3.1c-5.8-3-17.4-7.2-20.1-7.2-.9 0-1.2.6-.8 1.7zM89 75c-1.3.8-1.2 1 .3 1 2.1 0 2.1.4.1 3.6-1 1.4-2.3 2.3-3.1 2s-1.2-.2-.9.3c.8 1.2-7.9 10.1-9.9 10.1-.9 0-1.4.3-1.1.8.2.4-1.3 2.5-3.5 4.7-2.1 2.1-3.9 4.2-3.9 4.7s-.4.7-.8.4c-.5-.3-3.3 2.3-6.3 5.6-3 3.4-6.6 7.3-8.1 8.9-7.1 7.3-3.6 34.2 6.9 52.2 2 3.4 7.2 9.8 11.6 14.2 9.2 9.2 7.9 9.6 15.1-4.4 9.5-18.7 13.1-34.3 13-56.6-.1-16.1-2.9-36.8-5.6-41.9-.7-1.1-1.2-2.9-1.3-3.8-.2-2.5-.8-2.9-2.5-1.8zm-38 36.9c-1.3 2.5-1.3 4.1 0 4.1.5 0 .7-.7.4-1.5-.4-.8-.2-1.5.3-1.5s1-.7 1-1.5c0-2-.4-1.9-1.7.4zm141.2 16.6c-3 17.2-12.2 37.2-25.4 55.1-4.3 5.7-7.6 10.4-7.3 10.4.9 0 12.2-9.4 15.3-12.8 5.2-5.7 11.7-16.1 14.5-23.2 3.6-9.2 4.9-17.1 4.5-28l-.3-9.5z"></path>
        </svg>
        <Image className="hover:opacity-70" src={'/bsv.png'} alt="" height={128} width={128}/>
      </div>
    </>
  );
}

export default Sponsers;
