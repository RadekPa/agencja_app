import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './tblSeriesWhereUniqueInput.schema';
import { tblSeriesCreateWithoutTblCustomersInputObjectSchema as tblSeriesCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesCreateWithoutTblCustomersInput.schema';
import { tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSeriesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSeriesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCreateOrConnectWithoutTblCustomersInput>;
export const tblSeriesCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
