import * as z from 'zod';
export const tblTitEventsGroupByResultSchema = z.array(z.object({
  TitEventID: z.number(),
  CopyTypeID: z.number().int(),
  EventCode: z.number().int(),
  TitleID: z.number().int(),
  EventDate: z.date(),
  NoOfCopies: z.number().int(),
  EndDate: z.date(),
  _count: z.object({
    TitEventID: z.number(),
    CopyTypeID: z.number(),
    EventCode: z.number(),
    TitleID: z.number(),
    EventDate: z.number(),
    NoOfCopies: z.number(),
    EndDate: z.number(),
    tblTitles: z.number(),
    dictEvents: z.number(),
    dictCopyType: z.number()
  }).optional(),
  _sum: z.object({
    TitEventID: z.number().nullable(),
    CopyTypeID: z.number().nullable(),
    EventCode: z.number().nullable(),
    TitleID: z.number().nullable(),
    NoOfCopies: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TitEventID: z.number().nullable(),
    CopyTypeID: z.number().nullable(),
    EventCode: z.number().nullable(),
    TitleID: z.number().nullable(),
    NoOfCopies: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    TitEventID: z.number().nullable(),
    CopyTypeID: z.number().int().nullable(),
    EventCode: z.number().int().nullable(),
    TitleID: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    TitEventID: z.number().nullable(),
    CopyTypeID: z.number().int().nullable(),
    EventCode: z.number().int().nullable(),
    TitleID: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable()
  }).nullable().optional()
}));