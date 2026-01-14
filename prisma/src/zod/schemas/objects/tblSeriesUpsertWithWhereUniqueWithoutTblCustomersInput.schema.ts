import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './tblSeriesWhereUniqueInput.schema';
import { tblSeriesUpdateWithoutTblCustomersInputObjectSchema as tblSeriesUpdateWithoutTblCustomersInputObjectSchema } from './tblSeriesUpdateWithoutTblCustomersInput.schema';
import { tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblSeriesCreateWithoutTblCustomersInputObjectSchema as tblSeriesCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesCreateWithoutTblCustomersInput.schema';
import { tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSeriesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblSeriesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblSeriesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
