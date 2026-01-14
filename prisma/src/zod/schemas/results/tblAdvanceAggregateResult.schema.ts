import * as z from 'zod';
export const tblAdvanceAggregateResultSchema = z.object({  _count: z.object({
    AdvID: z.number(),
    Inst: z.number(),
    AgrID: z.number(),
    AdvTermId: z.number(),
    AdvTypeId: z.number(),
    Amount: z.number(),
    AdvTermDate: z.number(),
    RoyID: z.number(),
    tblAgreements: z.number()
  }).optional(),
  _sum: z.object({
    AdvID: z.number().nullable(),
    Inst: z.number().nullable(),
    AgrID: z.number().nullable(),
    AdvTermId: z.number().nullable(),
    AdvTypeId: z.number().nullable(),
    Amount: z.number().nullable(),
    RoyID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AdvID: z.number().nullable(),
    Inst: z.number().nullable(),
    AgrID: z.number().nullable(),
    AdvTermId: z.number().nullable(),
    AdvTypeId: z.number().nullable(),
    Amount: z.number().nullable(),
    RoyID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AdvID: z.number().int().nullable(),
    Inst: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    AdvTermId: z.number().int().nullable(),
    AdvTypeId: z.number().int().nullable(),
    Amount: z.number().nullable(),
    AdvTermDate: z.date().nullable(),
    RoyID: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    AdvID: z.number().int().nullable(),
    Inst: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    AdvTermId: z.number().int().nullable(),
    AdvTypeId: z.number().int().nullable(),
    Amount: z.number().nullable(),
    AdvTermDate: z.date().nullable(),
    RoyID: z.number().int().nullable()
  }).nullable().optional()});