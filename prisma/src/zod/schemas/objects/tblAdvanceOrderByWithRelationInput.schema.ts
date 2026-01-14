import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './tblAgreementsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  AdvID: SortOrderSchema.optional(),
  Inst: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AdvTermId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTermDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblAdvanceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblAdvanceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceOrderByWithRelationInput>;
export const tblAdvanceOrderByWithRelationInputObjectZodSchema = makeSchema();
