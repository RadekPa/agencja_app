import * as z from 'zod';
export const tblAuthorsAggregateResultSchema = z.object({  _count: z.object({
    AuthorID: z.number(),
    FullName: z.number(),
    FirstName: z.number(),
    MiddleName: z.number(),
    LastName: z.number(),
    Suffix: z.number(),
    PenName: z.number(),
    UserMod: z.number(),
    DateMod: z.number(),
    Remarks: z.number(),
    tblTitAuthors: z.number()
  }).optional(),
  _sum: z.object({
    AuthorID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AuthorID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AuthorID: z.number().int().nullable(),
    FullName: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    LastName: z.string().nullable(),
    Suffix: z.string().nullable(),
    PenName: z.string().nullable(),
    UserMod: z.string().nullable(),
    DateMod: z.date().nullable(),
    Remarks: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AuthorID: z.number().int().nullable(),
    FullName: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    LastName: z.string().nullable(),
    Suffix: z.string().nullable(),
    PenName: z.string().nullable(),
    UserMod: z.string().nullable(),
    DateMod: z.date().nullable(),
    Remarks: z.string().nullable()
  }).nullable().optional()});