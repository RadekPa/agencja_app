import * as z from 'zod';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    name: z.string().nullable(),
    email: z.string(),
    passwordHash: z.string(),
    role: z.string(),
    permissions: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    locale: z.string()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
