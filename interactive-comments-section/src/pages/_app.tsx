import { type AppType } from "next/app";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useUser,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import Home from "./index";
import { useEffect, useState } from "react";

function Header() {
  const { isLoaded, user } = useUser();

  // const deleteUser = api.user.delete.useMutation();

  const upsertUser = api.user.createUser.useMutation();

  useEffect(() => {
    if (isLoaded && user) {
      const userData = {
        id: String(user.id),
        userName: String(user.username),
        profileImage: String(user.profileImageUrl),
      };
      upsertUser.mutate(userData);
    }
  }, []);

  const users = api.user.getAll.useQuery();
  console.log(users);

  return (
    <header className="flex items-center justify-between bg-white px-5 py-5 md:px-10">
      <h1 className="font-bold">Comment Section</h1>
      <div className="flex items-center gap-2">
        <SignedIn>
          {/* Mount the UserButton component */}
          <p className="hidden md:block">
            {isLoaded ? user?.username : "Loading..."}
          </p>
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

const MyApp: AppType = ({ pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Header />
      <SignedIn>{<Home />}</SignedIn>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
