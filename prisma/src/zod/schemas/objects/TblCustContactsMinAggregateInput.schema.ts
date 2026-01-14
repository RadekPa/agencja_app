import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  DefaultContact: z.literal(true).optional(),
  TypeOfContact: z.literal(true).optional(),
  Phone: z.literal(true).optional(),
  CellPhone: z.literal(true).optional(),
  Fax: z.literal(true).optional(),
  Email: z.literal(true).optional(),
  IsSameAsClient: z.literal(true).optional()
}).strict();
export const TblCustContactsMinAggregateInputObjectSchema: z.ZodType<Prisma.TblCustContactsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustContactsMinAggregateInputType>;
export const TblCustContactsMinAggregateInputObjectZodSchema = makeSchema();
