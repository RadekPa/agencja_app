import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictTitMainClassOrderByWithRelationInputObjectSchema as dictTitMainClassOrderByWithRelationInputObjectSchema } from './dictTitMainClassOrderByWithRelationInput.schema';
import { dictTitSubClassOrderByWithRelationInputObjectSchema as dictTitSubClassOrderByWithRelationInputObjectSchema } from './dictTitSubClassOrderByWithRelationInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  SubClassCode: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  dictTitMainClass: z.lazy(() => dictTitMainClassOrderByWithRelationInputObjectSchema).optional(),
  dictTitSubClass: z.lazy(() => dictTitSubClassOrderByWithRelationInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblMailingListsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblMailingListsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsOrderByWithRelationInput>;
export const tblMailingListsOrderByWithRelationInputObjectZodSchema = makeSchema();
