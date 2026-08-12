import Image from "next/image";
import Link from "next/link";

import { Member } from "@/types/member";

interface MemberCardProps {
  member: Member;
  index: number;
}

export function MemberCard({ member, index }: MemberCardProps) {
  const identifier = member.slug ?? member.name;

  return (
    <Link
      href={`/members/${identifier}`}
      className="group overflow-hidden rounded-[2rem] border border-stone-300/70 bg-white/80 shadow-[0_20px_60px_rgba(28,25,23,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(28,25,23,0.14)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={member.image}
          alt={`${member.name} 프로필 이미지`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
          <span className="rounded-full bg-stone-950/75 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur">
            0{index + 1}
          </span>
          <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            PROFILE
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          {member.role}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
          {member.name}
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-stone-600">
          {member.bio}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
          <span className="text-sm font-medium text-stone-500">상세 보기</span>
          <span className="text-lg text-stone-950 transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
