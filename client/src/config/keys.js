import prod from "./prod";
import dev from "./dev";

const logger = process.env.NODE_ENV === "PRODUCTION" ? prod : dev;
export default logger;
