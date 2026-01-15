import * as z from 'zod';
export const tblCustContactsGroupByResultSchema = z.array(z.object({
  ContactID: z.number().int(),
  CustID: z.number().int(),
  DefaultContact: z.number().int(),
  TypeOfContact: z.number().int(),
  Phone: z.string(),
  CellPhone: z.string(),
  Fax: z.string(),
  Email: z.string(),
  IsSameAsClient: z.boolean(),
  _count: z.object({
    ContactID: z.number(),
    CustID: z.number(),
    DefaultContact: z.number(),
    TypeOfContact: z.number(),
    Phone: z.number(),
    CellPhone: z.number(),
    Fax: z.number(),
    Email: z.number(),
    IsSameAsClient: z.number(),
    tblCustomers: z.number(),
    contact: z.number()
  }).optional(),
  _sum: z.object({
    ContactID: z.number().nullable(),
    CustID: z.number().nullable(),
    DefaultContact: z.number().nullable(),
    TypeOfContact: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    ContactID: z.number().nullable(),
    CustID: z.number().nullable(),
    DefaultContact: z.number().nullable(),
    TypeOfContact: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ContactID: z.number().int().nullable(),
    CustID: z.number().int().nullable(),
    DefaultContact: z.number().int().nullable(),
    TypeOfContact: z.number().int().nullable(),
    Phone: z.string().nullable(),
    CellPhone: z.string().nullable(),
    Fax: z.string().nullable(),
    Email: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    ContactID: z.number().int().nullable(),
    CustID: z.number().int().nullable(),
    DefaultContact: z.number().int().nullable(),
    TypeOfContact: z.number().int().nullable(),
    Phone: z.string().nullable(),
    CellPhone: z.string().nullable(),
    Fax: z.string().nullable(),
    Email: z.string().nullable()
  }).nullable().optional()
}));