import * as z from 'zod';
export const tblMaterialGroupByResultSchema = z.array(z.object({
  MatID: z.number().int(),
  AgrID: z.number().int(),
  MatTypeID: z.number().int(),
  Amount: z.number(),
  Currency: z.string(),
  Remarks: z.string(),
  RequestDate: z.date(),
  ReceiveDate: z.date(),
  _count: z.object({
    MatID: z.number(),
    AgrID: z.number(),
    MatTypeID: z.number(),
    Amount: z.number(),
    Currency: z.number(),
    Remarks: z.number(),
    RequestDate: z.number(),
    ReceiveDate: z.number()
  }).optional(),
  _sum: z.object({
    MatID: z.number().nullable(),
    AgrID: z.number().nullable(),
    MatTypeID: z.number().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    MatID: z.number().nullable(),
    AgrID: z.number().nullable(),
    MatTypeID: z.number().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    MatID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    MatTypeID: z.number().int().nullable(),
    Amount: z.number().nullable(),
    Currency: z.string().nullable(),
    Remarks: z.string().nullable(),
    RequestDate: z.date().nullable(),
    ReceiveDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    MatID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    MatTypeID: z.number().int().nullable(),
    Amount: z.number().nullable(),
    Currency: z.string().nullable(),
    Remarks: z.string().nullable(),
    RequestDate: z.date().nullable(),
    ReceiveDate: z.date().nullable()
  }).nullable().optional()
}));