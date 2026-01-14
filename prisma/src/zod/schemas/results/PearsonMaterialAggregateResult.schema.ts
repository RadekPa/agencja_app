import * as z from 'zod';
export const PearsonMaterialAggregateResultSchema = z.object({  _count: z.object({
    MyNumber: z.number(),
    ContractID: z.number(),
    InvoiceNumber: z.number(),
    InvoiceDate: z.number(),
    Publisher: z.number(),
    Title: z.number(),
    ISBN: z.number(),
    Amount: z.number()
  }).optional(),
  _sum: z.object({
    MyNumber: z.number().nullable(),
    ContractID: z.number().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    MyNumber: z.number().nullable(),
    ContractID: z.number().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    MyNumber: z.number().int().nullable(),
    ContractID: z.number().int().nullable(),
    InvoiceNumber: z.string().nullable(),
    InvoiceDate: z.date().nullable(),
    Publisher: z.string().nullable(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    MyNumber: z.number().int().nullable(),
    ContractID: z.number().int().nullable(),
    InvoiceNumber: z.string().nullable(),
    InvoiceDate: z.date().nullable(),
    Publisher: z.string().nullable(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional()});