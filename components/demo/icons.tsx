"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  CopyIcon,
  CircleAlertIcon,
  TrashIcon,
  ShareIcon,
  ShoppingBagIcon,
  MoreHorizontalIcon,
  Loader2Icon,
  PlusIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

export function IconsDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <div className="grid grid-cols-8 place-items-center gap-4">
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <CopyIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <CircleAlertIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <TrashIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <ShareIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <ShoppingBagIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <MoreHorizontalIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <Loader2Icon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <PlusIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <MinusIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <ArrowLeftIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <ArrowRightIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <CheckIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <ChevronDownIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <ChevronRightIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <SearchIcon />
          </Card>
          <Card className="flex size-8 items-center justify-center p-0 shadow-none *:[svg]:size-4">
            <SettingsIcon />
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
