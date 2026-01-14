import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './tblPublishersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblPublishersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblPublishersWhereInputObjectSchema).optional()
}).strict();
export const TblPublishersScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblPublishersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblPublishersScalarRelationFilter>;
export const TblPublishersScalarRelationFilterObjectZodSchema = makeSchema();
