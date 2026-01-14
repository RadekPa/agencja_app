import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema';
import { dictTitSubClassArgsObjectSchema as dictTitSubClassArgsObjectSchema } from './dictTitSubClassArgs.schema'

const makeSchema = () => z.object({
  SubClassCode: z.boolean().optional(),
  TitleID: z.boolean().optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional(),
  dictTitSubClass: z.union([z.boolean(), z.lazy(() => dictTitSubClassArgsObjectSchema)]).optional()
}).strict();
export const tblTitSubClassSelectObjectSchema: z.ZodType<Prisma.tblTitSubClassSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassSelect>;
export const tblTitSubClassSelectObjectZodSchema = makeSchema();
