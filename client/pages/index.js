import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../components/layouts/mainLayout";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("jwttoken");
    !token && router.push("/login");
  }, []);
  return (
    <MainLayout>
      <div>Hej</div>
      <div>Hej</div>
      <div>Hej</div>
    </MainLayout>
  );
}
