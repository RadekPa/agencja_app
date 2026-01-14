import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './tblSeriesWhereUniqueInput.schema';
import { tblSeriesUpdateWithoutTblCustomersInputObjectSchema as tblSeriesUpdateWithoutTblCustomersInputObjectSchema } from './tblSeriesUpdateWithoutTblCustomersInput.schema';
import { tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSeriesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblSeriesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
