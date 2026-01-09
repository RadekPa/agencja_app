import * as z from 'zod';
// prettier-ignore
export const AuthorResultSchema = z.object({
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

export type AuthorResultType = z.infer<typeof AuthorResultSchema>;
