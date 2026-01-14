import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema';
import { dictTitSubClassArgsObjectSchema as dictTitSubClassArgsObjectSchema } from './dictTitSubClassArgs.schema'

const makeSchema = () => z.object({
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional(),
  dictTitSubClass: z.union([z.boolean(), z.lazy(() => dictTitSubClassArgsObjectSchema)]).optional()
}).strict();
export const tblTitSubClassIncludeObjectSchema: z.ZodType<Prisma.tblTitSubClassInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassInclude>;
export const tblTitSubClassIncludeObjectZodSchema = makeSchema();
