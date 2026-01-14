import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassUpdateWithoutTblTitlesInputObjectSchema as tblTitSubClassUpdateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUpdateWithoutTblTitlesInput.schema';
import { tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedUpdateWithoutTblTitlesInput.schema';
import { tblTitSubClassCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassCreateWithoutTblTitlesInput.schema';
import { tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitSubClassUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInput>;
export const tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
