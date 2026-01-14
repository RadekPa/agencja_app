import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './dictCustTypesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictCustTypesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => dictCustTypesWhereInputObjectSchema).optional()
}).strict();
export const DictCustTypesScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictCustTypesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictCustTypesScalarRelationFilter>;
export const DictCustTypesScalarRelationFilterObjectZodSchema = makeSchema();
