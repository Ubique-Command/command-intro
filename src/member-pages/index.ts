import HongGildongPage, {
  member as hongGildongMember,
} from "@/member-pages/HongGildongPage";
import ShinHayeongPage, {
  member as shinHayeongMember,
} from "@/member-pages/ShinHayeongPage";
import LeeJinhyunPage, {
  member as leeJinhyunMember,
} from "@/member-pages/LeeJinhyunPage";
import ZeonzwaPage, {
  member as zeonzwaMember,
} from "@/member-pages/ZeonzwaPage";
import KoHyeyeonPage, {
  member as koHyeyeonMember,
} from "@/member-pages/KoHyeyeonPage";
import SuhJiminMemeber, {
  member as suhJiminMemeber,
} from "@/member-pages/SuhJiminPage";
import { MemberPageModule } from "@/types/member";

/**
 * memberPageModules 배열은 각 팀원의 소개 페이지와 관련된 정보를 담고 있습니다.
 * 각 객체는 member 속성과 Page 속성을 가지며, member는 팀원의 정보, Page는 해당 팀원의 소개 페이지 컴포넌트를 나타냅니다.
 * 이 배열을 통해 팀원 목록과 각 팀원의 상세 페이지를 동적으로 구성할 수 있습니다.
 */
export const memberPageModules: MemberPageModule[] = [
  {
    member: hongGildongMember,
    Page: HongGildongPage,
  },
  {
    member: shinHayeongMember,
    Page: ShinHayeongPage,
  },
  {
    member: zeonzwaMember,
    Page: ZeonzwaPage,
  },
  {
    member: leeJinhyunMember,
    Page: LeeJinhyunPage,
  },
  {
    member: koHyeyeonMember,
    Page: KoHyeyeonPage,
  },
  {
    member: suhJiminMemeber,
    Page: SuhJiminMemeber,
  },
];

export function findMemberPageModule(identifier: string) {
  return memberPageModules.find(({ member }) => {
    return member.slug === identifier || member.name === identifier;
  });
}
