import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassUpdateWithoutTblTitlesInputObjectSchema as tblTitSubClassUpdateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUpdateWithoutTblTitlesInput.schema';
import { tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitSubClassUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInput>;
export const tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
