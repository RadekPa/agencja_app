import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblSeriesInputObjectSchema as tblCustomersCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersCreateWithoutTblSeriesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSeriesInput.schema';
import { tblCustomersCreateOrConnectWithoutTblSeriesInputObjectSchema as tblCustomersCreateOrConnectWithoutTblSeriesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblSeriesInput.schema';
import { tblCustomersUpsertWithoutTblSeriesInputObjectSchema as tblCustomersUpsertWithoutTblSeriesInputObjectSchema } from './tblCustomersUpsertWithoutTblSeriesInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblSeriesInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblSeriesInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblSeriesInput.schema';
import { tblCustomersUpdateWithoutTblSeriesInputObjectSchema as tblCustomersUpdateWithoutTblSeriesInputObjectSchema } from './tblCustomersUpdateWithoutTblSeriesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblSeriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSeriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblSeriesInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblSeriesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblSeriesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblSeriesInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneWithoutTblSeriesNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblSeriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblSeriesNestedInput>;
export const tblCustomersUpdateOneWithoutTblSeriesNestedInputObjectZodSchema = makeSchema();
