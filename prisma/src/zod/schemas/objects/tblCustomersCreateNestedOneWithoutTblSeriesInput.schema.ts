import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblSeriesInputObjectSchema as tblCustomersCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersCreateWithoutTblSeriesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSeriesInput.schema';
import { tblCustomersCreateOrConnectWithoutTblSeriesInputObjectSchema as tblCustomersCreateOrConnectWithoutTblSeriesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblSeriesInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblSeriesInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblSeriesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblSeriesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblSeriesInput>;
export const tblCustomersCreateNestedOneWithoutTblSeriesInputObjectZodSchema = makeSchema();
