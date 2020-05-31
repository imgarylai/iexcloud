type IssueType =
  | "ad"
  | "re"
  | "ce"
  | "si"
  | "lp"
  | "cs"
  | "et"
  | "wt"
  | "rt"
  | "ut"
  | "temp"
  | null
  | string;

export interface Company {
  readonly symbol: string;
  readonly companyName: string;
  readonly employees: number;
  readonly exchange: string;
  readonly industry: string;
  readonly website: string;
  readonly description: string;
  readonly CEO: string;
  readonly securityName: string;
  readonly issueType: IssueType;
  readonly sector: string;
  readonly primarySicCode: string;
  readonly tags: [];
  readonly address: string;
  readonly address2: string;
  readonly state: string;
  readonly city: string;
  readonly zip: string;
  readonly country: string;
  readonly phone: string;
}
