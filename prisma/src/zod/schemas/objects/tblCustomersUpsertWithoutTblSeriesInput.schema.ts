import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblSeriesInputObjectSchema as tblCustomersUpdateWithoutTblSeriesInputObjectSchema } from './tblCustomersUpdateWithoutTblSeriesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblSeriesInput.schema';
import { tblCustomersCreateWithoutTblSeriesInputObjectSchema as tblCustomersCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersCreateWithoutTblSeriesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSeriesInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblSeriesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblSeriesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblSeriesInput>;
export const tblCustomersUpsertWithoutTblSeriesInputObjectZodSchema = makeSchema();
