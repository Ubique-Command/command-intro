import { notFound } from "next/navigation";

import { members } from "@/data/members";
import { findMemberPageModule } from "@/member-pages";

interface MemberDetailPageProps {
  params: Promise<{
    name: string;
  }>;
}

function decodeMemberParam(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function generateStaticParams() {
  return members.map((member) => ({
    name: member.slug ?? member.name,
  }));
}

export default async function MemberDetailPage({
  params,
}: MemberDetailPageProps) {
  const { name } = await params;
  const identifier = decodeMemberParam(name);
  const memberModule = findMemberPageModule(identifier);

  if (!memberModule) {
    notFound();
  }

  const Page = memberModule.Page;

  return <Page />;
}
