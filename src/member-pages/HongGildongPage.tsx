import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "hong-gildong",
  name: "홍길동",
  role: "팀 리드 / 제품 기획",
  bio: "사역 목표를 디지털 서비스 구조로 연결하고 팀의 우선순위를 조율합니다.",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  email: "gildong@example.com",
  strengths: ["로드맵 수립", "조직 커뮤니케이션", "서비스 기획"],
};

export default function HongGildongPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src={member.image}
              alt={`${member.name} 프로필 이미지`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Team Lead
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              {member.name}
            </h1>
            <p className="mt-3 text-xl text-slate-700">{member.role}</p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              제품 방향과 사역 현장의 요구를 연결해 팀이 어디에 집중해야 하는지
              정리합니다. 새로운 기능보다 실제 운영에 필요한 흐름을 먼저
              구조화하고, 팀이 작게 만들고 빠르게 검증할 수 있도록 기준을
              세웁니다.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Contact
              </h2>
              <p className="mt-3 text-base text-slate-900">{member.email}</p>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Focus
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {member.strengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white"
                  >
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
