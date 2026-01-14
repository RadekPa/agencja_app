import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema as tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateOrConnectWithoutDictAgrEventsInput.schema';
import { tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectSchema as tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectSchema } from './tblAgrEventsCreateManyDictAgrEventsInputEnvelope.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema).array(), z.lazy(() => tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInput>;
export const tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInputObjectZodSchema = makeSchema();
