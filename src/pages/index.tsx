import { trpc } from "../utils/trpc";
import { createSSGHelpers } from "@trpc/react/ssg";
import type { GetStaticProps, NextPage } from "next";
import type React from "react";
import Root from "@/layouts/Root";
import Meta from "@/modules/Meta";
import getBaseUrl from "@/utils/getBaseUrl";
import Preview from "@/modules/Preview";
import { appRouter } from "@/server/router";
import superjson from "superjson";
import { createContext } from "@/server/router/context";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  const { data: posts } = trpc.useQuery(["post.findMany"]);

  return (
    <Root titleIsHeader>
      <Meta
        title="Home - Reactive"
        description="Reactive is a small blog about the web; made by herbie vine."
        image={`${getBaseUrl()}/static/images/reactive.png`}
      />

      <div className="space-y-12">
        {posts?.map((post) => (
          <Preview key={post.slug} post={post} />
        ))}
      </div>
    </Root>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = createSSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });

  await ssg.fetchQuery("post.findMany");

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  };
};

export default Home;
