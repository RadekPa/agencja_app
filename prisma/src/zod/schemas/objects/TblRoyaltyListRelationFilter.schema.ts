import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyWhereInputObjectSchema as tblRoyaltyWhereInputObjectSchema } from './tblRoyaltyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblRoyaltyWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblRoyaltyWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblRoyaltyWhereInputObjectSchema).optional()
}).strict();
export const TblRoyaltyListRelationFilterObjectSchema: z.ZodType<Prisma.TblRoyaltyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblRoyaltyListRelationFilter>;
export const TblRoyaltyListRelationFilterObjectZodSchema = makeSchema();
