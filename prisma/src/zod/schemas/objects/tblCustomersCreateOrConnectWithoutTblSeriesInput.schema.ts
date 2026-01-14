import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblSeriesInputObjectSchema as tblCustomersCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersCreateWithoutTblSeriesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSeriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblSeriesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblSeriesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblSeriesInput>;
export const tblCustomersCreateOrConnectWithoutTblSeriesInputObjectZodSchema = makeSchema();
