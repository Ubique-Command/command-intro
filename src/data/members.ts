import { memberPageModules } from "@/member-pages";

export const members = memberPageModules.map(({ member }) => member);

export function findMemberByIdentifier(identifier: string) {
  return members.find((member) => {
    if (member.slug) {
      return member.slug === identifier;
    }

    return member.name === identifier;
  });
}
