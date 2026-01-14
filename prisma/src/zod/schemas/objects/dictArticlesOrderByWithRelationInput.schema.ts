import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictLanguagesOrderByWithRelationInputObjectSchema as dictLanguagesOrderByWithRelationInputObjectSchema } from './dictLanguagesOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  Article: SortOrderSchema.optional(),
  LangAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dictLanguages: z.lazy(() => dictLanguagesOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const dictArticlesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictArticlesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesOrderByWithRelationInput>;
export const dictArticlesOrderByWithRelationInputObjectZodSchema = makeSchema();
