import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithoutTblCustomersInputObjectSchema as tblTitlesUpdateWithoutTblCustomersInputObjectSchema } from './tblTitlesUpdateWithoutTblCustomersInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblTitlesCreateWithoutTblCustomersInputObjectSchema as tblTitlesCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesCreateWithoutTblCustomersInput.schema';
import { tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
