import * as trpc from "@trpc/server";
import { createRouter } from "../context";

const editRouter = () => createRouter().query("findAll", {});

export default editRouter;
