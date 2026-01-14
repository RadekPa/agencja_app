import * as z from 'zod';
export const tblSubmEventsAggregateResultSchema = z.object({  _count: z.object({
    SubmEventID: z.number(),
    SubmID: z.number(),
    EventCode: z.number(),
    EventDate: z.number(),
    NoOfCopies: z.number(),
    EndDate: z.number(),
    tblSubmissions: z.number(),
    dictEvents: z.number()
  }).optional(),
  _sum: z.object({
    SubmEventID: z.number().nullable(),
    SubmID: z.number().nullable(),
    EventCode: z.number().nullable(),
    NoOfCopies: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    SubmEventID: z.number().nullable(),
    SubmID: z.number().nullable(),
    EventCode: z.number().nullable(),
    NoOfCopies: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    SubmEventID: z.number().nullable(),
    SubmID: z.number().int().nullable(),
    EventCode: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    SubmEventID: z.number().nullable(),
    SubmID: z.number().int().nullable(),
    EventCode: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable()
  }).nullable().optional()});