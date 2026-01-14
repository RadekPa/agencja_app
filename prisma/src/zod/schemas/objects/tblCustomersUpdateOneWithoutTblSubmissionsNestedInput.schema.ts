import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersCreateWithoutTblSubmissionsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblSubmissionsInput.schema';
import { tblCustomersUpsertWithoutTblSubmissionsInputObjectSchema as tblCustomersUpsertWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUpsertWithoutTblSubmissionsInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInput.schema';
import { tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema as tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUpdateWithoutTblSubmissionsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblSubmissionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneWithoutTblSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblSubmissionsNestedInput>;
export const tblCustomersUpdateOneWithoutTblSubmissionsNestedInputObjectZodSchema = makeSchema();
