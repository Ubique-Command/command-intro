import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "kim-dohoon",
  name: "김도훈",
  role: "기획",
  bio: "열심히 배우고 성장하는 응용통계학과 재학중인 대학생입니다.",
  image: "/members/kimdohoon.jpg",
  email: "andy020326@naver.com",
  strengths: ["기획", "통계", "데이터 분석"],
};

export default function KimDohoonPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-amber-50">
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
              IT사역팀
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              {member.name}
            </h1>
            <p className="mt-3 text-xl text-slate-700">{member.role}</p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              {member.bio}
            </p>

            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50/60 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                Role
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-900">
                아이디어를 정리하고 방향을 설계하는 기획을 맡고 있습니다.
                통계학을 공부하며 데이터를 근거로 생각하는 습관을 팀 작업에도
                녹여내려 하고 있습니다.
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50/60 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                Contact
              </h2>
              <p className="mt-3 text-base text-slate-900">{member.email}</p>
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50/60 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                Focus
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {member.strengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white"
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
