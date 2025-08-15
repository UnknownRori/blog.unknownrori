import type { ReactNode } from "react";

import BaseLayout from "@/layouts/BaseLayout";

export default function NotFound(): ReactNode {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">
        404
      </h1>
      <h2 className="text-xl font-bold">
        Page not found
      </h2>
    </div>
  );
}
