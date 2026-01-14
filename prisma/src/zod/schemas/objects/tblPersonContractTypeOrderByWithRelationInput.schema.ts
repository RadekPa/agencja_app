import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  CTypeID: SortOrderSchema.optional(),
  CTypeDescr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tblPersonContractTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeOrderByWithRelationInput>;
export const tblPersonContractTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
