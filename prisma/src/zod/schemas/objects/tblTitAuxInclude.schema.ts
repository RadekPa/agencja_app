import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema'

const makeSchema = () => z.object({
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional()
}).strict();
export const tblTitAuxIncludeObjectSchema: z.ZodType<Prisma.tblTitAuxInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxInclude>;
export const tblTitAuxIncludeObjectZodSchema = makeSchema();
