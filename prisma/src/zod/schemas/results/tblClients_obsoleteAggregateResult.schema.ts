import * as z from 'zod';
export const tblClients_obsoleteAggregateResultSchema = z.object({  _count: z.object({
    CustID: z.number(),
    RepModeID: z.number(),
    GraalID: z.number(),
    Commission: z.number(),
    DefAgrDoc: z.number(),
    Jurisdiction: z.number(),
    tblCustomers: z.number(),
    dictRepModes: z.number()
  }).optional(),
  _sum: z.object({
    CustID: z.number().nullable(),
    RepModeID: z.number().nullable(),
    GraalID: z.number().nullable(),
    Commission: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CustID: z.number().nullable(),
    RepModeID: z.number().nullable(),
    GraalID: z.number().nullable(),
    Commission: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CustID: z.number().int().nullable(),
    RepModeID: z.number().int().nullable(),
    GraalID: z.number().int().nullable(),
    Commission: z.number().nullable(),
    DefAgrDoc: z.string().nullable(),
    Jurisdiction: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CustID: z.number().int().nullable(),
    RepModeID: z.number().int().nullable(),
    GraalID: z.number().int().nullable(),
    Commission: z.number().nullable(),
    DefAgrDoc: z.string().nullable(),
    Jurisdiction: z.string().nullable()
  }).nullable().optional()});