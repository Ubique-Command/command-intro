import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "lee-jinhyun",
  name: "이진현",
  role: "채린셀 · PM",
  bio: "혼란스러운 세상 속에서 하나님의 뜻으로 중심을 세우는 제품을 만들고 있습니다.",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
  email: "leejinhyun327@gmail.com",
  strengths: ["기획", "운영", "커뮤니케이션"],
};

export default function LeeJinhyunPage() {
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
              채린셀
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              {member.name}
            </h1>
            <p className="mt-3 text-xl text-slate-700">{member.role}</p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              {member.bio}
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                What I do
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-900">
                디자인과 개발을 제외한 나머지 대부분을 맡아, 제품이 아이디어에서
                실제 서비스가 되기까지의 흐름을 책임집니다.
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
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
