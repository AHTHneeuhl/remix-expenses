import { redirect } from "@remix-run/node";
import { type Params } from "@remix-run/react";

export const loader = ({ params }: { params: Params }) => {
  if (params["*"] === "exp") {
    return redirect("/expenses");
  }

  throw new Response("Not found", { status: 404 });
};
