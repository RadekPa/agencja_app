import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailWhereInputObjectSchema as ArTransferDetailWhereInputObjectSchema } from './ArTransferDetailWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ArTransferDetailWhereInputObjectSchema).optional(),
  some: z.lazy(() => ArTransferDetailWhereInputObjectSchema).optional(),
  none: z.lazy(() => ArTransferDetailWhereInputObjectSchema).optional()
}).strict();
export const ArTransferDetailListRelationFilterObjectSchema: z.ZodType<Prisma.ArTransferDetailListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailListRelationFilter>;
export const ArTransferDetailListRelationFilterObjectZodSchema = makeSchema();
