import generateLink from "@lib/generateLink";
import { TMetadata } from "@schema/metadata";
import type React from "react";
import HackerNews from "src/assets/HackerNews";
import Linkedin from "src/assets/Linkedin";
import Reddit from "src/assets/Reddit";
import Twitter from "src/assets/Twitter";

interface ShareProps {
  metadata: TMetadata;
}

const Share: React.FC<ShareProps> = ({ metadata }) => {
  return (
    <div className="py-4 flex justify-evenly items-center fill-gray-800 dark:fill-gray-200">
      <a
        href={generateLink("twitter", metadata)}
        target="_BLANK"
        rel="noreferrer"
      >
        <Twitter width={24} className="hover:fill-[#00acee] cursor-pointer" />
      </a>
      <a
        href={generateLink("reddit", metadata)}
        target="_BLANK"
        rel="noreferrer"
      >
        <Reddit width={24} className="hover:fill-[#ff8b60] cursor-pointer" />
      </a>
      <a
        href={generateLink("linkedin", metadata)}
        target="_BLANK"
        rel="noreferrer"
      >
        <Linkedin width={24} className="hover:fill-[#0072b1] cursor-pointer" />
      </a>
      <a
        href={generateLink("hackernews", metadata)}
        target="_BLANK"
        rel="noreferrer"
      >
        <HackerNews
          width={24}
          className="hover:fill-[#ff6600] cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Share;
