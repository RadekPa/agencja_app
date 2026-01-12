import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerScalarRelationFilterObjectSchema: z.ZodType<Prisma.CustomerScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomerScalarRelationFilter>;
export const CustomerScalarRelationFilterObjectZodSchema = makeSchema();
