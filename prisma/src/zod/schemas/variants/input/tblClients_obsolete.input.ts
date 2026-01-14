import * as z from 'zod';
// prettier-ignore
export const tblClients_obsoleteInputSchema = z.object({
    CustID: z.number().int(),
    RepModeID: z.number().int().optional().nullable(),
    GraalID: z.number().int().optional().nullable(),
    Commission: z.number().optional().nullable(),
    DefAgrDoc: z.string().optional().nullable(),
    Jurisdiction: z.string().optional().nullable(),
    tblCustomers: z.unknown(),
    dictRepModes: z.unknown().optional().nullable()
}).strict();

export type tblClients_obsoleteInputType = z.infer<typeof tblClients_obsoleteInputSchema>;
