import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateNestedOneWithoutTblTitSubClassInput.schema';
import { dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateNestedOneWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  tblTitles: z.lazy(() => tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectSchema),
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectSchema)
}).strict();
export const tblTitSubClassCreateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateInput>;
export const tblTitSubClassCreateInputObjectZodSchema = makeSchema();
