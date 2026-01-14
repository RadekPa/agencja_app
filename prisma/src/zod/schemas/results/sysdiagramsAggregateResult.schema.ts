import * as z from 'zod';
export const sysdiagramsAggregateResultSchema = z.object({  _count: z.object({
    name: z.number(),
    principal_id: z.number(),
    diagram_id: z.number(),
    version: z.number(),
    definition: z.number()
  }).optional(),
  _sum: z.object({
    principal_id: z.number().nullable(),
    diagram_id: z.number().nullable(),
    version: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    principal_id: z.number().nullable(),
    diagram_id: z.number().nullable(),
    version: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    name: z.string().nullable(),
    principal_id: z.number().int().nullable(),
    diagram_id: z.number().int().nullable(),
    version: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    name: z.string().nullable(),
    principal_id: z.number().int().nullable(),
    diagram_id: z.number().int().nullable(),
    version: z.number().int().nullable()
  }).nullable().optional()});