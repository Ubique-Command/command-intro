import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "zeonzwa01",
  name: "박세호",
  role: "IT 사역팀 · Web Learner",
  bio: "새로운 기술을 배우고, 작은 시도를 실제 화면으로 완성해 가는 팀원입니다.",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  email: "zeonzwa01@gmail.com",
  strengths: ["새로운 것 배우기", "문제 끝까지 파고들기", "기록하고 공유하기"],
};

export default function ZeonzwaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-amber-50">
            <Image
              src={member.image}
              alt="노트북과 디지털 작업 환경"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              preload
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
                새로운 기술을 배우고 직접 만들어 보며 이해하는 과정을 좋아합니다.
                작은 아이디어도 눈에 보이는 결과물로 옮기고, 배운 것과 막힌
                지점을 기록해 팀과 함께 나누고 싶습니다.
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50/60 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                Contact
              </h2>
              <a
                href={`mailto:${member.email}`}
                className="mt-3 inline-block break-all text-base text-slate-900 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
              >
                {member.email}
              </a>
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
