import * as z from 'zod';
// prettier-ignore
export const CustomerResultSchema = z.object({
    id: z.number().int(),
    custAbb: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    postalCode: z.string().nullable(),
    country: z.number().int().nullable(),
    nip: z.string().nullable(),
    regon: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    invoices: z.array(z.unknown()),
    simpleInvoices: z.array(z.unknown())
}).strict();

export type CustomerResultType = z.infer<typeof CustomerResultSchema>;
