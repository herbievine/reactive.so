"use client";

import { PopupButton } from "@typeform/embed-react";
import { env } from "@/env.mjs";

type Props = {
  source: string;
};

export function Feedback({ source }: Props) {
  return (
    <PopupButton
      id={env.NEXT_PUBLIC_TYPEFORM_ID}
      size={60}
      className="w-full px-6 py-3 flex justify-between items-center border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 hover:dark:border-neutral-600 transition-colors rounded-md"
      hidden={{ source }}
    >
      Want to provide feedback? Give feedback with Typeform
    </PopupButton>
  );
}
