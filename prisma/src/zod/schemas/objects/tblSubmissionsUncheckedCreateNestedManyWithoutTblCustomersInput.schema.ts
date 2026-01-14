import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsCreateWithoutTblCustomersInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectSchema as tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyTblCustomersInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInput>;
export const tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
