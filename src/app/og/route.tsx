import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

async function loadFont() {
  const font = await fetch(
    new URL("../../../public/fonts/EBGaramond-Bold.ttf", import.meta.url),
  );

  return font.arrayBuffer();
}

export default async function GET(request: NextRequest) {
  const font = await loadFont();
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  if (!title) {
    return new Response("Missing title", { status: 400 });
  }

  return new ImageResponse(
    <div
      style={{
        fontSize: 32,
        background: "#171717",
        width: "100%",
        height: "100%",
        padding: 100,
        display: "flex",
      }}
    >
      <div tw="flex flex-col">
        <div tw="text-white font-bold text-4xl">reactive</div>
        <div tw="text-white font-bold text-7xl">{title}</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: font,
          name: "EB Garamond",
          weight: 700,
        },
      ],
    },
  );
}
