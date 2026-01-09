import * as z from 'zod';
export const AuthorAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    fullName: z.number(),
    firstName: z.number(),
    middleName: z.number(),
    lastName: z.number(),
    suffix: z.number(),
    penName: z.number(),
    userMod: z.number(),
    dateMod: z.number(),
    remarks: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    fullName: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    suffix: z.string().nullable(),
    penName: z.string().nullable(),
    userMod: z.string().nullable(),
    dateMod: z.date().nullable(),
    remarks: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    fullName: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    suffix: z.string().nullable(),
    penName: z.string().nullable(),
    userMod: z.string().nullable(),
    dateMod: z.date().nullable(),
    remarks: z.string().nullable()
  }).nullable().optional()});