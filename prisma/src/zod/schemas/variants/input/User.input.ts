import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    name: z.string().optional().nullable(),
    email: z.string(),
    passwordHash: z.string(),
    role: z.string(),
    permissions: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    locale: z.string()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
