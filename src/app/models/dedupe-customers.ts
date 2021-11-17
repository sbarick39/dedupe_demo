export interface DedupeCustomers {
    primaryRelationOfficer: number;
    dedupReq: boolean;
    blackListReq: boolean;
    dedup: DedupUser[]; 
}


export interface DedupUser {
    cif: number;
    categoryCode: string;
    defaultBranch: string;
    firstName: string;
    lastName: string;
    shortName: string;
    dateofBirth: Date;
    custPAN: string;
    sector: string;
}