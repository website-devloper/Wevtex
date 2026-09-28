import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic.config";

/** Reads and writes the files under content/ for the dashboard. */
export const { POST, GET } = makeRouteHandler({ config });
