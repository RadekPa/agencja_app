import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateWithoutDictEventsInputObjectSchema as tblSubmEventsCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateWithoutDictEventsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutDictEventsInput.schema';
import { tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema as tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateOrConnectWithoutDictEventsInput.schema';
import { tblSubmEventsCreateManyDictEventsInputEnvelopeObjectSchema as tblSubmEventsCreateManyDictEventsInputEnvelopeObjectSchema } from './tblSubmEventsCreateManyDictEventsInputEnvelope.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsCreateWithoutDictEventsInputObjectSchema).array(), z.lazy(() => tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmEventsCreateManyDictEventsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsCreateNestedManyWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsCreateNestedManyWithoutDictEventsInput>;
export const tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectZodSchema = makeSchema();
