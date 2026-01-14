import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateNestedOneWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  tblTitles: z.lazy(() => tblTitlesCreateNestedOneWithoutTblTitSubClassInputObjectSchema)
}).strict();
export const tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateWithoutDictTitSubClassInput>;
export const tblTitSubClassCreateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
