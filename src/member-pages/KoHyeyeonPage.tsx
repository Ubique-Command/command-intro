import Image from "next/image";

import { Member } from "@/types/member";

export const member: Member = {
  slug: "ko-hyeyeon",
  name: "고혜연",
  role: "UX기획 / PM",
  bio: "사용자 중심으로 문제를 정의하고 해결하는 기획자입니다.",
  image: "/members/hyeyeon/profile.jpeg",
  email: "ebenezerkhy@naver.com",
  strengths: ["UX", "PM", "문제해결", "🧋"],
};

const Section = ({
  index,
  label,
  title,
  children,
  dark = false,
}: {
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <section
    className={
      dark
        ? "rounded-2xl border border-stone-800 bg-stone-900 px-5 py-6 text-white sm:px-7"
        : "rounded-2xl border border-stone-200 bg-white px-5 py-6 text-stone-900 sm:px-7"
    }
  >
    <p
      className={`text-xs font-semibold tracking-wide ${dark ? "text-stone-400" : "text-stone-500"}`}
    >
      {index} · {label}
    </p>
    <h2 className="mt-2 text-[17px] font-semibold leading-7 tracking-[-0.015em] sm:text-lg">
      {title}
    </h2>
    <div
      className={`mt-4 space-y-4 text-[15px] leading-7 sm:text-base ${dark ? "text-stone-200" : "text-stone-700"}`}
    >
      {children}
    </div>
  </section>
);

export default function KoHyeyeonPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
        <section className="grid gap-7 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 lg:grid-cols-[1.1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-stone-400">
              UBIQUE COMMAND · MEMBER INTRO
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <h1 className="text-[22px] font-bold tracking-[-0.025em] sm:text-2xl">
                고혜연
              </h1>
              <span className="rounded-md border border-stone-300 bg-stone-50 px-2.5 py-1 text-sm font-semibold text-stone-600">
                UX기획 / PM
              </span>
            </div>

            <p className="mt-4 max-w-xl text-[16px] font-medium leading-7 text-stone-800 sm:text-[17px]">
              안녕하세요! <strong>사용자 중심으로 문제를 정의하고 해결하는 기획자</strong> 고혜연입니다 😁
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm text-stone-600">
              <a
                href="mailto:ebenezerkhy@naver.com"
                className="rounded-lg bg-stone-100 px-3 py-2 transition hover:bg-stone-200"
              >
                ✉ ebenezerkhy@naver.com
              </a>
              <a
                href="tel:01053153856"
                className="rounded-lg bg-stone-100 px-3 py-2 transition hover:bg-stone-200"
              >
                ☎ 010-5315-3856
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {member.strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-medium text-stone-600"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
              <Image
                src={member.image}
                alt="고혜연 프로필 사진"
                fill
                className="object-cover object-[center_14%]"
                sizes="(min-width: 1024px) 36vw, 100vw"
                priority
              />
            </div>
            <p className="mt-2 text-[11px] leading-5 text-stone-500">
              (사진은 7kg가 찌기 전... 작년 12월에 찍은 사진이랍니다. 잘 나온 거 올릴게요ㅎ)
            </p>
          </div>
        </section>

        <div className="mt-5 space-y-5">
          <Section index="0" label="교회 안에서의 나는?" title="B그룹 송미셀 소속이에요 🙌">
            <p>
              모태신앙으로 어릴 때부터 쭉 교회를 열심히 다녔는데, 고등학교 때 서울에서 일산으로 이사를 오게 되면서 정 붙일 교회를 못 찾고 신앙적으로 살짝 방황했던 시기가 있었어요.
            </p>
            <p>
              고등학교를 다니는 동안에는 제대로 등록하고 다니는 교회 없이 주일만 지키는(?) 형태의 형식적인 예배만 드렸던 것 같아요.
            </p>
            <p>
              대학교 입학 후에 일산광림교회를 다니게 되었는데 가족들과 계속 대예배만 드리다가, 코로나가 끝나고 조금 지나서 <strong className="font-semibold text-stone-950">2024년부터 청년부에 등록</strong>했고 현재까지 다니고 있어요.
            </p>
          </Section>

          <Section index="1" label="교회 밖에서의 나는?" title="열심히 일하고 있는 신입사원 🐥">
            <p>작년에 롯데면세점 이커머스 부문의 UX기획 신입사원으로 입사해서 원하는 일을 하고 있어요.</p>
            <p>
              신입이지만 회원 쪽 기능과 공통 영역 기능의 기획을 혼자✌️ 담당하고 있답니다.🐥 (출입국정보, 여권정보, 마이롯데 내의 기능들을 주로 다루고 있어요✈️)
            </p>
            <p>시간날 때 AI 스터디도 열심히 하구 있어요.</p>
          </Section>

          <Section index="2" label="어쩌다 기획자?" title="도파민 중독자(?)">
            <p>
              관찰하고 분석하는 걸 좋아해서 사람들이 불편해하는 것들을 캐치하고 해결안을 고민하는 과정 자체를 재밌어하는 것 같아요. 근데 사실 UX기획은 그게 전부인 것 같거든요.😁
            </p>
            <p>
              그리고 내가 생각한 해결안이 실제 눈에 보이는 서비스로 구현되어 실질적인 문제해결로 이어지고 고객에게 전달된다는 것도 너무 신기하고, 재밌고, 뿌듯해서😁 자연스레 기획자를 꿈꾸게 되었어요.
            </p>
            <div className="border-l-2 border-stone-800 bg-stone-100 px-4 py-3 text-sm font-semibold leading-7 text-stone-700 sm:text-[15px]">
              가설 → 만들고 → 결과를 보고 → 다시 가설 → 또 덧붙여 만들고 → 결과를 보고...
            </div>
            <p>차곡차곡 결과를 쌓으면서 문제를 뾰족하게 좁혀가는 과정에 도파민이 도나 봐요.</p>
          </Section>

          <Section index="3" label="어떻게 기획자?" title="도파민 중독자는 원래 행동파(?) 🚀">
            <p>
              학교에서 알려주는 이론 말고 몸으로 배우고 싶어서 인턴에게도 직접 실무를 시키는 IT회사들을 찾아서 지원했었어요. 그리고 졸업 전까지 3개 회사에서 도합 1년 반 정도 실무를 배우면서 빠른 주기의 기능출시/개선을 직접 경험할 수 있었어요.
            </p>
            <p>
              성향도 주어진 업무만 하기보다 계속 의견을 내면서 일을 찾아서 하는 편이라 기획자가 되기 위한 여러 업무 경험을 쌓을 수 있었던 것 같아요.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4 sm:gap-3">
              <Image
                src="/members/hyeyeon/work-1.jpeg"
                alt="업무 경험 이미지 1"
                width={900}
                height={1600}
                className="h-auto w-full"
              />
              <Image
                src="/members/hyeyeon/work-2.jpeg"
                alt="업무 경험 이미지 2"
                width={900}
                height={1600}
                className="h-auto w-full"
              />
              <Image
                src="/members/hyeyeon/work-3.png"
                alt="업무 경험 이미지 3"
                width={710}
                height={1536}
                className="h-auto w-full"
              />
              <Image
                src="/members/hyeyeon/work-4.jpeg"
                alt="업무 경험 이미지 4"
                width={710}
                height={1536}
                className="h-auto w-full"
              />
            </div>
            <p className="text-xs leading-6 text-stone-500">
              기능 출시/개선에서 나아가 인턴 최초로 겸직도 해보고, 부서 내 직원들을 대상으로 세션도 운영하고, 후회없이 정말 열심히 살았던 것 같아요! (초심을 찾아야할텐데요)
            </p>
          </Section>

          <Section
            index="4"
            label="IT사역에 참여하게 된 이유"
            title="‘내가 하는 일을 통해 하나님의 비전을 이룬다는 건 뭘까?’"
            dark
          >
            <p>
              사실 일을 열심히는 하지만, 일을 통해 하나님의 비전을 이룬다는 게 어떤 건지 잘 와닿지 않았던 순간들이 많았던 것 같아요.
            </p>
            <p>
              막 의사, 소방관, 경찰처럼 사명감이 있는 직업이어야 일을 통해 비전을 이룰 수 있다는 편협한 생각이 있었거든요.
            </p>
            <p>
              그래서 돌이켜보면 ‘내가 가진 능력으로는 정말 어려운 사람을 도와주고 살리고 할 수는 없는데 나는 하나님의 나라를 위해 대체 뭘 할 수 있지? 할 수 있는 게 없는 걸까?’ 라는 생각을 하며 회의감을 느낄 때도 있었던 것 같아요.
            </p>

            <div className="border-y border-stone-700 py-4 text-[17px] font-semibold leading-7 text-white sm:text-lg">
              그런데 문득<br />“왜 교회 공동체를 위한 서비스를 만들어볼 생각을 못했지?” 💡
            </div>

            <p>
              이런 생각이 들더라고요. 다만 업계에 크리스찬도 잘 없구 같이 할 사람들을 구하기가 너무 어려워서 마음 속에만 담아두고 있었어요.
            </p>
            <p>
              실제로 지난 겨울 수련회에서 조원들이랑 각자 개인적인 목표에 대해서 나누는 시간에서 저는 ‘기회가 된다면 교회 공동체를 위한 서비스를 만들어보고 싶다’고 나눴었는데요,
            </p>
            <p>
              유비크에 같은 뜻을 가진 분들이 있다는 걸 알게 되어 ‘이건 하나님의 응답이 아닐까?’ 하는 생각으로 함께하게 되었어요.
            </p>
          </Section>

          <Section index="5" label="기대하는 것" title="무엇을 만드느냐만큼, 어떻게 함께하느냐 🤝">
            <p>
              사실 서비스를 오픈하는 것도 의미가 있고 기대가 되지만, 어쩌면 그것보다 이 공동체를 통해 같은 직군 종사자로서 서로의 신앙적 고민들을 나누고 함께 중보하는 과정들이 더 귀할 수 있을 거라고도 생각해요.
            </p>
            <p>
              그리고 어쨌든 서로 다른 방식으로 일했던 사람들이 모여서 서비스를 만든다는 게 막상 쉽지 않을 것 같은데요, 일이 아닌 교회 사역인만큼 항상 하나님을 중심에 두고 오직 하나님께 영광 올려드리는 사역팀이 되면 좋겠어요!
            </p>
            <div className="border-t border-stone-200 pt-4 text-[17px] font-semibold leading-7 text-stone-900 sm:text-lg">
              서비스를 만들어나가는 우리의 모든 과정이<br />
              하나님께 영광 올려드리는 시간이 되기를 기도합니다🙏
            </div>

            <div className="flex justify-center pt-2">
              <Image
                src="/members/hyeyeon/romans-8-28.jpeg"
                alt="로마서 8장 28절 이미지"
                width={900}
                height={900}
                className="h-auto w-full max-w-xl rounded-xl border border-stone-200"
              />
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
