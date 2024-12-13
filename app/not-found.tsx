import { authRoute } from "@/constants/routes";
import { redirect } from "next/navigation";

const NotFound = () => {
  redirect(new URL(authRoute.login, process.env.BASE_URL).href);
};

export default NotFound;
