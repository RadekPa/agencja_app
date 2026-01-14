import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateWithoutDictCopyTypeInput.schema';
import { tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutDictCopyTypeInput.schema';
import { tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema as tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutDictCopyTypeInput.schema';
import { tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectSchema as tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyDictCopyTypeInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInput>;
export const tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
