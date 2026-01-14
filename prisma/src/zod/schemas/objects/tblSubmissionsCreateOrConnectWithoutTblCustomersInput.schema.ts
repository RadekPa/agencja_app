import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsCreateWithoutTblCustomersInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutTblCustomersInput>;
export const tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
