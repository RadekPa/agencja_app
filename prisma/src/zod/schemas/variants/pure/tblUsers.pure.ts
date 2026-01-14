import * as z from 'zod';
// prettier-ignore
export const tblUsersModelSchema = z.object({
    Login: z.string(),
    FirstName: z.string(),
    MiddleName: z.string().nullable(),
    LastName: z.string(),
    CompanyPosition: z.string().nullable(),
    Birthday: z.date().nullable(),
    Status: z.string(),
    Initials: z.string().nullable(),
    Phone: z.string().nullable(),
    MobilePhone: z.string().nullable(),
    Email: z.string().nullable(),
    Sex: z.string().nullable(),
    Street: z.string().nullable(),
    ZipCode: z.string().nullable(),
    City: z.string().nullable(),
    Country: z.string().nullable(),
    Remarks: z.string().nullable(),
    UserMod: z.string().nullable(),
    DateMod: z.date().nullable(),
    Nameday: z.date().nullable(),
    PersonID: z.number().int().nullable(),
    tblCustUsers: z.array(z.unknown()),
    tblUserAccess: z.array(z.unknown()),
    tblUserParams: z.array(z.unknown())
}).strict();

export type tblUsersPureType = z.infer<typeof tblUsersModelSchema>;
