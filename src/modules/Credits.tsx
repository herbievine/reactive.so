import { TMetadata } from "@schema/metadata";
import dayjs from "dayjs";
import type React from "react";

interface CreditsProps {
  metadata: TMetadata;
}

const Credits: React.FC<CreditsProps> = ({ metadata }) => {
  return (
    <div className="w-full flex items-center">
      <aside>
        <time dateTime={metadata.createdAt}>
          {dayjs().to(metadata.createdAt)}
        </time>
        {` • `}
        <span>{metadata.readingTime}</span>
      </aside>
    </div>
  );
};

export default Credits;
