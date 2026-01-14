import * as z from 'zod';
// prettier-ignore
export const tblUsersInputSchema = z.object({
    Login: z.string(),
    FirstName: z.string(),
    MiddleName: z.string().optional().nullable(),
    LastName: z.string(),
    CompanyPosition: z.string().optional().nullable(),
    Birthday: z.date().optional().nullable(),
    Status: z.string(),
    Initials: z.string().optional().nullable(),
    Phone: z.string().optional().nullable(),
    MobilePhone: z.string().optional().nullable(),
    Email: z.string().optional().nullable(),
    Sex: z.string().optional().nullable(),
    Street: z.string().optional().nullable(),
    ZipCode: z.string().optional().nullable(),
    City: z.string().optional().nullable(),
    Country: z.string().optional().nullable(),
    Remarks: z.string().optional().nullable(),
    UserMod: z.string().optional().nullable(),
    DateMod: z.date().optional().nullable(),
    Nameday: z.date().optional().nullable(),
    PersonID: z.number().int().optional().nullable(),
    tblCustUsers: z.array(z.unknown()),
    tblUserAccess: z.array(z.unknown()),
    tblUserParams: z.array(z.unknown())
}).strict();

export type tblUsersInputType = z.infer<typeof tblUsersInputSchema>;
