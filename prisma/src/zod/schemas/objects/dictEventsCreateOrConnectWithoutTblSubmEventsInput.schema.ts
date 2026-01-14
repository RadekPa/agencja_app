import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './dictEventsWhereUniqueInput.schema';
import { dictEventsCreateWithoutTblSubmEventsInputObjectSchema as dictEventsCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsCreateWithoutTblSubmEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblSubmEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)])
}).strict();
export const dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsCreateOrConnectWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateOrConnectWithoutTblSubmEventsInput>;
export const dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
