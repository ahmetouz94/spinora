import { redirect } from "next/navigation";

// Bu sayfa /admin/dashboard'a yönlendirir
export default function AdminPage() {
  redirect("/admin/dashboard");
}
