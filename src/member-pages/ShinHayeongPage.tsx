import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "hayeong8957",
  name: "신하영",
  role: "사역팀 부팀장 / FE",
  bio: "함께 고민하고 성장하는 개발자 신하영입니다.",
  image: "/members/shinhayeong.jpg",
  email: "judy.hayoung.shin@gmail.com",
  strengths: ["Next.js", "디자인 시스템", "접근성"],
};

const profileDetails = [
  { label: "이름", value: "신하영" },
  { label: "생년월일", value: "1999.11.15" },
  { label: "Github", value: "github.com/Hayeong8957" },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/hayeong-shin-074996227/",
  },
];

export default function ShinHayeongPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
            Developer
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
            Shin Hayeong
          </h1>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-stretch">
          <div className="w-full max-w-[280px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_18px_50px_rgba(28,25,23,0.12)]">
              <Image
                src={member.image}
                alt={`${member.name} 프로필 이미지`}
                fill
                className="object-cover"
                sizes="280px"
                priority
              />
            </div>
          </div>

          <div className="flex h-full flex-col justify-between lg:min-h-[373px]">
            <div>
              <p className="text-3xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-4xl">
                &quot;안녕하세요👋 신하영입니다!&quot;
              </p>
              <p className="mt-2 text-lg leading-8 text-stone-500">
                사용자 입장에서 더 직관적이고 편안한 화면을 고민하며, 팀과 함께
                문제를 풀어가는 과정을 좋아합니다. 기술을 배우는 데서 멈추지
                않고 실제로 쓰이는 서비스로 연결하는 개발자로 성장중 입니다.
              </p>
            </div>

            <div className="mt-1">
              {profileDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="border-b border-stone-200 py-4 text-lg leading-8"
                >
                  <span className="font-semibold text-stone-950">
                    {detail.label}
                  </span>
                  <span className="px-2 text-stone-400">|</span>
                  <span className="break-words text-stone-700">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-14 lg:grid-cols-2">
          <div>
            <div className="mt-14">
              <h2 className="text-4xl font-semibold tracking-tight text-stone-950">
                Skills
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Next.js",
                  "React.js",
                  "TypeScript",
                  "ServiceNow",
                  "ITSM",
                  "ITOM",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-stone-100 px-3 py-1.5 text-sm font-semibold text-orange-600"
                  >
                    {skill}
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
