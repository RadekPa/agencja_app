import * as z from 'zod';
// prettier-ignore
export const AuthorModelSchema = z.object({
    id: z.number().int(),
    fullName: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    suffix: z.string().nullable(),
    penName: z.string().nullable(),
    userMod: z.string(),
    dateMod: z.date(),
    remarks: z.string().nullable()
}).strict();

export type AuthorPureType = z.infer<typeof AuthorModelSchema>;
