import * as z from 'zod';
export const tblPubLocalAggregateResultSchema = z.object({  _count: z.object({
    PubLocalID: z.number(),
    AgrID: z.number(),
    LocalTitle: z.number(),
    PubDate: z.number(),
    LocalISBN: z.number(),
    Printrun: z.number(),
    LocalEdition: z.number(),
    tblAgreements: z.number()
  }).optional(),
  _sum: z.object({
    PubLocalID: z.number().nullable(),
    AgrID: z.number().nullable(),
    Printrun: z.number().nullable(),
    LocalEdition: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PubLocalID: z.number().nullable(),
    AgrID: z.number().nullable(),
    Printrun: z.number().nullable(),
    LocalEdition: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PubLocalID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    LocalTitle: z.string().nullable(),
    PubDate: z.date().nullable(),
    LocalISBN: z.string().nullable(),
    Printrun: z.number().int().nullable(),
    LocalEdition: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    PubLocalID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    LocalTitle: z.string().nullable(),
    PubDate: z.date().nullable(),
    LocalISBN: z.string().nullable(),
    Printrun: z.number().int().nullable(),
    LocalEdition: z.number().int().nullable()
  }).nullable().optional()});