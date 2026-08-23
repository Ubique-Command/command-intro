import Image from "next/image";

import { Member } from "@/types/member";
// 멤버 객체? 컴포넌트? - 데이터 채워넣기
export const member: Member = {
  slug: "jimin-suh",
  name: "서지민",
  role: "팀원 / 풀스택(이 되고싶은)",
  bio: `주니어 개발자, 주니어 신앙을 가진 Command 서지민입니다.
목표 : 주신 달란트로 팀에 기여하기.`,
  image: "https://img.onnada.com/2023/1011/thumb_991469724_7b61a7dd_385_p0.png",
  email: "sjmrabbit@naver.com",
  strengths: ["벡엔드, DB, AI", "적극적인 의견 제시", "백엔드"],
};
// 신앙
export const faith = {
  duration: "모태신앙",
  church: "일산광림교회",
  role: "경빈셀 셀원",
  verse: {
    reference: "시편 23:4",
    content:
      "내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다",
  },
};
// 기술 - 언어, 프레임워크, DB, DevOps, OA 등을 공유해 업무분담에 도움되기
export const skills = {
  Language: ["Java", "JavaScript", "Python"],
  Framework: ["Devon MGT", "Spring Boot", "Vue3"],
  DB: ["Oracle", "MySQL", "Redis", "MongoDB"],
  DevOps: ["Docker", "Kafka", "Linux", "Jenkins"],
  OA: ["Notion", "Excel"],
};
// 경험 - 나의 경험을 공유해 업무분담에 도움되기
export const experiences = [
  {
    company: "농협정보시스템",
    startDate: "2024.12.23",
    endDate: "현재",
    description: "농작물재해보험 계약 및 인수관리 기간계 시스템 개발 및 운영",
    skills: ["Java", "Devon MGT", "Javascript", "UXStudio", "Oracle"],
  },
  {
    company: "SSAFY",
    startDate: "2024.01.01",
    endDate: "2024.12.31",
    description: "Java / Spring 기반 웹 개발 및 팀 프로젝트 수행",
    skills: [
      "Java",
      "Spring Boot",
      "Vue3",
      "MySQL",
      "Docker",
      "Jenkins",
      "Nginx",
    ],
  },
  {
    company: "학부연구생",
    startDate: "2023.07.01",
    endDate: "2024.02.20",
    description:
      "LLM 애플리케이션의 악성 한국어 프롬프트 주입 공격에 대한 유효성 분석 연구",
    skills: ["Python", "LLM"],
    paperTitle:
      "LLM 애플리케이션에서 악성 한국어 프롬프트 주입 공격의 유효성 분석",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003089525",
  },
];
// 자격
export const certifications = [
  {
    name: "SQLD",
    organization: "한국데이터산업진흥원",
    date: "2024.12.13",
  },
  {
    name: "ADsP",
    organization: "한국데이터산업진흥원",
    date: "2023.09.15",
  },
  {
    name: "정보처리기사",
    organization: "한국산업인력공단",
    date: "2022.11.25",
  },
];

export default function SuhJiminPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
        {/* 멤버 영역 */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src={member.image}
              alt={`${member.name} 최애 캐릭터(프리렌)`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Team Partener
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              {member.name}
            </h1>
            <p className="mt-3 text-xl text-slate-700">{member.role}</p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              사회에서 2년차 개발자로, 보험사 농작물 계약 기간계 <br />
              (회사 내부 서비스) 운영 및 유지보수 업무를 맡고 있습니다.
              <br /> 교회에서 모태신앙 및 22년째 일산광림교회 신도로,
              <br /> 경빈셀에서 셀원으로 매주 예배를 성실히 드리고 있습니다.
              <br />
              TMI) 본 전공은 수학이었는데, 취업난이 예상되어 급하게 <br />
              소프트웨어 복수전공 진행했습니다. <br />
              학부연구생, 졸업 후 부트캠프 1년 거쳐 현재 재직중입니다. <br />
              (이직을 강렬히 원하고 있습니다.)
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
        {/* 나의 신앙 영역 */}
        <div className="mt-12 rounded-3xl">
          <p className="text-lg font-semibold uppercase tracking-[0.24em] text-cyan-700">
            My Faith
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-amber-300 p-6">
              <h3 className="text-lg font-semibold text-slate-900">신앙생활</h3>

              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600 ">
                <p>
                  <span className="font-semibold text-slate-900">신앙생활</span>{" "}
                  {faith.duration}
                </p>

                <p>
                  <span className="font-semibold text-slate-900">교회</span>{" "}
                  {faith.church}
                </p>

                <p>
                  <span className="font-semibold text-slate-900">소속</span>{" "}
                  {faith.role}
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-amber-300 p-6 ">
              <h3 className="text-lg font-semibold text-slate-900">말씀</h3>

              <p className="mt-4 text-base font-medium leading-7 text-slate-800">
                "{faith.verse.content}"
              </p>

              <p className="mt-3 text-sm font-semibold text-slate-800">
                — {faith.verse.reference}
              </p>
            </div>
          </div>
        </div>
        {/* 스킬 영역 */}
        <div className="mt-12">
          <p className="text-lg font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Skills
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl bg-slate-50 p-6 transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 경험 영역 */}
        <div className="mt-12">
          <p className="text-lg font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Experience
          </p>
          <div className="mt-8 space-y-6">
            {experiences.map((experience) => (
              <div
                key={experience.company}
                className="rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {experience.company}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {experience.startDate} ~ {experience.endDate}
                </p>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1 text-sm text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-baseline gap-4">
                  {experience.paperTitle && (
                    <p className="text-sm font-medium leading-6 text-slate-800">
                      {experience.paperTitle}
                    </p>
                  )}

                  {experience.link && (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-medium leading-6 text-slate-700 shadow-sm transition hover:bg-slate-100"
                    >
                      논문 보기 ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 자격 영역 */}
        <div className="mt-12">
          <p className="text-lg font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Experience
          </p>
          <div className="mt-8 space-y-6">
            {certifications.map((certification) => (
              <div
                key={certification.name}
                className="rounded-2xl bg-slate-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {certification.name} ( {certification.organization} )
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {certification.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
