import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithoutTblCustomersInputObjectSchema as tblSubmissionsUpdateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUpdateWithoutTblCustomersInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblSubmissionsCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsCreateWithoutTblCustomersInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
