import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { useEffect, useState } from "react";

interface NewsletterProps {}

// Need API key access from Revue first

const Newsletter: React.FC<NewsletterProps> = ({}) => {
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getFollowers"],
    () => ({ count: Math.floor(Math.random() * 100) }),
    { refetchInterval: 5 * 1000 }
  );
  const mutation = useMutation(
    async ({ email }: { email: string }) => console.log(email),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getFollowers"]);
      },
    }
  );

  return (
    <aside className="w-full flex flex-col items-center p-4 rounded-lg space-y-4 border-2 border-gray-200 dark:border-gray-800">
      <h5 className="text-xl font-black">Subscribe to the newsletter</h5>
      <p className="text-md font-bold">
        Get bi-weekly emails about new tech stuff. No spam. I promise.
      </p>
      <input
        className="w-full px-4 py-2 rounded-lg font-bold border-2 border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900"
        placeholder="john@smith.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
      />
      <button
        onClick={() => mutation.mutate({ email })}
        className="w-1/2 sm:w-1/3 px-4 py-2 rounded-lg font-bold bg-gray-200 dark:bg-gray-800 text-indigo-500 dark:text-indigo-400"
      >
        Go!
      </button>
      <p className="text-xs font-bold">
        ({query.data?.count} already subscribed)
      </p>
    </aside>
  );
};

export default Newsletter;
