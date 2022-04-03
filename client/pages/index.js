import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../components/layouts/mainLayout";
import { NavBar } from "../components/organisms/navBar";
import { ColoredBoxList } from "../components/organisms/coloredBoxList";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("jwttoken");
    !token && router.push("/login");
  }, []);
  return (
    <MainLayout>
      <NavBar></NavBar>
      <div>
        <h1>Welcome back!</h1>
        <main>
          <h2>My projects</h2>
          <ColoredBoxList></ColoredBoxList>
        </main>
      </div>
      <aside>SideSection</aside>
    </MainLayout>
  );
}
