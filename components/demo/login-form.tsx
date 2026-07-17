"use client"

import type React from "react"

import { useState } from "react"
import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field"

export function LoginFormDemo() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("[v0] login submit:", { email, password })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Lock className="size-5" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <a
                  href="#"
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="mt-6 flex-col gap-4">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <FieldDescription className="text-center">
            {"Don't have an account? "}
            <a href="#" className="underline underline-offset-4 hover:text-foreground">
              Sign up
            </a>
          </FieldDescription>
        </CardFooter>
      </form>
    </Card>
  )
}
