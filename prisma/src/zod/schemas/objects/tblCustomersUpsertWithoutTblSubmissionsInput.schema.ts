import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema as tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUpdateWithoutTblSubmissionsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblSubmissionsInput.schema';
import { tblCustomersCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersCreateWithoutTblSubmissionsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblSubmissionsInput>;
export const tblCustomersUpsertWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
