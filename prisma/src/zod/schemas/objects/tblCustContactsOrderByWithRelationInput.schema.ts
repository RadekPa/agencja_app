import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema';
import { tblContactsOrderByWithRelationInputObjectSchema as tblContactsOrderByWithRelationInputObjectSchema } from './tblContactsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  DefaultContact: SortOrderSchema.optional(),
  TypeOfContact: SortOrderSchema.optional(),
  Phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CellPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Fax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IsSameAsClient: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional(),
  tblContacts: z.lazy(() => tblContactsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblCustContactsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblCustContactsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsOrderByWithRelationInput>;
export const tblCustContactsOrderByWithRelationInputObjectZodSchema = makeSchema();
