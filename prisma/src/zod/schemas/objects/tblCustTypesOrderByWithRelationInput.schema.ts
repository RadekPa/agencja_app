import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictCustTypesOrderByWithRelationInputObjectSchema as dictCustTypesOrderByWithRelationInputObjectSchema } from './dictCustTypesOrderByWithRelationInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustTypeID: SortOrderSchema.optional(),
  dictCustTypes: z.lazy(() => dictCustTypesOrderByWithRelationInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblCustTypesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblCustTypesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesOrderByWithRelationInput>;
export const tblCustTypesOrderByWithRelationInputObjectZodSchema = makeSchema();
