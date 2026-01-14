import * as z from 'zod';
// prettier-ignore
export const tblClients_obsoleteResultSchema = z.object({
    CustID: z.number().int(),
    RepModeID: z.number().int().nullable(),
    GraalID: z.number().int().nullable(),
    Commission: z.number().nullable(),
    DefAgrDoc: z.string().nullable(),
    Jurisdiction: z.string().nullable(),
    tblCustomers: z.unknown(),
    dictRepModes: z.unknown().nullable()
}).strict();

export type tblClients_obsoleteResultType = z.infer<typeof tblClients_obsoleteResultSchema>;
