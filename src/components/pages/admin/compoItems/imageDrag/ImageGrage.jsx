import React from "react";

function ImageGrage() {
  return (
    <div class="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
      <label
        for="upload"
        class="flex flex-col items-center gap-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 fill-white stroke-indigo-500"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span class="text-gray-600 font-medium">Upload file</span>
      </label>
      <input id="upload" type="file" class="hidden" />
    </div>
  );
}

export default ImageGrage;
