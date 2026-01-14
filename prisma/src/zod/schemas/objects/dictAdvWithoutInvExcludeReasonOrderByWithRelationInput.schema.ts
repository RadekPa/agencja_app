import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional(),
  ExcludeReasonCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ExcludeReasonDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonOrderByWithRelationInput>;
export const dictAdvWithoutInvExcludeReasonOrderByWithRelationInputObjectZodSchema = makeSchema();
