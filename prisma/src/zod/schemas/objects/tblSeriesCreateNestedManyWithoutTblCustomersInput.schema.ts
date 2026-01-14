import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesCreateWithoutTblCustomersInputObjectSchema as tblSeriesCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesCreateWithoutTblCustomersInput.schema';
import { tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedCreateWithoutTblCustomersInput.schema';
import { tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema as tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblSeriesCreateOrConnectWithoutTblCustomersInput.schema';
import { tblSeriesCreateManyTblCustomersInputEnvelopeObjectSchema as tblSeriesCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblSeriesCreateManyTblCustomersInputEnvelope.schema';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './tblSeriesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSeriesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSeriesCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblSeriesWhereUniqueInputObjectSchema), z.lazy(() => tblSeriesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblSeriesCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCreateNestedManyWithoutTblCustomersInput>;
export const tblSeriesCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
