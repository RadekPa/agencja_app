import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersCreateWithoutTblSubmissionsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblSubmissionsInput>;
export const tblCustomersCreateOrConnectWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
