import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateNestedOneWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedOneWithoutTblTitSubClassInputObjectSchema)
}).strict();
export const tblTitSubClassCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateWithoutTblTitlesInput>;
export const tblTitSubClassCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
