import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustContactsOrderByRelationAggregateInputObjectSchema as tblCustContactsOrderByRelationAggregateInputObjectSchema } from './tblCustContactsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  PhoneNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FirstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MiddleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Informal: SortOrderSchema.optional(),
  Fax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  ContactPosition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Accountant: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblCustContacts: z.lazy(() => tblCustContactsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblContactsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblContactsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsOrderByWithRelationInput>;
export const tblContactsOrderByWithRelationInputObjectZodSchema = makeSchema();
