import * as z from 'zod';
export const LocalUserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    passwordHash: z.number(),
    role: z.number(),
    permissions: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    locale: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    passwordHash: z.string().nullable(),
    role: z.string().nullable(),
    permissions: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    locale: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    passwordHash: z.string().nullable(),
    role: z.string().nullable(),
    permissions: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    locale: z.string().nullable()
  }).nullable().optional()});