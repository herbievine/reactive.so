import dayjs from "dayjs";
import type React from "react";

interface InformationProps {
  readingTime: string;
  createdAt: string;
}

const Information: React.FC<InformationProps> = ({
  createdAt,
  readingTime,
}) => {
  return (
    <div className="w-full flex items-center">
      <aside className="text-xs font-extrabold text-gray-500">
        <time dateTime={createdAt}>{dayjs().to(createdAt)}</time>
        {" • "}
        <span>{readingTime}</span>
      </aside>
    </div>
  );
};

export default Information;
