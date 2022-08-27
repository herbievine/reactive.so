import type { NextPage } from "next";
import type React from "react";
import Page from "src/layouts/Page";

interface IErrorProps {}

const Error: NextPage<IErrorProps> = () => {
  return (
    <Page
      title="404"
      description="The content you are looking for is not here."
    >
      <div className="w-full flex flex-col items-center space-y-4">
        <h2 className="text-6xl font-black text-indigo-500 dark:text-indigo-400">
          404
        </h2>
        <p className="text-center font-bold">
          The content you are looking for either doesn&apos;t exist or the URL
          was incorrectly entered...
        </p>
      </div>
    </Page>
  );
};

export default Error;
