import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "hong-gildong",
  name: "고정훈",
  role: "사역팀 팀장 / 제품 기획",
  bio: "사역 목표를 디지털 서비스 구조로 연결하고 팀의 우선순위를 조율합니다.",
  image: "/members/gojeonghoon.jpg",
  email: "jeonghoonko@upstage.ai",
  strengths: ["로드맵 수립", "조직 커뮤니케이션", "서비스 기획"],
};

function CodeLine({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <span className="w-8 shrink-0 select-none pr-4 text-right text-stone-600">
        {n}
      </span>
      <span className="whitespace-pre-wrap break-all">{children}</span>
    </div>
  );
}

const kw = "text-fuchsia-400";
const key = "text-sky-400";
const str = "text-emerald-400";
const punct = "text-stone-500";
const comment = "text-stone-500 italic";

export default function HongGildongPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-stone-400">
                profile.jpg
              </span>
            </div>
            <div className="relative aspect-[4/5] bg-stone-900">
              <Image
                src={member.image}
                alt={`${member.name} 프로필 이미지`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-stone-400">
                {member.slug}.ts
              </span>
            </div>

            <div className="overflow-x-auto px-4 py-6 font-mono text-sm leading-7">
              <CodeLine n={1}>
                <span className={comment}>// {member.bio}</span>
              </CodeLine>
              <CodeLine n={2}>
                <span className={kw}>const</span> member ={" "}
                <span className={punct}>{"{"}</span>
              </CodeLine>
              <CodeLine n={3}>
                {"  "}
                <span className={key}>name</span>
                <span className={punct}>:</span>{" "}
                <span className={str}>&quot;{member.name}&quot;</span>
                <span className={punct}>,</span>
              </CodeLine>
              <CodeLine n={4}>
                {"  "}
                <span className={key}>role</span>
                <span className={punct}>:</span>{" "}
                <span className={str}>&quot;{member.role}&quot;</span>
                <span className={punct}>,</span>
              </CodeLine>
              <CodeLine n={5}>
                {"  "}
                <span className={key}>focus</span>
                <span className={punct}>:</span>{" "}
                <span className={punct}>[</span>
              </CodeLine>
              {member.strengths.map((strength, index) => (
                <CodeLine n={6 + index} key={strength}>
                  {"    "}
                  <span className={str}>&quot;{strength}&quot;</span>
                  <span className={punct}>,</span>
                </CodeLine>
              ))}
              <CodeLine n={6 + member.strengths.length}>
                {"  "}
                <span className={punct}>]</span>
                <span className={punct}>,</span>
              </CodeLine>
              <CodeLine n={7 + member.strengths.length}>
                {"  "}
                <span className={key}>contact</span>
                <span className={punct}>:</span>{" "}
                <span className={str}>&quot;{member.email}&quot;</span>
                <span className={punct}>,</span>
              </CodeLine>
              <CodeLine n={8 + member.strengths.length}>
                <span className={punct}>{"};"}</span>
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-amber-300 align-middle" />
              </CodeLine>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
