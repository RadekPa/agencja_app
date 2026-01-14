import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectSchema as tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyDictSubmSentTypeInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInput>;
export const tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
