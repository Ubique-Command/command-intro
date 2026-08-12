import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "kim-hana",
  name: "김하나",
  role: "프론트엔드 개발",
  bio: "팀 사이트와 내부 도구의 사용자 경험을 설계하고 구현합니다.",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  email: "hana@example.com",
  strengths: ["Next.js", "디자인 시스템", "접근성"],
};

export default function KimHanaPage() {
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
              Frontend
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              {member.name}
            </h1>
            <p className="mt-3 text-xl text-slate-700">{member.role}</p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              팀이 만드는 화면이 처음 접하는 사용자에게도 어렵지 않도록
              설계합니다. 디자인보다 사용 흐름을 먼저 다듬고, 반복되는 UI는
              단순한 규칙으로 정리해 비전공자도 에이전트와 함께 수정할 수 있게
              만듭니다.
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
