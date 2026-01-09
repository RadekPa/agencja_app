import * as z from 'zod';
// prettier-ignore
export const AuthorInputSchema = z.object({
    id: z.number().int(),
    fullName: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    middleName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    suffix: z.string().optional().nullable(),
    penName: z.string().optional().nullable(),
    userMod: z.string(),
    dateMod: z.date(),
    remarks: z.string().optional().nullable()
}).strict();

export type AuthorInputType = z.infer<typeof AuthorInputSchema>;
