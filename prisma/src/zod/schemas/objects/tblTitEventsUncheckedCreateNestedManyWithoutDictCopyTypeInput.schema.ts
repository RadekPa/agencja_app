import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateWithoutDictCopyTypeInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictCopyTypeInput.schema';
import { tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateOrConnectWithoutDictCopyTypeInput.schema';
import { tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectSchema as tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectSchema } from './tblTitEventsCreateManyDictCopyTypeInputEnvelope.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema).array(), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInput>;
export const tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
