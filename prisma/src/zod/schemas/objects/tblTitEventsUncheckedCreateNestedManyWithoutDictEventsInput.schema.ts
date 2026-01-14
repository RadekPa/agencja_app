import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateWithoutDictEventsInputObjectSchema as tblTitEventsCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateWithoutDictEventsInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictEventsInput.schema';
import { tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema as tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateOrConnectWithoutDictEventsInput.schema';
import { tblTitEventsCreateManyDictEventsInputEnvelopeObjectSchema as tblTitEventsCreateManyDictEventsInputEnvelopeObjectSchema } from './tblTitEventsCreateManyDictEventsInputEnvelope.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsCreateWithoutDictEventsInputObjectSchema).array(), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitEventsCreateManyDictEventsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInput>;
export const tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectZodSchema = makeSchema();
