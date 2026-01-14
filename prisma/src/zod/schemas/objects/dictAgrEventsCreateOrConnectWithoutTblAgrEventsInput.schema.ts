import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './dictAgrEventsWhereUniqueInput.schema';
import { dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsCreateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUncheckedCreateWithoutTblAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictAgrEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)])
}).strict();
export const dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.dictAgrEventsCreateOrConnectWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsCreateOrConnectWithoutTblAgrEventsInput>;
export const dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
