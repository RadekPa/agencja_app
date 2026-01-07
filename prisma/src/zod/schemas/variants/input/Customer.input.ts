import * as z from 'zod';
// prettier-ignore
export const CustomerInputSchema = z.object({
    id: z.number().int(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    postalCode: z.string().optional().nullable(),
    country: z.number().int().optional().nullable(),
    nip: z.string().optional().nullable(),
    regon: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    createdAt: z.date().optional().nullable(),
    invoices: z.array(z.unknown())
}).strict();

export type CustomerInputType = z.infer<typeof CustomerInputSchema>;
