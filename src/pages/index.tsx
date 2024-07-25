import { Inter } from "next/font/google";
import LoginForm from "@/components/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
       <LoginForm />
    </main>
  );
}
