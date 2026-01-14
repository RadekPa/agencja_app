import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateWithoutTblTitlesInputObjectSchema as tblTitEventsCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsCreateWithoutTblTitlesInput.schema';
import { tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitEventsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitEventsCreateManyTblTitlesInputEnvelopeObjectSchema as tblTitEventsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblTitEventsCreateManyTblTitlesInputEnvelope.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitEventsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInput>;
export const tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInputObjectZodSchema = makeSchema();
