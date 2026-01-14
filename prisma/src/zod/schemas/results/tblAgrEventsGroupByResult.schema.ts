import * as z from 'zod';
export const tblAgrEventsGroupByResultSchema = z.array(z.object({
  AgrEventID: z.number(),
  AgrID: z.number().int(),
  AgrEventCode: z.number().int(),
  EventDate: z.date(),
  NoOfCopies: z.number().int(),
  EndDate: z.date(),
  DateMod: z.date(),
  UserMod: z.string(),
  _count: z.object({
    AgrEventID: z.number(),
    AgrID: z.number(),
    AgrEventCode: z.number(),
    EventDate: z.number(),
    NoOfCopies: z.number(),
    EndDate: z.number(),
    DateMod: z.number(),
    UserMod: z.number(),
    tblAgreements: z.number(),
    dictAgrEvents: z.number()
  }).optional(),
  _sum: z.object({
    AgrEventID: z.number().nullable(),
    AgrID: z.number().nullable(),
    AgrEventCode: z.number().nullable(),
    NoOfCopies: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AgrEventID: z.number().nullable(),
    AgrID: z.number().nullable(),
    AgrEventCode: z.number().nullable(),
    NoOfCopies: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AgrEventID: z.number().nullable(),
    AgrID: z.number().int().nullable(),
    AgrEventCode: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable(),
    DateMod: z.date().nullable(),
    UserMod: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AgrEventID: z.number().nullable(),
    AgrID: z.number().int().nullable(),
    AgrEventCode: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable(),
    DateMod: z.date().nullable(),
    UserMod: z.string().nullable()
  }).nullable().optional()
}));