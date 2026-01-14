import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrRightsOrderByWithRelationInputObjectSchema as tblAgrRightsOrderByWithRelationInputObjectSchema } from './tblAgrRightsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  RoyTypeID: SortOrderSchema.optional(),
  AgrRightID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyTypeDesc: SortOrderSchema.optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const dictRoyTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictRoyTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeOrderByWithRelationInput>;
export const dictRoyTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
