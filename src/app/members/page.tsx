import { MemberCard } from "@/components/MemberCard";
import { members } from "@/data/members";

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#f2ece2] text-stone-950">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
              Members
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              IT사역팀과 함께하는 사람들
            </h1>
          </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => (
            <MemberCard
              key={member.slug ?? member.name}
              member={member}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
