import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersCreateWithoutTblSubmissionsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblSubmissionsInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblSubmissionsInput>;
export const tblCustomersCreateNestedOneWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
