import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "limhyeongmuk",
  name: "임형묵",
  role: "AI developer",
  bio: "포기하지 않는 낙천적인 AI 개발자 임형묵입니다.",
  image: "/members/limhyeongmuk.jpg",
  email: "gudanr3195@gmail.com",
  strengths: ["AI", "문제 해결", "배움"],
};

const profileDetails = [
  { label: "생년월일", value: "2000.11.22" },
  { label: "Github", value: "github.com/Hyeongmuk-00" },
];

export default function LimHyeongmukPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            형묵셀
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
            임형묵
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
              <p className="mt-2 text-lg leading-8 text-stone-500">
                Vision AI 연구자이며, 다양한 기술을 활용하여 문제를 해결하고
                제안하는 개발자입니다. 포기하지 않고 끝까지 문제를 해결하는 것을
                좋아하며, 팀과 함께 성장하는 개발자가 되기 위해 노력하고
                있습니다.
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
                Research Interests
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {[
                  "Deep Learning",
                  "Image Anomaly Detection",
                  "Video Anomaly Detection",
                  "Vision AI",
                  "Industrial AI",
                ].map((interest) => (
                  <li
                    key={interest}
                    className="rounded-md bg-stone-100 px-3 py-1.5 text-sm font-semibold text-stone-600"
                  >
                    {interest}
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
