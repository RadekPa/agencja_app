import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './tblTitlesOrderByWithRelationInput.schema';
import { dictTitSubClassOrderByWithRelationInputObjectSchema as dictTitSubClassOrderByWithRelationInputObjectSchema } from './dictTitSubClassOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByWithRelationInputObjectSchema).optional(),
  dictTitSubClass: z.lazy(() => dictTitSubClassOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblTitSubClassOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblTitSubClassOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassOrderByWithRelationInput>;
export const tblTitSubClassOrderByWithRelationInputObjectZodSchema = makeSchema();
