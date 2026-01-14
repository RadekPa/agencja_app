import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutDictAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema)])
}).strict();
export const tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsCreateOrConnectWithoutDictAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsCreateOrConnectWithoutDictAgrEventsInput>;
export const tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectZodSchema = makeSchema();
