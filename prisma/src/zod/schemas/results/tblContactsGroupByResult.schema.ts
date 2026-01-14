import * as z from 'zod';
export const tblContactsGroupByResultSchema = z.array(z.object({
  ContactID: z.number().int(),
  PhoneNumber: z.string(),
  FirstName: z.string(),
  MiddleName: z.string(),
  LastName: z.string(),
  Informal: z.number().int(),
  Fax: z.string(),
  Email: z.string(),
  UserMod: z.string(),
  DateMod: z.date(),
  ContactPosition: z.string(),
  Accountant: z.number().int(),
  _count: z.object({
    ContactID: z.number(),
    PhoneNumber: z.number(),
    FirstName: z.number(),
    MiddleName: z.number(),
    LastName: z.number(),
    Informal: z.number(),
    Fax: z.number(),
    Email: z.number(),
    UserMod: z.number(),
    DateMod: z.number(),
    ContactPosition: z.number(),
    Accountant: z.number(),
    tblCustContacts: z.number()
  }).optional(),
  _sum: z.object({
    ContactID: z.number().nullable(),
    Informal: z.number().nullable(),
    Accountant: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    ContactID: z.number().nullable(),
    Informal: z.number().nullable(),
    Accountant: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ContactID: z.number().int().nullable(),
    PhoneNumber: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    LastName: z.string().nullable(),
    Informal: z.number().int().nullable(),
    Fax: z.string().nullable(),
    Email: z.string().nullable(),
    UserMod: z.string().nullable(),
    DateMod: z.date().nullable(),
    ContactPosition: z.string().nullable(),
    Accountant: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    ContactID: z.number().int().nullable(),
    PhoneNumber: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    LastName: z.string().nullable(),
    Informal: z.number().int().nullable(),
    Fax: z.string().nullable(),
    Email: z.string().nullable(),
    UserMod: z.string().nullable(),
    DateMod: z.date().nullable(),
    ContactPosition: z.string().nullable(),
    Accountant: z.number().int().nullable()
  }).nullable().optional()
}));