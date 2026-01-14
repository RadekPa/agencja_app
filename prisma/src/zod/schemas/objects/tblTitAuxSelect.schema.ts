import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema'

const makeSchema = () => z.object({
  TitleID: z.boolean().optional(),
  CopyrightLine: z.boolean().optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional()
}).strict();
export const tblTitAuxSelectObjectSchema: z.ZodType<Prisma.tblTitAuxSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxSelect>;
export const tblTitAuxSelectObjectZodSchema = makeSchema();
