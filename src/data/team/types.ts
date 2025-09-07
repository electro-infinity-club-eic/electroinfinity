export type SocialLinks = {
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  image?: string;
  deptOrBranch?: string;
  social?: SocialLinks;
};

export type TeamYear = {
  year: string;
  facultyAdvisors: Member[];
  founder?: Member[];
  coreCommittee: Member[];
};
