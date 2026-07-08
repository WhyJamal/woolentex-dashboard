"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";

export function SignInCard() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const { login: signIn, isLoading, error } = useAuth();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await signIn(login, password);
    }

    return (
        <Card className="grid w-full max-w-md overflow-hidden border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
            {/* Left */}
            {/* <div  style={{ backgroundImage: "url('/images/WZ010-10-black-01.jpg')",  }} className="hidden flex-col justify-between bg-linear-to-br from-violet-700/30 via-transparent to-cyan-500/20 p-12 md:flex">
                <div>
                    <h1 className="text-5xl font-bold tracking-tight text-white">
                        Welcome Back
                    </h1>

                    <p className="mt-5 max-w-md text-white/70">
                        Sign in to continue managing your workspace, projects and team.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="text-white/80">
                            Everything you need to manage your business in one platform.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-violet-500" />
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />
                        <div className="h-2 w-2 rounded-full bg-white/50" />
                    </div>
                </div>
            </div> */}

            <div className="sm:hidden flex-col items-center justify-center p-3 flex">
                <Image
                    src="/logo-white1.png"
                    alt="Sign In Image"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                />
            </div>

            {/* Right */}
            <div className="flex items-center justify-center bg-black/30 p-10">
                <div className="w-full max-w-sm">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-white">
                            Sign In
                        </h2>

                        <p className="mt-2 text-sm text-white/60">
                            Enter your credentials to continue.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <Label className="text-white">
                                Username
                            </Label>

                            <Input
                                placeholder="john.doe"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-white">
                                Password
                            </Label>

                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                            />
                        </div>

                        {error && (
                            <p className="text-sm text-red-400">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="h-11 w-full rounded bg-violet-600 text-white"
                        >
                            Sign In
                        </button>

                        {/* <Button
                            type="submit"
                            disabled={isLoading}
                            className="h-11 w-full bg-violet-600 hover:bg-violet-500"
                            >
                            {isLoading ? "Kirilyapti..." : "Sign In"}
                            </Button>
                        */}
                    </form>
                </div>
            </div>
        </Card>
    );
}