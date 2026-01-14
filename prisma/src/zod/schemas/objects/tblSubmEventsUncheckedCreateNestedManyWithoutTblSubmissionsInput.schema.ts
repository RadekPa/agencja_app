import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema as tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateOrConnectWithoutTblSubmissionsInput.schema';
import { tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectSchema as tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectSchema } from './tblSubmEventsCreateManyTblSubmissionsInputEnvelope.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema).array(), z.lazy(() => tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInput>;
export const tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
