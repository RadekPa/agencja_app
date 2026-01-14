import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsArgsObjectSchema as tblAgrRightsArgsObjectSchema } from './tblAgrRightsArgs.schema'

const makeSchema = () => z.object({
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsArgsObjectSchema)]).optional()
}).strict();
export const dictRoyTypeIncludeObjectSchema: z.ZodType<Prisma.dictRoyTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeInclude>;
export const dictRoyTypeIncludeObjectZodSchema = makeSchema();
