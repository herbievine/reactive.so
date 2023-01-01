import type React from "react";
import Modify from "src/assets/Modify";

interface IEditProps {
  slug: string;
}

const Edit: React.FC<IEditProps> = ({ slug }) => {
  return (
    <div className="py-4 flex justify-end items-center border-2 border-y-gray-200 dark:border-y-gray-800 border-x-0">
      <a
        href={`https://github.com/herbievine/reactive.so/blob/main/posts/${slug}.mdx`}
        className="flex items-center text-sm font-extrabold cursor-pointer"
      >
        <Modify width={20} className="mr-4 fill-gray-800 dark:fill-gray-200" />
        edit on Github
      </a>
    </div>
  );
};

export default Edit;
