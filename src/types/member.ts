import { ComponentType } from "react";

export interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  strengths: string[];
  slug: string;
}

export interface MemberPageModule {
  member: Member;
  Page: ComponentType;
}
