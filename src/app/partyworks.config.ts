"use client";

import { createClient } from "partyworks-client";
import { createRoomContext } from "partyworks-react";

export type Position = {
  x: number;
  y: number;
  pointer: "mouse" | "touch";
};

type Presence = Position | null;

type UserMeta = {
  country: string | null;
};

//default client throttle is 16ms
const client = createClient({
  host: process.env.NEXT_PUBLIC_PARTY_URL || "localhost:1999",
  throttle: 16, //no need to exploictly add this, since it's the default
});

export const { RoomProvider, useOthers, useOther, useSelf, useMyPresence } =
  createRoomContext<Presence, UserMeta>(client);
