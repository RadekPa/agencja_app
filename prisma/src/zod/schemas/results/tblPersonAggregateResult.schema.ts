import * as z from 'zod';
export const tblPersonAggregateResultSchema = z.object({  _count: z.object({
    PersonID: z.number(),
    LastName: z.number(),
    FirstName: z.number(),
    MiddleName: z.number(),
    BirthDate: z.number(),
    PESEL: z.number(),
    Status: z.number(),
    Address1: z.number(),
    Address2: z.number(),
    Zip: z.number(),
    City: z.number(),
    Country: z.number(),
    MobileGRAAL: z.number(),
    MobilePrivate: z.number(),
    ExtGRAAL: z.number(),
    emailGraal: z.number(),
    emailPriv: z.number()
  }).optional(),
  _sum: z.object({
    PersonID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PersonID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PersonID: z.number().int().nullable(),
    LastName: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    BirthDate: z.date().nullable(),
    PESEL: z.string().nullable(),
    Status: z.string().nullable(),
    Address1: z.string().nullable(),
    Address2: z.string().nullable(),
    Zip: z.string().nullable(),
    City: z.string().nullable(),
    Country: z.string().nullable(),
    MobileGRAAL: z.string().nullable(),
    MobilePrivate: z.string().nullable(),
    ExtGRAAL: z.string().nullable(),
    emailGraal: z.string().nullable(),
    emailPriv: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    PersonID: z.number().int().nullable(),
    LastName: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    BirthDate: z.date().nullable(),
    PESEL: z.string().nullable(),
    Status: z.string().nullable(),
    Address1: z.string().nullable(),
    Address2: z.string().nullable(),
    Zip: z.string().nullable(),
    City: z.string().nullable(),
    Country: z.string().nullable(),
    MobileGRAAL: z.string().nullable(),
    MobilePrivate: z.string().nullable(),
    ExtGRAAL: z.string().nullable(),
    emailGraal: z.string().nullable(),
    emailPriv: z.string().nullable()
  }).nullable().optional()});