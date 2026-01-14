import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './tblTitlesOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CopyrightLine: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblTitAuxOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblTitAuxOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxOrderByWithRelationInput>;
export const tblTitAuxOrderByWithRelationInputObjectZodSchema = makeSchema();
