import * as z from 'zod';
export const ContactGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  phoneNumber: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  informal: z.number().int(),
  fax: z.string(),
  email: z.string(),
  userMod: z.string(),
  dateMod: z.date(),
  contactPosition: z.string(),
  accountant: z.number().int(),
  _count: z.object({
    id: z.number(),
    phoneNumber: z.number(),
    firstName: z.number(),
    middleName: z.number(),
    lastName: z.number(),
    informal: z.number(),
    fax: z.number(),
    email: z.number(),
    userMod: z.number(),
    dateMod: z.number(),
    contactPosition: z.number(),
    accountant: z.number(),
    tblCustContacts: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    informal: z.number().nullable(),
    accountant: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    informal: z.number().nullable(),
    accountant: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    phoneNumber: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    informal: z.number().int().nullable(),
    fax: z.string().nullable(),
    email: z.string().nullable(),
    userMod: z.string().nullable(),
    dateMod: z.date().nullable(),
    contactPosition: z.string().nullable(),
    accountant: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    phoneNumber: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    informal: z.number().int().nullable(),
    fax: z.string().nullable(),
    email: z.string().nullable(),
    userMod: z.string().nullable(),
    dateMod: z.date().nullable(),
    contactPosition: z.string().nullable(),
    accountant: z.number().int().nullable()
  }).nullable().optional()
}));