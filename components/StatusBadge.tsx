"use client";

import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";
import { Status } from "@/types";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-50 text-green-700": status === "scheduled",
        "bg-yellow-50 text-yellow-700": status === "pending",
        "bg-red-50 text-red-700": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt={status}
        width={16}
        height={16}
        className={clsx({
          "status-icon_green": status === "scheduled",
          "status-icon_yellow": status === "pending",
          "status-icon_red": status === "cancelled",
        })}
      />
      {status}
    </div>
  );
};
